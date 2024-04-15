/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useSeoDefaults = () => {
  const { defaults } = useStaticQuery(
    graphql`
      query seoDefaults {
        defaults: sanityGeneralSettings {
          siteDomain
          socialImage {
            asset {
              url
            }
          }
        }
      }
    `,
  );

  return {
    metaUrl: defaults.siteDomain,
    socialImage: defaults.socialImage.asset.url,
  };
};
