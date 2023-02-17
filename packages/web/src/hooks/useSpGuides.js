/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useSpGuides = () => {
  const { guides } = useStaticQuery(
    graphql`
      query AllSpGuides {
        guides: allSanitySoloGuidePage(sort: { displayDate: DESC }) {
          nodes {
            _id
            slug {
              current
            }
            displayDate
            tileTitle
            tileText
            tileImage {
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
            }
          }
        }
      }
    `,
  );

  const guidesAsCards = guides.nodes.map(
    ({ _id, tileTitle, tileImage, displayDate, slug, tileText }) => ({
      _key: _id,
      title: tileTitle,
      image: tileImage._rawAsset,
      text: tileText,
      date: displayDate,
      url: slug.current,
    }),
  );

  return guidesAsCards;
};
