/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useFooter = () => {
  const footer = useStaticQuery(
    graphql`
      query footer {
        footerMenu: sanityNavMenu(type: { eq: "mainFooter" }) {
          type
          menuArray {
            _key
            menuGroup {
              ... on SanityNavBrand {
                _key
                _type
                alt
                brandGroup {
                  _key
                  height
                  type
                  brand {
                    _id
                    logo {
                      asset {
                        url
                        metadata {
                          dimensions {
                            aspectRatio
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on SanityNavGroup {
                _key
                _type
                title
                group {
                  title
                  isButton
                  icon
                  nav {
                    ... on SanityPage {
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      slug {
                        current
                      }
                    }
                    ... on SanityFlexListingPage {
                      slug {
                        current
                      }
                    }
                  }
                  _key
                }
              }
              ... on SanityNavItem {
                _key
                _type
                isButton
                title
                nav {
                  ... on SanityPage {
                    slug {
                      current
                    }
                  }
                  ... on SanitySoloGuidePage {
                    slug {
                      current
                    }
                  }
                  ... on SanityFlexListingPage {
                    slug {
                      current
                    }
                  }
                }
              }
              ... on SanityNavPhone {
                _key
                _type
                text
                phoneNumber
              }
            }
          }
        }
        contactInfo: sanityContactInfo {
          name
          homePage
        }
      }
    `,
  );

  return footer;
};
