import React from 'react';
import { IconButton } from 'gatsby-theme-material-ui';
import { Facebook, Twitter, Instagram, Pinterest, LinkedIn, YouTube } from '@mui/icons-material';
import { useSocialInfo } from '../hooks/useSocialInfo';

export default function SocialMedia() {
  const socials = useSocialInfo();

  return (
    <>
      {socials.map((social) => {
        const iconSelector = (key) => {
          switch (key) {
            case 'facebook':
              return <Facebook />;
            case 'twitter':
              return <Twitter />;
            case 'instagram':
              return <Instagram />;
            case 'pinterest':
              return <Pinterest />;
            case 'linkedin':
              return <LinkedIn />;
            case 'youtube':
              return <YouTube />;

            default:
              return <div>under construction</div>;
          }
        };
        return (
          <IconButton
            color="inherit"
            to={social.node.link}
            target="_blank"
            key={social.node.social}
            aria-label={`${social.node.social}`}
            size="large"
          >
            {iconSelector(social.node.social)}
          </IconButton>
        );
      })}
    </>
  );
}
