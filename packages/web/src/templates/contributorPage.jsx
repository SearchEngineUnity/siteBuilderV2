/* eslint-disable no-plusplus */
import React from 'react';
import { graphql } from 'gatsby';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import FluidImgBlock from '../components/blocks/FluidImgBlock';
import Seo from '../components/Seo';
import Layout from '../containers/layout';
import BioContent from '../components/portableText/serializer/FullIndentSerializer';
import ContributorGuidesSection from '../components/sections/ContributorGuidesSection';
import ThirdPartyScripts from '../components/ThirdPartyScripts';

export const query = graphql`
  query contributorPageTemplate($slug: String) {
    page: sanityContributor(slug: { current: { eq: $slug } }, photo: {}) {
      name
      photo {
        asset {
          gatsbyImageData(fit: CROP, placeholder: NONE)
          url
        }
      }
      role
      _rawBio
      linkedIn
    }
  }
`;

function ContributorPage({ data, pageContext }) {
  const {
    page: {
      name,
      photo: {
        asset: { gatsbyImageData },
      },
      role,
      _rawBio,
      linkedIn,
    },
  } = data;

  const { slug, sgpsForPagination, numPages, currentpage } = pageContext;

  return (
    <Layout data={data.page}>
      <Container maxWidth="lg" component="main" sx={{ paddingBottom: { md: '80px', xs: '40px' } }}>
        {currentpage === 1 && (
          <Grid container spacing={2}>
            <Grid xs={12} md={4} lg={3}>
              <FluidImgBlock loading="eager" alt={name} image={gatsbyImageData} maxHeight={300} />
              {linkedIn && (
                <Link href={linkedIn} underline="always" target="_blank">
                  <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
                    Find {name} on LinkedIn
                  </Typography>
                </Link>
              )}
            </Grid>
            <Grid xs={12} md={8} lg={9}>
              <Typography variant="h1">{name}</Typography>
              <Typography
                component="p"
                variant="subtitle1"
                sx={{ paddingBottom: '1.5em', color: 'text.secondary', fontStyle: 'italic' }}
              >
                {role}
              </Typography>
              {_rawBio && <BioContent blocks={_rawBio} />}
            </Grid>
          </Grid>
        )}
        {sgpsForPagination.length > 0 && (
          <ContributorGuidesSection
            name={name}
            spgTilesContent={sgpsForPagination}
            slug={slug}
            numPages={numPages}
            currentpage={currentpage}
          />
        )}
      </Container>
    </Layout>
  );
}

export default ContributorPage;

export function Head({ data, pageContext }) {
  const {
    page: {
      name,
      photo: {
        asset: { url },
      },
      role,
    },
  } = data;

  const { currentpage, slug } = pageContext;

  return (
    <>
      <Seo
        type="page"
        pageTitle={name}
        currentpage={currentpage}
        slug={slug}
        heroImage={url}
        role={role}
      />
      <ThirdPartyScripts />
    </>
  );
}
