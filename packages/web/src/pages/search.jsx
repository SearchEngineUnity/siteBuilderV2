import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CustomSearchBox from '../components/search/customSearchBox';
import HitsSwitcher from '../components/search/hitsSwitcher';
import QueryDisplay from '../components/search/queryDisplay';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

function Search() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" textAlign="center" sx={{ padding: '1em 0' }}>
        Search
      </Typography>
      <InstantSearch searchClient={searchClient} indexName="pro_SGP">
        <CustomSearchBox />
        <QueryDisplay />
        <Index indexName="pro_Listing">
          <HitsSwitcher />
        </Index>
        <Index indexName="pro_SGP">
          <HitsSwitcher />
        </Index>
      </InstantSearch>
    </Container>
  );
}

export default Search;
