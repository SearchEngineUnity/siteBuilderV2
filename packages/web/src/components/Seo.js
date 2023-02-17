import React from 'react';
import { useSeoDefaults } from '../hooks/useSeoDefaults';

export default function Seo({
  type,
  pageTitle,
  metaDescription,
  fbShareMetaPack,
  twitterShareMetaPack,
  slug,
  noindex,
  nofollow,
  canonical,
  heroImage,
  children,
}) {
  const defaults = useSeoDefaults();
  const { socialImage } = defaults;
  let { metaUrl } = defaults;
  let ogType = '';
  const robots = `${nofollow ? 'nofollow' : ''} ${noindex ? 'noindex' : ''}`;

  switch (type) {
    case 'page':
      metaUrl = slug === '/' ? metaUrl : `${metaUrl}/${slug}`;
      ogType = 'website';
      break;
    case 'guide':
      metaUrl = `${metaUrl}/${slug}`;
      ogType = 'article';
      break;
    default:
      break;
  }

  const ogTitle = fbShareMetaPack?.fbShareTitle || pageTitle;
  const ogDescription = fbShareMetaPack?.fbShareDescription || metaDescription;
  const ogImage = fbShareMetaPack?.fbShareImage?.asset.url || heroImage || socialImage;

  const twitterTitle = twitterShareMetaPack?.twitterShareTitle || ogTitle || pageTitle;
  const twitterImage =
    twitterShareMetaPack?.twitterShareImage?.asset?.url || heroImage || socialImage;
  const twitterDescription =
    twitterShareMetaPack?.twitterShareDescription || ogDescription || metaDescription;

  return (
    <>
      <title>{pageTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={ogTitle} />
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {(noindex || nofollow) && <meta name="robots" content={robots} />}
      {canonical ? (
        <link rel="canonical" href={canonical} />
      ) : (
        <link rel="canonical" href={metaUrl} />
      )}
      {children}
    </>
  );
}
