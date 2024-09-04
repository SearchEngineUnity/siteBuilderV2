/* eslint-disable no-plusplus */
// import React, { useState, useEffect, useRef } from 'react';
import loadable from '@loadable/component';
import React from 'react';
import { graphql } from 'gatsby';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Seo from '../components/Seo';
import Layout from '../containers/layout';
// import ProgressBar from '../components/ScrollProgressBar';
import GuideBody from '../components/portableText/serializer/GuideSerializer';
// import { useUpdateUrl } from '../hooks/useUpdateUrl';
import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';
import RelatedGuidesSection from '../components/sections/RelatedGuidesSection';
import BottomBannerAds from '../components/adUnits/BottomBannerAds';

// hero options
const LrGuideHero = loadable(() => import('../components/sections/LrGuideHero'));
const StackGuideHero = loadable(() => import('../components/sections/StackGuideHero'));
const MainColumnGuideHero = loadable(() => import('../components/sections/MainColumnGuideHero'));

// other optional components
const MainColumnFeature = loadable(() => import('../components/sections/MainColumnFeature'));
const ToC = loadable(() => import('../components/TableOfContent'));
const MobileToC = loadable(() => import('../components/TableOfContentMobile'));
const MoreInSection = loadable(() => import('../components/sections/MoreInSection'));
const TocAlternativeAds = loadable(() => import('../components/adUnits/TocAlternativeAds'));

const type = 'guide';

