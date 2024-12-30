import {fetchWrap} from '@/app/services/common';
import {YOUTUBE_API_URL} from '@/app/services/constants';
import {URLS} from '@/app/services/types';

export const defaultUrls = {
    [URLS.videos]:
        `${YOUTUBE_API_URL}/${URLS.videos}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}` +
        `&part=snippet,contentDetails,statistics`,
    [URLS.search]: `${YOUTUBE_API_URL}/${URLS.search}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&part=snippet`,
    [URLS.channels]:
        `${YOUTUBE_API_URL}/${URLS.channels}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}` +
        `&part=snippet,contentDetails,statistics`,
};

export const loadInfo = async (id: string, kind: Exclude<URLS, URLS.search>) => {
    const videoInfo = await fetchWrap({
        request: {
            url: `${defaultUrls[kind]}&id=${id}`,
        },
    });

    return videoInfo;
};
