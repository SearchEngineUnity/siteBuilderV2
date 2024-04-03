const path = require('path');

// Type airtable redirect data - this resolves issue with empty ATT
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Airtable implements Node {
      data: AirtableData
    }
    type AirtableData {
      Source: String!
      Destination: String!
    }
  `;
  createTypes(typeDefs);
};

// Remove /dev-404-page as part of gatsby develop
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  if (page.path === '/dev-404-page') {
    deletePage(page);
  } else {
    createPage(page);
  }
};

// create all structured pages
async function createStructuredPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `);

  const pages = data.allSanityPage.edges;
  pages.forEach((page) => {
    if (page?.node?.slug?.current) {
      actions.createPage({
        path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
        ownerNodeId: page.node.id,
        component: path.resolve(`./src/templates/structuredPage.jsx`),
        context: {
          slug: page.node.slug.current,
        },
      });
    }
  });
}

async function createFlexListingPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityFlexListingPage {
        edges {
          node {
            id
            slug {
              current
            }
            subject {
              ... on SanityCategory {
                id
                name
              }
              ... on SanitySubcategory {
                id
                name
              }
              ... on SanityTopic {
                id
                name
              }
            }
            sections {
              ... on SanityLatestWithPaginationSection {
                _key
                _type
                subject {
                  ... on SanityCategory {
                    _type
                    name
                  }
                  ... on SanitySubcategory {
                    _type
                    name
                  }
                  ... on SanityTopic {
                    _type
                    name
                  }
                }
              }
              ... on SanityFeaturedTilesSection {
                _key
                _type
                featuredTiles {
                  slug {
                    current
                  }
                }
              }
              ... on SanityLatestXSection {
                _key
                _type
                count
                subject {
                  ... on SanityCategory {
                    name
                  }
                  ... on SanitySubcategory {
                    name
                  }
                  ... on SanityTopic {
                    name
                  }
                }
              }
            }
          }
        }
      }
      allSanitySoloGuidePage(sort: { displayDate: DESC }) {
        edges {
          node {
            id
            displayDate
            tileTitle
            tileText
            tileImage {
              asset {
                gatsbyImageData(fit: CROP)
              }
            }
            primarySubcategory {
              name
              category {
                name
              }
            }
            secondarySubcategory {
              name
              category {
                name
              }
            }
            topicTags {
              name
            }
            slug {
              current
            }
            hero {
              feature
              video {
                url
              }
            }
          }
        }
      }
    }
  `);

  const pages = data.allSanityFlexListingPage.edges;
  const subjectListingPages = data.allSanityFlexListingPage.edges.map((x) => ({
    node: {
      slug: {
        current: x?.node?.slug?.current,
      },
      subject: {
        id: x?.node?.subject?.id,
        name: x?.node?.subject?.name,
      },
    },
  }));

  pages.forEach((page) => {
    let subjectName;
    const allSgps = data.allSanitySoloGuidePage.edges;
    let featuredSgps;
    let sgpsExcludesFeatured = [];
    const sgpsForAllLatestXSections = [];
    let sgpsWithFullExclusion = [];
    let allSgpsForPagination = [];

    const sections = page?.node?.sections;

    const containsLatestWithPaginationSection = sections
      .map((section) => section._type)
      .includes('latestWithPaginationSection');

    const containsFeaturedTilesSection = sections
      .map((section) => section._type)
      .includes('featuredTilesSection');

    const containsLatestXSection = sections
      .map((section) => section._type)
      .includes('latestXSection');

    // find all the articles from featured tiles section
    if (containsFeaturedTilesSection) {
      const featuredTilesSectionArr = sections.filter(
        (section) => section._type === 'featuredTilesSection',
      );

      featuredSgps = featuredTilesSectionArr
        .map((section) => section.featuredTiles)
        .flat()
        .map((tiles) => tiles.slug.current);

      sgpsExcludesFeatured = allSgps.filter(
        (sgp) => !featuredSgps.includes(sgp.node?.slug?.current),
      );
    } else {
      sgpsExcludesFeatured = allSgps;
    }

    // find all the articles from latest x section
    if (containsLatestXSection) {
      // identify all the latest x section arr
      const latestXSectionsArr = sections.filter((section) => section._type === 'latestXSection');

      latestXSectionsArr.forEach((section) => {
        const sectionSubjectName = section.subject.name;
        const sectionTileCount = section.count;

        const sectionTiles = sgpsExcludesFeatured
          .filter((sgp) => {
            if (
              sgp.node.primarySubcategory?.name === sectionSubjectName ||
              sgp.node.primarySubcategory?.category?.name === sectionSubjectName ||
              sgp.node.topicTags.map((x) => x.name).includes(sectionSubjectName)
            ) {
              return true;
            }
            return false;
          })
          .slice(0, sectionTileCount);

        sgpsForAllLatestXSections.push(...sectionTiles);
      });

      const slugsForAllSgpsInLatestXSections = [
        ...new Set(sgpsForAllLatestXSections.map((sgp) => sgp?.node?.slug?.current)),
      ];

      sgpsWithFullExclusion = sgpsExcludesFeatured.filter(
        (sgp) => !slugsForAllSgpsInLatestXSections.includes(sgp.node?.slug.current),
      );
    } else {
      sgpsWithFullExclusion = sgpsExcludesFeatured;
    }

    // provide the final filtered out sgps for sgpsForLatestWithPagination
    if (containsLatestWithPaginationSection) {
      // find out the subject name and type for the latest with pagination section
      const subject = sections.filter(
        (section) => section._type === 'latestWithPaginationSection',
      )[0]?.subject;
      subjectName = subject?.name;

      // get all the articles that has the same subject tag
      allSgpsForPagination = sgpsWithFullExclusion.filter((sgp) => {
        if (
          sgp.node.primarySubcategory?.name === subjectName ||
          sgp.node.primarySubcategory?.category?.name === subjectName ||
          sgp.node.secondarySubcategory.map((x) => x?.name).includes(subjectName) ||
          sgp.node.secondarySubcategory?.map((x) => x?.category?.name).includes(subjectName) ||
          sgp.node.topicTags.map((x) => x?.name).includes(subjectName)
        ) {
          return true;
        }
        return false;
      });
    }

    const totalSgpsCountForPagination = allSgpsForPagination.length;
    const firstPageCount = 4; // once done testing set to 20
    const subsequentPageCount = 1; // once done testing set to 40

    const numOfSubsequentPage =
      totalSgpsCountForPagination < firstPageCount
        ? 0
        : Math.ceil((totalSgpsCountForPagination - firstPageCount) / subsequentPageCount);

    if (page?.node?.slug?.current) {
      Array.from({ length: numOfSubsequentPage + 1 }).forEach((_, i) => {
        actions.createPage({
          path: `/${page.node.slug.current === '/' ? '' : page.node.slug.current}${
            i === 0 ? '' : `/${i + 1}`
          }`,
          ownerNodeId: page.node.id,
          component: path.resolve(`./src/templates/flexListingPage.jsx`),
          context: {
            slug: page.node.slug.current,
            sgpsForAllLatestXSections,
            sgpsForPagination:
              i === 0
                ? allSgpsForPagination.slice(0, firstPageCount)
                : allSgpsForPagination.slice(
                    (i - 1) * subsequentPageCount + firstPageCount,
                    i * subsequentPageCount + firstPageCount,
                  ),
            firstPageCount,
            subsequentPageCount,
            numPages: numOfSubsequentPage + 1,
            currentpage: i + 1,
            subjectListingPages,
          },
        });
      });
    }
  });
}

// create individual guides
async function createSoloGuidePages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanitySoloGuidePage(sort: { displayDate: DESC }) {
        edges {
          node {
            slug {
              current
            }
            id
            displayDate
            tileTitle
            tileText
            tileImage {
              asset {
                gatsbyImageData(fit: CROP)
              }
            }
            primarySubcategory {
              name
              category {
                name
              }
            }
            secondarySubcategory {
              name
              category {
                name
              }
            }
            topicTags {
              name
            }
            slug {
              current
            }
            hero {
              feature
              video {
                url
              }
            }
          }
        }
      }
      allSanityFlexListingPage {
        edges {
          node {
            slug {
              current
            }
            subject {
              ... on SanityCategory {
                id
                name
              }
              ... on SanitySubcategory {
                id
                name
              }
              ... on SanityTopic {
                id
                name
              }
            }
          }
        }
      }
    }
  `);

  const guides = data.allSanitySoloGuidePage.edges;
  const subjectListingPages = data.allSanityFlexListingPage.edges;
  guides.forEach((guide) => {
    if (guide?.node?.slug?.current) {
      const subjectName = guide.node?.primarySubcategory?.name;
      let moreInPrimarySubSgps = [];

      if (subjectName) {
        moreInPrimarySubSgps = guides
          .filter((sgp) => sgp.node.primarySubcategory?.name === subjectName)
          .slice(0, 8);
      }

      actions.createPage({
        path: `/${guide.node.slug.current}`,
        ownerNodeId: guide.node.id,
        component: path.resolve(`./src/templates/soloGuidePage.jsx`),
        context: {
          slug: guide.node.slug.current,
          subjectListingPages,
          moreInPrimarySubSgps,
        },
      });
    }
  });
}

// create airtable redirect
async function createAirtableRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allAirtable {
        nodes {
          data {
            fromPath: Source
            toPath: Destination
          }
        }
      }
    }
  `);

  const redirects = data?.allAirtable?.nodes;

  if (redirects.length > 0) {
    redirects.forEach((redirect) => {
      const {
        data: { fromPath, toPath },
      } = redirect;

      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        force: true,
      });
    });
  }
}

exports.createPages = async ({ actions, graphql }) => {
  await createStructuredPages(actions, graphql);
  await createFlexListingPages(actions, graphql);
  await createSoloGuidePages(actions, graphql);
  await createAirtableRedirects(actions, graphql);
};