export const query = graphql`
  query soloGuidePageTemplate($slug: String) {
    guide: sanitySoloGuidePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      relatedContentSection {
        heading
        relatedItems {
          _id
          slug {
            current
          }
          tileImage {
            alt
            asset {
              gatsbyImageData(fit: CROP, placeholder: NONE)
            }
          }
          tileText
          tileTitle
          primarySubcategory {
            name
          }
        }
      }
      includeDisclaimer
      displayDate
      createdDate
      author {
        name
        role
        photo {
          asset {
            url
          }
        }
        slug {
          current
        }
        socials {
          link
        }
        shortBio
      }
      editor {
        name
        role
        photo {
          asset {
            url
          }
        }
        socials {
          link
        }
        slug {
          current
        }
        shortBio
      }
      primarySubcategory {
        _type
        name
        category {
          name
        }
      }
      secondarySubcategory {
        _id
        name
      }
      topicTags {
        _id
        name
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
      _rawGuideBody(resolveReferences: { maxDepth: 11 })
      toc {
        _key
        title
        hashID
      }
      metaDescription
      tileImage {
        asset {
          url
        }
      }
      hero {
        h1
        feature
        layout
        image {
          idTag
          alt
          _rawAsset(resolveReferences: { maxDepth: 1 })
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: NONE)
            url
          }
          maxHeight
          maxWidth
          _rawCaption(resolveReferences: { maxDepth: 1 })
        }
        _rawSubtitle(resolveReferences: { maxDepth: 1 })
        video {
          idTag
          videoId
        }
        productGrid {
          design
          pageJumpText
          idTag
          tiles {
            _key
            btnText
            content: _rawContent(resolveReferences: { maxDepth: 3 })
            specialTagText
            tileImage {
              alt
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: NONE)
              }
            }
            jumpLink {
              _key
              hashId
            }
            btnLink {
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
                href
                newTab
              }
              ... on SanityJumpLink {
                _key
                _type
                hashId
              }
            }
            name
          }
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

function SoloGuidePage({ data, pageContext }) {
  // const heroRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // const setProgressBarVisibility = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(!entry.isIntersecting);
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(setProgressBarVisibility);
  //   observer.observe(heroRef.current);
  //   return () => observer.disconnect();
  // }, []);

  // useUpdateUrl();

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
        noH2: true,
      });
    }
    if (block.style === 'h2') {
      sectionStarts.push({
        position: index,
        id,
        noH2: false,
      });
    }
  }

  const sections = [];

  for (let index = 0; index < sectionStarts.length; index++) {
    const { position: startPosition, id } = sectionStarts[index];
    const endPosition = sectionStarts[index + 1]?.position || guideBody.length;
    const section = guideBody.slice(startPosition, endPosition);
    sections.push({ section, id, noH2: sectionStarts[index].noH2 });
  }

  return (
    <>
      <Layout data={data.guide} type={type}>
        {data?.guide?.toc?.length > 0 && (
          <Box sx={{ display: { xs: 'block', md: 'none' }, paddingTop: '33px' }}>
            <MobileToC toc={data?.guide?.toc} />
          </Box>
        )}
        <Box component="main">
          <Hero
            {...mapGuideHeroToProps(data.guide)}
            // ref={heroRef}
            subjectListingPages={pageContext.subjectListingPages}
          />
          {/* {isVisible && <ProgressBar />} */}
          <Box sx={{ mb: { lg: '104px', md: '80px', xs: '40px' } }}>
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 2, sm: 3 }}>
                <Grid md={3} sx={{ display: { xs: 'none', md: 'block' }, order: 2 }}>
                  {data?.guide?.toc?.length > 0 ? (
                    <ToC toc={data.guide.toc} />
                  ) : (
                    <TocAlternativeAds />
                  )}
                </Grid>
                <Grid md={9} xs={12} sx={{ order: 1 }}>
                  {heroLayout === 'mainColumnHero' && (
                    <MainColumnFeature {...mapGuideHeroToProps(data.guide)} />
                  )}
                  {sections.map((section, index) => {
                    const { noH2 } = section;
                    return (
                      <Box
                        component={noH2 ? 'div' : 'section'}
                        // eslint-disable-next-line react/no-array-index-key
                        key={`section-${index}-${section.id}`}
                        id={section.id && `section-${section.id}`}
                      >
                        <GuideBody blocks={section.section} />
                      </Box>
                    );
                  })}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        {data.guide?.relatedContentSection?.relatedItems?.length > 0 && (
          <RelatedGuidesSection {...data.guide?.relatedContentSection} />
        )}
        {data.guide?.primarySubcategory?.name && (
          <MoreInSection
            subjectListingPages={pageContext.subjectListingPages}
            subjectName={data.guide.primarySubcategory.name}
            spgTilesContent={pageContext.moreInPrimarySubSgps}
            relatedItems={data.guide?.relatedContentSection?.relatedItems}
          />
        )}
      </Layout>
      <Box
        sx={{
          position: 'sticky',
          bgcolor: 'background.default',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          // borderTop: '1px solid #ABB8C3',
          boxShadow: '0px -2px 4px -2px rgba(0, 0, 0, 0.25)',
        }}
      >
        <BottomBannerAds />
      </Box>
    </>
  );
}

export default SoloGuidePage;

export function Head({ data, pageContext }) {
  return (
    <>
      <Seo
        {...mapSeoToProps(data.guide)}
        type={type}
        heroImage={data?.guide?.hero?.image?.asset?.url}
        datePublished={data.guide.createdDate}
        dateModified={data.guide.displayDate}
        author={data.guide.author}
        editor={data.guide.editor}
        h1={data.guide.hero.h1}
        tileImageUrl={data.guide.tileImage.asset.url}
        hasVideo={data?.guide?.hero?.video?.videoId && data?.guide?.hero?.feature === 'video'}
        videoId={data?.guide?.hero?.video?.videoId}
        hasHeroImage={
          data?.guide?.hero?.image?.asset?.url && data?.guide?.hero?.feature === 'image'
        }
        topics={data.guide?.topicTags}
        primarySubcategory={data.guide?.primarySubcategory}
        subjectListingPages={pageContext.subjectListingPages}
      />
      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6122705063625930"
        data-overlays="bottom"
        crossOrigin="anonymous"
      /> */}
    </>
  );
}
