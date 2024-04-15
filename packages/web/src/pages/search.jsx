import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

function Hit({ hit }) {
  console.log(hit);
  return (
    <Card>
      <CardContent>
        <div>This is the H1: {hit.h1}</div>
        <div>This is the slug: {hit.slug}</div>
      </CardContent>
    </Card>
  );
}

function Search() {
  return (
    <Container maxWidth="lg">
      <InstantSearch searchClient={searchClient} indexName="pro_SGP">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Container>
  );
}

export default Search;
