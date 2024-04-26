const guideIndexName = `pro_SGP`;

const guideQuery = `{
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

function guideToAlgoliaRecord({
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

const listingPageIndexName = `pro_Listing`;

const listingPageQuery = `{
  pages: allSanityFlexListingPage {
    edges {
      node {
        slug {
          current
        }
        id
        internal {
          contentDigest
        }
        pageTitle
        metaDescription
      }
    }
  }
}`;

function listingPageToAlgoliaRecord({ node: { id, pageTitle, metaDescription, slug, internal } }) {
  return {
    objectID: id,
    slug: slug.current,
    title: pageTitle,
    metaDescription,
    internal,
  };
}

const queries = [
  {
    query: guideQuery,
    transformer: ({ data }) => data.pages.edges.map(guideToAlgoliaRecord),
    indexName: guideIndexName,
  },
  {
    query: listingPageQuery,
    transformer: ({ data }) => data.pages.edges.map(listingPageToAlgoliaRecord),
    indexName: listingPageIndexName,
  },
];

module.exports = queries;
