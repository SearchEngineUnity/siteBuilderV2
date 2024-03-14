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
        component: path.resolve(`./src/templates/structuredPage.js`),
        context: {
          slug: page.node.slug.current,
        },
      });
    }
  });
}

// create all listing pages
// async function createFlexListingPages(actions, graphql) {
//   const { data } = await graphql(`
//     {
//       allSanityFlexListingPage {
//         edges {
//           node {
//             id
//             slug {
//               current
//             }
//             sections {
//               ... on SanityPaginatedListingSection {
//                 _key
//                 _type
//                 count
//                 listItemType
//               }
//             }
//           }
//         }
//       }
//       allSanitySoloGuidePage {
//         totalCount
//       }
//     }
//   `);

//   const pages = data.allSanityFlexListingPage.edges;
//   pages.forEach((page) => {
//     const { listItemType } = page.node.sections.filter(
//       (section) => section._type === 'paginatedListingSection',
//     )[0];
//     const numPerPage = page.node.sections.filter(
//       (section) => section._type === 'paginatedListingSection',
//     )[0].count;
//     let totalCount;
//     switch (listItemType) {
//       case 'Solo Guide Page':
//         totalCount = data.allSanitySoloGuidePage.totalCount;
//         break;

//       default:
//         break;
//     }
//     const numPages = Math.ceil(totalCount / numPerPage);
//     Array.from({ length: numPages }).forEach((_, i) => {
//       if (page?.node?.slug?.current) {
//         actions.createPage({
//           path: i === 0 ? `/${page.node.slug.current}` : `${page.node.slug.current}/${i + 1}`,
//           component: path.resolve(`./src/templates/flexListingPage.js`),
//           ownerNodeId: page.node.id,
//           context: {
//             listItemType,
//             limit: numPerPage,
//             skip: i * numPerPage,
//             numPages,
//             currentpage: i + 1,
//             slug: page.node.slug.current,
//           },
//         });
//       }
//     });
//   });
// }
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
              alt
              _rawAsset(resolveReferences: { maxDepth: 4 })
            }
            primarySubcategory {
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
          }
        }
      }
    }
  `);

  const pages = data.allSanityFlexListingPage.edges;
  pages.forEach((page) => {
    let subjectName;
    const allSgps = data.allSanitySoloGuidePage.edges;
    let featuredSgps;
    let sgpsExcludesFeatured = [];
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
      // console.log('this page contains at least one featured tiles section');
      const featuredTilesSectionArr = sections.filter(
        (section) => section._type === 'featuredTilesSection',
      );

      featuredSgps = featuredTilesSectionArr
        .map((section) => section.featuredTiles)
        .flat()
        .map((tiles) => tiles.slug.current);
      // console.log('featured tiles section arr');
      // console.log(featuredTilesSectionArr);
      // console.log(featuredSgps);
      sgpsExcludesFeatured = allSgps.filter(
        (sgp) => !featuredSgps.includes(sgp.node?.slug?.current),
      );
      // console.log(sgpsExcludesFeatured);
    }

    // find all the articles from latest x section
    if (containsLatestXSection && containsLatestWithPaginationSection) {
      console.log('this page contains at least one latest x section');
      // identify all the latest x section arr
      const latestXSectionsArr = sections.filter((section) => section._type === 'latestXSection');
      // console.log('latest X section arr');
      // console.log(latestXSectionsArr);

      const sgpsForAllLatestXSections = [];

      latestXSectionsArr.forEach((section) => {
        const sectionType = section._type;
        const sectionSubjectName = section.subject.name;
        const sectionTileCount = section.count;

        // console.log(sectionType);
        // console.log(sectionSubjectName);
        // console.log(sectionTileCount);

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

        console.log(sectionTiles);
        sgpsForAllLatestXSections.push(...sectionTiles);
      });

      console.log('sgps for all latest x sections');
      console.log(sgpsForAllLatestXSections);
      const slugsForAllSgpsInLatestXSections = [
        ...new Set(sgpsForAllLatestXSections.map((sgp) => sgp?.node?.slug?.current)),
      ];
      console.log(slugsForAllSgpsInLatestXSections);
      sgpsWithFullExclusion = sgpsExcludesFeatured.filter(
        (sgp) => !slugsForAllSgpsInLatestXSections.includes(sgp.node?.slug.current),
      );
    }

    // provide the final filtered out sgps for sgpsForLatestWithPagination
    if (containsLatestWithPaginationSection) {
      // find out the subject name and type for the latest with pagination section
      const subject = sections.filter(
        (section) => section._type === 'latestWithPaginationSection',
      )[0]?.subject;
      subjectName = subject?.name;

      // console.log('subject name');
      // console.log(subjectName);

      // get all the articles that has the same subject tag
      allSgpsForPagination = sgpsWithFullExclusion.filter((sgp) => {
        if (
          sgp.node.primarySubcategory?.name === subjectName ||
          sgp.node.primarySubcategory?.category?.name === subjectName ||
          sgp.node.topicTags.map((x) => x.name).includes(subjectName)
        ) {
          return true;
        }
        return false;
      });

      // console.log('all spg matching subject name');
      // console.log(allSgpsForPagination);
    }

    const totalSgpsCountForPagination = allSgpsForPagination.length;
    const firstPageCount = 8;
    const subsequentPageCount = 16;

    const numOfSubsequentPage =
      totalSgpsCountForPagination < firstPageCount
        ? 0
        : Math.ceil((totalSgpsCountForPagination - firstPageCount) / subsequentPageCount);

    console.log('total count');
    console.log(totalSgpsCountForPagination);
    console.log('numb of sub pages');
    console.log(numOfSubsequentPage);
    console.log('slug for sgps for pagination');
    console.log(allSgpsForPagination.map((x) => x.node.slug.current));

    if (page?.node?.slug?.current) {
      // create first page
      actions.createPage({
        path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
        ownerNodeId: page.node.id,
        component: path.resolve(`./src/templates/flexListingPage.js`),
        context: {
          slug: page.node.slug.current,
          sgpsExcludesFeatured,
          sgpsForPagination: allSgpsForPagination,
          firstPageCount,
          limit: subsequentPageCount,
          numPages: numOfSubsequentPage,
          currentpage: 1,
        },
      });

      if (numOfSubsequentPage > 0) {
        Array.from({ length: numOfSubsequentPage }).forEach((_, i) => {
          if (page?.node?.slug?.current) {
            actions.createPage({
              path: `/${page.node.slug.current}/${i + 2}`,
              ownerNodeId: page.node.id,
              component: path.resolve(`./src/templates/flexListingPage.js`),
              context: {
                slug: page.node.slug.current,
                sgpsExcludesFeatured,
                sgpsForPagination: allSgpsForPagination,
                firstPageCount,
                limit: subsequentPageCount,
                numPages: numOfSubsequentPage,
                currentpage: i + 2,
              },
            });
          }
        });
      }
    }
  });
}

// create individual guides
async function createSoloGuidePages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanitySoloGuidePage {
        edges {
          node {
            slug {
              current
            }
            id
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
      actions.createPage({
        path: `/${guide.node.slug.current}`,
        ownerNodeId: guide.node.id,
        component: path.resolve(`./src/templates/soloGuidePage.js`),
        context: {
          slug: guide.node.slug.current,
          subjectListingPages,
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
