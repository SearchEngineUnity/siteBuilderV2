import React from 'react';
import { Script } from 'gatsby';
import moment from 'moment-timezone';
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
  h1,
  role,
  author,
  editor,
  dateModified,
  datePublished,
  tileImageUrl,
  hasVideo,
  videoId,
  hasHeroImage,
  topics,
  primarySubcategory,
  subjectListingPages,
}) {
  const defaults = useSeoDefaults();
  const { socialImage } = defaults;
  let articleJSON;
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
      articleJSON = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        inLanguage: 'en-US',
        headline: title,
        description: metaDescription,
        about: topics.map((x) => x.name),
        articleSection: primarySubcategory.name,
        image: {
          '@type': 'ImageObject',
          url: tileImageUrl,
        },
        author: {
          '@type': 'Person',
          name: author.name,
          // description, // need more work
          image: author.photo.asset.url,
          jobTitle: author.role,
          url: `https://techlifeunity.com/${author.slug.current}`,
          sameAs: author.socials.map((x) => x.links),
          description: author.shortBio,
        },
        editor: {
          '@type': 'Person',
          name: editor.name,
          // description, // need more work
          image: editor.photo.asset.url,
          jobTitle: editor.role,
          url: `https://techlifeunity.com/${editor.slug.current}`,
          sameAs: editor.socials.map((x) => x.links),
          description: editor.shortBio,
        },

        publisher: {
          '@id': 'https://techlifeunity.com/#organization',
        },
        dateModified: moment(dateModified).tz('America/New_York').format(),
        datePublished: moment(datePublished).tz('America/New_York').format(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                // category
                '@type': 'ListItem',
                position: 1,
                name: primarySubcategory.category.name,
                item: `https://techlifeunity.com/${
                  subjectListingPages.filter(
                    (x) => x?.node?.subject?.name === primarySubcategory?.category?.name,
                  )[0]?.node?.slug?.current
                }`,
              },
              {
                // primary subcategory
                '@type': 'ListItem',
                position: 2,
                name: primarySubcategory.name,
                item: `https://techlifeunity.com/${
                  subjectListingPages.filter(
                    (x) => x?.node?.subject?.name === primarySubcategory?.name,
                  )[0]?.node?.slug?.current
                }`,
              },
              {
                // page
                '@type': 'ListItem',
                position: 3,
                name: h1,
              },
            ],
          },
          reviewedBy: {
            '@type': 'Person',
            name: editor.name,
            // description, // need more work
            image: editor.photo.asset.url,
            jobTitle: editor.role,
            url: `https://techlifeunity.com/${editor.slug.current}`,
            sameAs: editor.socials.map((x) => x.links),
            description: editor.shortBio,
          },
          lastReviewed: moment(dateModified).tz('America/New_York').format(),
        },
      };
      break;
    default:
      break;
  }

  // if (hasVideo) {
  //   articleJSON.video = {
  //     '@type': 'VideoObject',
  //     contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
  //     // uploadDate,
  //     // name,
  //     // thumbnailUrl,
  //     // description,
  //   };
  // }

  if (hasHeroImage) {
    articleJSON.mainEntityOfPage.primaryImageOfPage = heroImage;
  }

  const ogTitle = fbShareMetaPack?.fbShareTitle || title;
  const ogDescription = fbShareMetaPack?.fbShareDescription || metaDescription;
  const ogImage = fbShareMetaPack?.fbShareImage?.asset.url || heroImage || socialImage;

  const twitterTitle = twitterShareMetaPack?.twitterShareTitle || ogTitle || title;
  const twitterImage =
    twitterShareMetaPack?.twitterShareImage?.asset?.url || heroImage || socialImage;
  const twitterDescription =
    twitterShareMetaPack?.twitterShareDescription || ogDescription || metaDescription;

  const organizationJSON = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://techlifeunity.com/#organization',
    name: 'Tech Life Unity',
    alternateName: ['TLU', 'Techboomers', 'Techlifeunity'],
    legalName: 'Techboomers Media Inc.',
    url: 'https://techlifeunity.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cdn.sanity.io/images/ki8bqxrw/production/6ae56819897c5e4323a7185ee8fbb3dddeaf3bd5-177x33.svg',
    },
    sameAs: [
      'https://youtube.com/@techlifeunity',
      'https://x.com/techlifeunity',
      'https://www.facebook.com/Techboomers',
      'https://www.linkedin.com/company/tech-life-unity/',
      'https://www.linkedin.com/company/techboomers-com/',
      'https://en.wikipedia.org/wiki/Techboomers',
    ],
  };

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
      <script type="application/ld+json">{JSON.stringify(organizationJSON)}</script>
      {type === 'guide' && (
        <script type="application/ld+json">{JSON.stringify(articleJSON)}</script>
      )}
    </>
  );
}
