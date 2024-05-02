/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useMainNav = () => {
  const mainNav = useStaticQuery(
    graphql`
      query mainNav {
        menu: sanityNavMenu(type: { eq: "mainNav" }) {
          type
          menuArray {
            _key
            menuGroup {
              ... on SanityNavClickableImage {
                _key
                _type
                image: _rawImage(resolveReferences: { maxDepth: 10 })
                link {
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    newTab
                    noreferrer
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    href
                  }
                }
              }
              ... on SanityNavBrand {
                _key
                _type
                alt
                brandGroup {
                  _key
                  maxHeight
                  maxWidth
                  type
                  brand {
                    _id
                    logo {
                      asset {
                        url
                      }
                    }
                  }
                }
              }
              ... on SanityNavGroup {
                _key
                _type
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
      }
    `,
  );

  return mainNav;
};
