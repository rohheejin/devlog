import metadata from '@/data/metadata';

const SEO = {
  titleTemplate: '%s | heejin.dev',
  defaultTitle: metadata.meta.title,
  description: metadata.meta.description,
  canonical: metadata.meta.url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: metadata.meta.url,
    site_name: metadata.meta.title,
    images: [
      {
        url: `${metadata.meta.url}/about/profile.jpeg`,
        width: 850,
        height: 650,
        alt: `heejin.dev`,
      },
    ],
  },
};

export default SEO;
