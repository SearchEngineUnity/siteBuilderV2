import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomSearchBox from '../components/search/customSearchBox';
import HitsSwitcher from '../components/search/hitsSwitcher';
import QueryDisplay from '../components/search/queryDisplay';
import MyLayout from '../containers/layout';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

function Search() {
  return (
    <MyLayout>
      <Box
        component="main"
        sx={{
          padding: '0 16px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@media (min-width: 600px)': {
            padding: '0 24px',
          },
          '@media (min-width: 782px)': {
            maxWidth: '782px',
          },
          minHeight: 'calc(100vh - 316px)',
        }}
      >
        <Typography variant="h1" textAlign="center" sx={{ paddingBottom: '1em' }}>
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
      </Box>
    </MyLayout>
  );
}

export default Search;
