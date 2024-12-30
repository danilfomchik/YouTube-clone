import {IChannel, IVideo, Responses} from '@/app/(home)/components/VideosList/VideoItem/types';

export interface ICommonState {
    videos: IVideo[];
    loadingVideos: string[];
    nextPageToken: string;
}

export enum IThunkNames {
    onLoadVideosList = 'loadVideosList',
    onLoadVideoData = 'loadVideoData',
    onLoadChannelData = 'onLoadChannelData',
}

export interface ILoadVideosListThunkProps {
    nextPageToken?: string;
    searchValue: string;
    currentCategory?: string;
    regionCode?: string;
}

export interface ILoadVideoInfoThunkProps {
    videoId: string;
    channelId: string;
    kind: Responses;
}

export interface ILoadVideoInfoThunkResponse {
    videoInfo?: {
        items: IVideo[];
    };
    channelInfo: {
        items: IChannel[];
    };
}
