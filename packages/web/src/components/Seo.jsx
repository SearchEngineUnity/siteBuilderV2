import React from 'react';
import { Script } from 'gatsby';
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
  currentpage,
  role,
}) {
  const defaults = useSeoDefaults();
  const { socialImage } = defaults;
  let { metaUrl } = defaults;
  let ogType = '';
  const robots = `${nofollow ? 'nofollow' : ''} ${noindex ? 'noindex' : ''}`.trim();

  switch (type) {
    case 'page':
      metaUrl =
        slug === '/'
          ? `${metaUrl}/`
          : `${metaUrl}/${slug}${currentpage > 1 ? `/${currentpage}` : ''}`;
      ogType = 'website';
      break;
    case 'guide':
      metaUrl = `${metaUrl}/${slug}`;
      ogType = 'article';
      break;
    default:
      break;
  }

  let title = pageTitle;
  if (role) {
    title = `${pageTitle} - ${role}`;
  }

  if (currentpage > 1) {
    title = `${pageTitle} - Page ${currentpage}`;
  }

  if (role && currentpage > 1) {
    title = `${pageTitle} - ${role} (Page ${currentpage})`;
  }
  const ogTitle = fbShareMetaPack?.fbShareTitle || title;
  const ogDescription = fbShareMetaPack?.fbShareDescription || metaDescription;
  const ogImage = fbShareMetaPack?.fbShareImage?.asset.url || heroImage || socialImage;

  const twitterTitle = twitterShareMetaPack?.twitterShareTitle || ogTitle || title;
  const twitterImage =
    twitterShareMetaPack?.twitterShareImage?.asset?.url || heroImage || socialImage;
  const twitterDescription =
    twitterShareMetaPack?.twitterShareDescription || ogDescription || metaDescription;

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta property="og:locale" content="en_US" />
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
      <Script
        type="text/javascript"
        src="https://s.skimresources.com/js/89665X1543008.skimlinks.js"
        strategy="post-hydrate"
      />
    </>
  );
}
