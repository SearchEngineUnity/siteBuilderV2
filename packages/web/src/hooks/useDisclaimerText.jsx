/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useDisclaimerText = () => {
  const { settings } = useStaticQuery(
    graphql`
      query disclaimerText {
        settings: sanityGeneralSettings {
          _rawDisclaimerText
        }
      }
    `,
  );

  return settings._rawDisclaimerText;
};
