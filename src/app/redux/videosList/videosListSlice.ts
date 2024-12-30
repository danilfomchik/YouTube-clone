import {IVideo} from '@/app/(home)/components/VideosList/VideoItem/types';
import createGenericSlice from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {onLoadVideoInfo, onLoadVideosList} from './thunks';
import {ICommonState} from './types';

const reducers = {};

const initialData = {
    videos: [],
    loadingVideos: [],
    nextPageToken: '',
};

export const videosData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.videosData,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: builder => {
        builder
            .addCase(onLoadVideosList.fulfilled, (state, {payload}) => {
                const {items: newVideos, nextPageToken = ''} = payload;
                const prevVideos = state.data.videos;

                state.data.videos = [...prevVideos, ...newVideos];
                state.data.nextPageToken = nextPageToken;
            })
            .addCase(onLoadVideoInfo.pending, (state, {meta}) => {
                const loadingVideos = state.data.loadingVideos;
                const loadingVideoId = meta.arg.videoId;

                state.data.loadingVideos = [...loadingVideos, loadingVideoId];
            })
            .addCase(onLoadVideoInfo.fulfilled, (state, {payload, meta}) => {
                const {videoInfo, channelInfo} = payload;
                const loadedVideoId = meta.arg.videoId;
                const loadingVideos = state.data.loadingVideos;
                const prevVideos = state.data.videos;

                const updatedVideos = prevVideos.map(video => {
                    const _videoId = typeof video.id === 'string' ? video.id : video.id?.videoId;

                    if (_videoId === loadedVideoId) {
                        const updatedVideoInfo = {
                            ...video,
                            channelInfo: channelInfo.items[0],
                        };

                        if (videoInfo?.items[0]) {
                            const {snippet, contentDetails, statistics} = videoInfo.items[0];

                            updatedVideoInfo['snippet'] = snippet;
                            updatedVideoInfo['contentDetails'] = contentDetails;
                            updatedVideoInfo['statistics'] = statistics;
                        }

                        return updatedVideoInfo;
                    }

                    return video;
                });

                state.data.videos = updatedVideos as IVideo[];
                state.data.loadingVideos = loadingVideos?.filter(videoId => videoId !== loadedVideoId);
            })
            .addCase(onLoadVideoInfo.rejected, (state, {meta}) => {
                const prevVideos = state.data.videos;
                const videoId = meta.arg.videoId;

                const updatedVideos = prevVideos.length
                    ? prevVideos.filter(video => {
                          const _videoId = typeof video.id === 'string' ? video.id : video.id?.videoId;

                          return _videoId !== videoId;
                      })
                    : [];

                state.data.videos = updatedVideos;
            });
    },
});

export const {resetSlice, resetError} = videosData.actions;
export default videosData.reducer;
