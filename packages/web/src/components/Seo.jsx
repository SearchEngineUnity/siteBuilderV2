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
  author,
  dateModified,
  datePublished,
  tileImageUrl,
  hasVideo,
  videoId,
}) {
  const defaults = useSeoDefaults();
  const { socialImage } = defaults;
  let jsonLD;
  let { metaUrl } = defaults;
  let ogType = '';
  const robots = `${nofollow ? 'nofollow' : ''} ${noindex ? 'noindex' : ''}`.trim();

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
      jsonLD = {
        '@context': 'https://schema.org',
        '@type': 'guide',
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${metaUrl}/${slug}`,
        },
        headline: title,
        description: metaDescription,
        datePublished,
        dateModified,
        author: [
          {
            '@type': 'Person',
            name: author.name,
            url: author.slug.current,
          },
        ],
        image: {
          '@type': 'ImageObject',
          url: tileImageUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Tech Life Unity',
          url: 'https://techlifeunity.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://cdn.sanity.io/images/ki8bqxrw/production/6ae56819897c5e4323a7185ee8fbb3dddeaf3bd5-177x33.svg',
          },
          brand: 'Tech Life Unity',
        },
      };
      break;
    default:
      break;
  }

  if (hasVideo) {
    jsonLD = {
      ...jsonLD,
      video: {
        '@type': 'VideoObject',
        contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
      },
    };
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
        strategy="off-main-thread"
      />
      {type === 'guide' && <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>}
    </>
  );
}
