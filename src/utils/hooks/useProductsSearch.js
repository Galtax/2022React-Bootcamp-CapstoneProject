/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useLatestAPI } from './useLatestAPI';

export function useProductsSearch({ tags, lang = 'en-us', pageSize = 16 }) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductsFilter() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });

        const response = await fetch(
          `https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=[[at(document.type,"product")]]&q=[[at(document.tags,[${[...tags]}])]]&lang=${lang}&pageSize=${pageSize}`,
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();
        console.log('data hook', data);

        setFeaturedBanners({ data: data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductsFilter();

    return () => {
      controller.abort();
    };

  }, [apiRef, isApiMetadataLoading, lang, pageSize, tags]);

  return featuredBanners;
}
