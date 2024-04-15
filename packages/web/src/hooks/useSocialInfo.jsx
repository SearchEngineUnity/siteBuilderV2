/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useSocialInfo = () => {
  const { info } = useStaticQuery(
    graphql`
      query socialInfo {
        info: allSanitySocialInfo {
          edges {
            node {
              _id
              social
              link
            }
          }
        }
      }
    `,
  );

  return info.edges;
};
