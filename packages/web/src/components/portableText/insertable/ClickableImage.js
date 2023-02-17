import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Card } from '@mui/material';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../lib/sanityConfig';
import ConditionalCardActionArea from '../../cardActionArea/ConditionalCardActionArea';

const useStyles = makeStyles()((theme, { borderRadius, height, width }) => ({
  card: {
    borderRadius,
    maxHeight: `${height}px`,
    maxWidth: `${width}px`,
  },
}));

function ClickableImage({ image, alignment, link, borderRadius }) {
  const imageFluid = image?.asset;
  const imageData = getGatsbyImageData(imageFluid, { layout: 'constrained' }, sanityConfig);
  const height = image?.asset?.height;
  const width = image?.asset?.width;

  const { classes } = useStyles({ borderRadius, height, width });
  const linkType = link[0]?._type;

  return (
    <Box display="flex" justifyContent={alignment}>
      <Card className={classes.card} elevation={2}>
        <ConditionalCardActionArea condition={linkType} link={link[0]}>
          <GatsbyImage image={imageData} alt={image.alt || ''} />
        </ConditionalCardActionArea>
      </Card>
    </Box>
  );
}

export default ClickableImage;
