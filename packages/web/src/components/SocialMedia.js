import React from 'react';
import { IconButton } from 'gatsby-theme-material-ui';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Pinterest from '@mui/icons-material/Pinterest';
import Twitter from '@mui/icons-material/Twitter';
import YouTube from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import { useSocialInfo } from '../hooks/useSocialInfo';

const socialNetworks = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  pinterest: Pinterest,
  linkedin: LinkedIn,
  youtube: YouTube,
  homestars: HomeIcon,
};

export default function SocialMedia() {
  const socials = useSocialInfo();

  return (
    <>
      {socials.map((social) => {
        const SocialSelected = socialNetworks[social.node.social];
        if (SocialSelected) {
          return (
            <IconButton
              color="inherit"
              to={social.node.link}
              target="_blank"
              key={social.node.social}
              aria-label={`${social.node.social}`}
              size="large"
            >
              <SocialSelected />
            </IconButton>
          );
        }
        return <div key={social.node.social}>Social Media Error</div>;
      })}
    </>
  );
}
