/* eslint-disable import/prefer-default-export */
import { RiGatsbyLine } from 'react-icons/ri';

const contentSyncUrl = process.env.SANITY_STUDIO_CONTENT_SYNC_URL;

export function GatsbyPreviewAction({ published, draft }) {
  const doc = draft || published;

  if (!doc) return null;

  let id;
  if (published) {
    id = published._id;
  } else if (draft) {
    // eslint-disable-next-line prefer-destructuring
    id = draft._id.split('drafts.')[1];
  }
  const updatedAt = `${doc._updatedAt.split('.')[0].split('Z')[0]}.000Z`;

  return {
    disabled: !id,
    icon: RiGatsbyLine,
    label: 'Open Preview',
    onHandle: () => {
      window.open(
        `${contentSyncUrl}/gatsby-source-sanity/${id}-${updatedAt}`,
        `gatsby-source-sanity-${id}`,
      );
    },
  };
}
