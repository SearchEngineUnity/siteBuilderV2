/* eslint-disable no-plusplus */
import React from 'react';
import { graphql } from 'gatsby';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import FluidImgBlock from '../components/blocks/FluidImgBlock';
import Seo from '../components/Seo';
import Layout from '../containers/layout';
import BioContent from '../components/portableText/serializer/FullIndentSerializer';
import ContributorGuidesSection from '../components/sections/ContributorGuidesSection';
import youtube from '../components/navs/footerElements/assets/youtube.png';
import linkedin from '../components/navs/footerElements/assets/linkedin.png';
import x from '../components/navs/footerElements/assets/x.png';
import instagram from '../components/navs/footerElements/assets/instagram.png';
import facebook from '../components/navs/footerElements/assets/facebook.png';
import pinterest from '../components/navs/footerElements/assets/pinterest.png';

// Order: LinkedIn, X, IG, Pinterest, Tumblr, FB, YouTube

const imageSelector = {
  youtube,
  linkedin,
  x,
  instagram,
  facebook,
  pinterest,
};

const printAccounts = (accounts) => {
  const orderArr = ['linkedin', 'x', 'instagram', 'pinterest', 'facebook', 'youtube'];
  return orderArr.map((item) => {
    return (
      accounts[item] && (
        <Grid component="a" href={accounts[item]} target="_blank" rel="noreferrer">
          <img src={imageSelector[item]} alt={item} width={32} height={32} loading="eager" />
        </Grid>
      )
    );
  });
};

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
      socials {
        social
        link
      }
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
      socials,
    },
  } = data;

  const { slug, sgpsForPagination, numPages, currentpage } = pageContext;

  const accounts = {};

  for (let i = 0; i < socials.length; i++) {
    accounts[socials[i].social] = socials[i].link;
  }

  return (
    <Layout data={data.page}>
      <Container maxWidth="lg" component="main" sx={{ paddingBottom: { md: '80px', xs: '40px' } }}>
        {currentpage === 1 && (
          <Grid container spacing={2}>
            <Grid xs={12} md={4} lg={3}>
              <FluidImgBlock
                loading="eager"
                alt={name}
                image={gatsbyImageData}
                maxWidth={300}
                maxHeight={300}
              />
              <Grid container spacing={2} sx={{ margin: '4px auto 0px', maxWidth: '300px' }}>
                {printAccounts(accounts)}
              </Grid>
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
    <Seo
      type="page"
      pageTitle={name}
      currentpage={currentpage}
      slug={slug}
      heroImage={url}
      role={role}
    />
  );
}
