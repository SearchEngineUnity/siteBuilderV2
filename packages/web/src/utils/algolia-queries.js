// const escapeStringRegexp = require('escape-string-regexp');
// const pagePath = `content`;
const indexName = `pro_SGP`;

const pageQuery = `{
  pages: allSanitySoloGuidePage {
    edges {
      node {
        slug {
          current
        }
        id
        hero {
          h1
        }
        internal {
          contentDigest
        }
        pageTitle
        metaDescription
        toc {
          title
        }
        guideBody {
          children {
            text
          }
          style
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({
  node: { id, hero, pageTitle, metaDescription, toc, slug, internal, guideBody },
}) {
  const h2 = guideBody.filter((x) => x.style === 'h2').map((x) => x.children[0].text);

  const h3 = guideBody.filter((x) => x.style === 'h3').map((x) => x.children[0].text);

  const tocArr = toc.map((x) => x.title);

  return {
    objectID: id,
    slug: slug.current,
    title: pageTitle,
    h1: hero.h1,
    metaDescription,
    toc: tocArr,
    internal,
    h2,
    h3,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    // settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
