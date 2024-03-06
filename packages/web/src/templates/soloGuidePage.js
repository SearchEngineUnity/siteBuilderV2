/* eslint-disable no-plusplus */
import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Layout from '../containers/layout';
import LrGuideHero from '../components/sections/LrGuideHero';
import StackGuideHero from '../components/sections/StackGuideHero';
import MainColumnGuideHero from '../components/sections/MainColumnGuideHero';
import ProgressBar from '../components/ScrollProgressBar';
import MainColumnFeature from '../components/sections/MainColumnFeature';
import GuideBody from '../components/portableText/serializer/GuideSerializer';
import ToC from '../components/TableOfContent';
import { useUpdateUrl } from '../hooks/useUpdateUrl';
import { mapGuideHeroToProps } from '../lib/mapToProps';

const type = 'guide';

export const query = graphql`
  query soloGuidePageTemplate($slug: String) {
    guide: sanitySoloGuidePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      includeDisclaimer
      displayDate
      author {
        name
      }
      primarySubcategory {
        name
        listingPage {
          slug {
            current
          }
        }
        category {
          name
          listingPage {
            slug {
              current
            }
          }
        }
      }
      secondarySubcategory {
        _key
        name
        listingPage {
          slug {
            current
          }
        }
      }
      topicTags {
        _key
        name
        listingPage {
          slug {
            current
          }
        }
      }
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
      hero {
        h1
        feature
        layout
        image {
          idTag
          alt
          _rawAsset(resolveReferences: { maxDepth: 1 })
          asset {
            url
          }
          maxHeight
          maxWidth
          _rawCaption(resolveReferences: { maxDepth: 1 })
        }
        _rawSubtitle(resolveReferences: { maxDepth: 1 })
        video {
          idTag
          url
        }
        productGrid {
          design
          pageJumpText
          idTag
          _rawTiles(resolveReferences: { maxDepth: 5 })
        }
      }
    }
  }
`;

const heroComponentMapping = {
  lrHero: LrGuideHero,
  stackHero: StackGuideHero,
  mainColumnHero: MainColumnGuideHero,
};

function SoloGuidePage({ data, location }) {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setProgressBarVisibility = (entries) => {
    const [entry] = entries;
    setIsVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setProgressBarVisibility);
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useUpdateUrl();

  const heroLayout = data?.guide?.hero?.layout;
  const Hero = heroComponentMapping[heroLayout];

  const guideBody = data.guide._rawGuideBody;

  const sectionStarts = [];

  for (let index = 0; index < guideBody.length; index++) {
    const block = guideBody[index];
    const id = block?.markDefs?.filter((x) => x._type === 'hashId')[0]?.idTag;
    if (index === 0 && block.style !== 'h2') {
      sectionStarts.push({
        position: index,
      });
    }
    if (block.style === 'h2') {
      sectionStarts.push({
        position: index,
        id,
      });
    }
  }

  const sections = [];

  for (let index = 0; index < sectionStarts.length; index++) {
    const { position: startPosition, id } = sectionStarts[index];
    const endPosition = sectionStarts[index + 1]?.position || guideBody.length;
    const section = guideBody.slice(startPosition, endPosition);
    sections.push({ section, id });
  }

  return (
    <Layout
      location={location}
      data={data.guide}
      type={type}
      heroImage={data?.guide?.hero?.image?.asset?.url}
    >
      <main>
        <Hero {...mapGuideHeroToProps(data.guide)} ref={heroRef} />
        {isVisible && <ProgressBar />}
        <Box sx={{ my: 3 }}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid md={3} sx={{ display: { xs: 'none', md: 'block' }, order: 2 }}>
                {data?.guide?.toc?.length > 0 && (
                  <ToC toc={data.guide.toc} content={data.guide._rawGuideBody} />
                )}
              </Grid>
              <Grid md={9} xs={12} component="article" sx={{ order: 1 }}>
                {heroLayout === 'mainColumnHero' && (
                  <MainColumnFeature {...mapGuideHeroToProps(data.guide)} />
                )}
                {sections.map((section, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <section key={`section-${index}-${section.id}`} id={section.id}>
                    <GuideBody blocks={section.section} />
                  </section>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </Layout>
  );
}

export default SoloGuidePage;
