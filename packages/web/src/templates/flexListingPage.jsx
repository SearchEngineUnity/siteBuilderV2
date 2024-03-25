import React from 'react';
import { graphql } from 'gatsby';
import Container from '@mui/material/Container';
import Seo from '../components/Seo';
import Layout from '../containers/layout';
import LrHero from '../components/sections/LrFlexHero';
import LrFlex from '../components/sections/StructuredLrFlex';
import StackFlex from '../components/sections/StackFlex';
import StackHero from '../components/sections/StackHero';
import VideoHero from '../components/sections/VideoHero';
import FeaturedTilesSection from '../components/sections/FeaturedTilesSection';
import LatestWithPaginationSection from '../components/sections/LatestWithPaginationSection';
import LatestXSection from '../components/sections/LatestXSection';
import TagSetSection from '../components/sections/TagSetSection';
import PageBreadcrumbs from '../components/navs/breadcrumbs/PageBreadcrumbs';

import {
  mapLrHeroToProps,
  mapLrFlexToProps,
  mapStackSectionToProps,
  mapVideoHeroToProps,
  mapLatestXSectionToProps,
  mapLatestWithPaginationSectionToProps,
  mapSeoToProps,
} from '../lib/mapToProps';

const type = 'page';

export const query = graphql`
  query ListPageTemplate($slug: String) {
    page: sanityFlexListingPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
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
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
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
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
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
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 4 })
              _rawText(resolveReferences: { maxDepth: 5 })
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          idTag
          layout
          reverseOrder
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
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
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
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
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
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
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          idTag
          layout
          reverseOrder
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
        }
        ... on SanityStackHero {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
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
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
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
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
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
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 5 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
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
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
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
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
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
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
        }
        ... on SanityFeaturedTilesSection {
          _key
          _type
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          headerAlignment
          footerAlignment
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          idTag
          featuredTiles {
            _key
            slug {
              current
            }
            _rawTileImage(resolveReferences: { maxDepth: 1 })
            tileText
            tileTitle
            hero {
              feature
            }
          }
        }
        ... on SanityLatestWithPaginationSection {
          _key
          _type
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          headerAlignment
          footerAlignment
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          idTag
          subject {
            ... on SanityCategory {
              name
            }
            ... on SanitySubcategory {
              name
            }
            ... on SanityTopic {
              name
            }
          }
        }
        ... on SanityLatestXSection {
          _key
          _type
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          headerAlignment
          footerAlignment
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          idTag
          count
          subject {
            ... on SanityCategory {
              name
            }
            ... on SanitySubcategory {
              name
            }
            ... on SanityTopic {
              name
            }
          }
        }
        ... on SanityTagSetSection {
          _key
          _type
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          headerAlignment
          footerAlignment
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          idTag
          tagSet {
            ... on SanitySubcategory {
              name
              _key
            }
            ... on SanityTopic {
              name
              _key
            }
          }
        }
        ... on SanityVideoHero {
          _key
          _type
          button {
            _key
            _type
            idTag
            btnAlignment
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
            text
            design {
              bgImage {
                asset {
                  url
                }
              }
              typography {
                fontFamily
                fontWeight
                fontSize
                lineHeight
                letterSpacing
              }
              settings {
                border
                disableElevation
                disableFocusRipple
                disableRipple
                fullWidth
                variant
                padding
                borderRadius
              }
              colors {
                contrastText {
                  color {
                    rgb {
                      r
                      g
                      b
                      a
                    }
                  }
                }
                dark {
                  color {
                    rgb {
                      r
                      g
                      b
                      a
                    }
                  }
                }
                main {
                  color {
                    rgb {
                      r
                      g
                      b
                      a
                    }
                  }
                }
              }
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          heading
          headingAlignment
          imageAlignment
          idTag
          heroImage {
            alt
            _rawAsset(resolveReferences: { maxDepth: 1 })
          }
          video {
            asset {
              _rawAsset(resolveReferences: { maxDepth: 1 })
            }
          }
        }
      }
      canonical
      slug {
        current
      }
      pageTitle
      subject {
        ... on SanityCategory {
          _type
          name
        }
        ... on SanitySubcategory {
          _type
          name
          category {
            name
          }
        }
        ... on SanityTopic {
          _type
          name
          subcategory {
            name
            category {
              name
            }
          }
        }
      }
      metaDescription
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      nofollow
      noindex
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

function FlexListingPage({ data, location, pageContext }) {
  const {
    sgpsExcludesFeatured,
    sgpsForPagination,
    numPages,
    currentpage,
    slug,
    subjectListingPages,
  } = pageContext;

  return (
    <Layout location={location} type={type}>
      <main>
        <Container maxWidth="lg">
          <PageBreadcrumbs subject={data.page?.subject} subjectListingPages={subjectListingPages} />
        </Container>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'lrHero':
              return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            case 'stackFlex':
              return <StackFlex key={section._key} {...mapStackSectionToProps(section)} />;

            case 'stackHero':
              return <StackHero key={section._key} {...mapStackSectionToProps(section)} />;

            case 'videoHero':
              return <VideoHero key={section._key} {...mapVideoHeroToProps(section)} />;

            case 'featuredTilesSection':
              return currentpage === 1 ? (
                <FeaturedTilesSection
                  key={section._key}
                  subjectListingPages={subjectListingPages}
                />
              ) : null;

            case 'latestWithPaginationSection':
              return (
                <LatestWithPaginationSection
                  key={section._key}
                  {...mapLatestWithPaginationSectionToProps(section)}
                  spgTilesContent={sgpsForPagination}
                  numPages={numPages}
                  currentpage={currentpage}
                  slug={slug}
                />
              );

            case 'latestXSection':
              return currentpage === 1 ? (
                <LatestXSection
                  key={section._key}
                  {...mapLatestXSectionToProps(section)}
                  sgpsExcludesFeatured={sgpsExcludesFeatured}
                  subjectListingPages={subjectListingPages}
                />
              ) : null;

            case 'tagSetSection':
              return currentpage === 1 ? <TagSetSection key={section._key} /> : null;

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
}

export default FlexListingPage;

export function Head({ data, pageContext }) {
  return <Seo {...mapSeoToProps(data.page)} type={type} currentpage={pageContext.currentpage} />;
}
