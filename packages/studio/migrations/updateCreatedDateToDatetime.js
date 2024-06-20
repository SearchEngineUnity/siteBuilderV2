import { defineMigration, patch, at, setIfMissing, set } from 'sanity/migrate';

// export default defineMigration({
//   title: 'Add sort ordered date with display date value',
//   documentTypes: ['soloGuidePage'], // only apply to certain document types
//   async *migrate(documents, context) {
//     for await (const document of documents()) {
//       console.log(document.displayDate)
//       yield patch(document._id, [at('sortOrderDate', setIfMissing(document.displayDate))]);
//     }
//   },
// });

export default defineMigration({
  title: 'Update Created date value to datetime ISO format',
  documentTypes: ['soloGuidePage'], // only apply to certain document types
  migrate: {
    document(doc, context) {
      console.log(doc.createdDate);
      return [at('createdDate', set(`${doc.createdDate.split('T')[0]}T05:00:00.000Z`))];
    },
  },
});
