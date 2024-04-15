/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useContactInfo = () => {
  const { info } = useStaticQuery(
    graphql`
      query contactInfo {
        info: sanityContactInfo {
          address1
          address2
          city
          country
          email
          phone
          mailCode
          provinceState
        }
      }
    `,
  );

  return info;
};
