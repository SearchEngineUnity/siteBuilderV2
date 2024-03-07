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
      allSanitySoloGuidePage {
        edges {
          node {
            primarySubcategory {
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
    const sections = page?.node?.sections;
    let subject;
    if (sections) {
      subject = sections.filter((section) => section._type === 'latestWithPaginationSection')[0]
        ?.subject?.name;
    }

    console.log(sections);
    console.log(subject);

    // const sgpCountbySubject = data.allSanitySoloGuidePage.edges.node.filter(
    //   (sgp) => sgp?.primarySubcategory?.name === subjectName,
    // );

    const firstPageCount = 8;
    const secondPageCount = 24;

    if (page?.node?.slug?.current) {
      // create first page
      actions.createPage({
        path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
        ownerNodeId: page.node.id,
        component: path.resolve(`./src/templates/flexListingPage.js`),
        context: {
          slug: page.node.slug.current,
        },
      });
      // actions.createPage({
      //   path: i === 0 ? `/${page.node.slug.current}` : `${page.node.slug.current}/${i + 1}`,
      //   component: path.resolve(`./src/templates/flexListingPage.js`),
      //   ownerNodeId: page.node.id,
      //   context: {
      //     listItemType,
      //     limit: numPerPage,
      //     skip: i * numPerPage,
      //     numPages,
      //     currentpage: i + 1,
      //     slug: page.node.slug.current,
      //   },
      // });
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
    }
  `);

  const guides = data.allSanitySoloGuidePage.edges;
  guides.forEach((guide) => {
    if (guide?.node?.slug?.current) {
      actions.createPage({
        path: `/${guide.node.slug.current}`,
        ownerNodeId: guide.node.id,
        component: path.resolve(`./src/templates/soloGuidePage.js`),
        context: {
          slug: guide.node.slug.current,
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
