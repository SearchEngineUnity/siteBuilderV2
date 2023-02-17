import React from 'react';
import HighlightProTip from './HighlightProTip';
import HighlightImportant from './HighlightImportant';
import HighlightWarning from './HighlightWarning';
import HighlightDidYouKnow from './HighlightDidYouKnow';
import HighlightDefinition from './HighlightDefinition';

function HighlightBox({ box }) {
  switch (box.type) {
    case 'Pro Tip':
      return <HighlightProTip blockContent={box.text} id={box._key} />;

    case 'Important':
      return <HighlightImportant blockContent={box.text} id={box._key} />;

    case 'Warning':
      return <HighlightWarning blockContent={box.text} id={box._key} />;

    case 'Did You Know':
      return <HighlightDidYouKnow blockContent={box.text} id={box._key} />;

    case 'Definition':
      return <HighlightDefinition blockContent={box.text} id={box._key} />;

    default:
      return <h3>Undefined Highlight Box</h3>;
  }
}

export default HighlightBox;
