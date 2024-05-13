import { defineMigration, patch, at, setIfMissing } from 'sanity/migrate';

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
  title: 'Add sort ordered date with display date value',
  documentTypes: ['soloGuidePage'], // only apply to certain document types
  migrate: {
    document(doc, context) {
      return [at('sortOrderDate', setIfMissing(doc.displayDate))];
    },
  },
});
