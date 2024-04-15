/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useLayout = () => {
  const layout = useStaticQuery(
    graphql`
      query layout {
        footer: sanityNavMenu(type: { eq: "mainFooter" }) {
          type
        }
        mainNav: sanityNavMenu(type: { eq: "mainNav" }) {
          type
        }
      }
    `,
  );

  return layout;
};
