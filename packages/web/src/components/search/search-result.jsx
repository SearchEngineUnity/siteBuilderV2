// import React from 'react';
// import { Link } from 'gatsby';
// import {
//   Highlight,
//   Hits,
//   Index,
//   Snippet,
//   PoweredBy,
//   useStats,
// } from 'react-instantsearch-hooks-web';

// function HitCount() {
//   const { nbHits } = useStats();

//   return nbHits > 0 ? (
//     <div className="HitCount">
//       {nbHits} result{nbHits !== 1 ? 's' : ''}
//     </div>
//   ) : null;
// }

// function PageHit({ hit }) {
//   return (
//     <div>
//       <Link to={`/${hit.slug}`}>
//         <h4>
//           <Highlight attribute="title" hit={hit} />
//         </h4>
//       </Link>
//       <Snippet attribute="excerpt" hit={hit} />
//     </div>
//   );
// }

// function HitsInIndex({ index }) {
//   return (
//     <Index indexName={index.name}>
//       <HitCount />
//       <Hits className="Hits" hitComponent={PageHit} />
//     </Index>
//   );
// }

// function SearchResult({ indices, className }) {
//   return (
//     <div className={className}>
//       {indices.map((index) => (
//         <HitsInIndex index={index} key={index.name} />
//       ))}
//       <PoweredBy />
//     </div>
//   );
// }

// export default SearchResult;
