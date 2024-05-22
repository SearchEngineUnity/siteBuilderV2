/* eslint-disable no-plusplus */
import React from 'react';
import { graphql } from 'gatsby';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AToZNav from '../components/navs/aToZNavElements/AToZNav';
import AToZSection from '../components/sections/AToZSection';
import Seo from '../components/Seo';
import Layout from '../containers/layout';
import { mapSeoToProps } from '../lib/mapToProps';

const type = 'page';

export const query = graphql`
  query aToZPageTemplate($slug: String) {
    page: sanityAToZPage(slug: { current: { eq: $slug } }) {
      slug {
        current
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
      metaDescription
      h1
      subtitle
      instruction
      itemList {
        _key
        link
        title
      }
    }
  }
`;

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

function AToZPage({ data }) {
  const {
    page: { h1, subtitle, instruction, itemList },
  } = data;

  const firstLetterArrayFromList = [
    ...new Set(itemList.map((x) => x.title.charAt(0).toUpperCase())),
  ];

  const sortedItemList = itemList.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  );

  return (
    <Layout data={data.page} type={type}>
      <Container maxWidth="lg" component="main" sx={{ marginBottom: '80px' }}>
        <Typography variant="h1" textAlign="center" gutterBottom>
          {h1}
        </Typography>
        {subtitle && (
          <Typography
            variant="h4"
            component="p"
            textAlign="center"
            gutterBottom
            sx={{ maxWidth: '917px', mx: 'auto', fontWeight: 'fontWeightRegular' }}
          >
            {subtitle}
          </Typography>
        )}
        <AToZNav
          list={itemList}
          instruction={instruction}
          alphabet={alphabet}
          firstLetterArrayFromList={firstLetterArrayFromList}
        />
        {firstLetterArrayFromList.map((letter) => (
          <AToZSection key={`a-to-z-section-${letter}`} list={sortedItemList} letter={letter} />
        ))}
      </Container>
    </Layout>
  );
}

export default AToZPage;

export function Head({ data }) {
  return <Seo {...mapSeoToProps(data.page)} type={type} />;
}
