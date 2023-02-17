import React from 'react';
import { graphql } from 'gatsby';
import { Container, Grid, Box, Hidden } from '@mui/material';
import Layout from '../containers/layout';
import GuideHero from '../components/sections/GuideHero';
import GuideBody from '../components/portableText/serializer/GuideSerializer';
import ToC from '../components/TableOfContent';
import Seo from '../components/Seo';
import { useUpdateUrl } from '../hooks/useUpdateUrl';
import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';

const type = 'guide';

export const query = graphql`
  query soloGuidePageTemplate($slug: String) {
    guide: sanitySoloGuidePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      includeDisclaimer
      displayDate
      pageTitle
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      noindex
      nofollow
      canonical
      id
      h1
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
      _rawGuideBody(resolveReferences: { maxDepth: 16 })
      toc {
        _key
        title
        hashID
      }
      metaDescription
      heroImage {
        alt
        _rawAsset(resolveReferences: { maxDepth: 1 })
        asset {
          url
        }
        maxHeight
        maxWidth
        _rawCaption(resolveReferences: { maxDepth: 4 })
      }
      _rawHeroSubtitle(resolveReferences: { maxDepth: 4 })
    }
  }
`;

function SoloGuidePage({ data, location }) {
  useUpdateUrl();

  return (
    <Layout location={location}>
      <main>
        <GuideHero {...mapGuideHeroToProps(data.guide)} />
        <Box my={3}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Hidden mdDown>
                {/* The usage of this style prop may be removeable with Grid V2 */}
                <Grid item md={3} style={{ order: 2 }}>
                  {data.guide.toc.length > 0 && (
                    <ToC toc={data.guide.toc} content={data.guide._rawGuideBody} />
                  )}
                </Grid>
              </Hidden>
              {/* The usage of this style prop may be removeable with Grid V2 */}
              <Grid item md={9} xs={12} component="article" style={{ order: 1 }}>
                <GuideBody blocks={data.guide._rawGuideBody} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </Layout>
  );
}

export default SoloGuidePage;

// export function Head({ data }) {
//   return (
//     <>
//       <html lang="en" />
//       <Seo {...mapSeoToProps(data.guide, type)} heroImage={data.guide.heroImage.asset.url} />
//     </>
//   );
// }
