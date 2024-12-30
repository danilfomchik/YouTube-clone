'use client';

import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import VideoItem from './VideoItem';
import {ISlicesNames} from '@/app/redux/types';
import {VideosListWrapper} from '@/app/Styles';
import {selectErrors, selectLoading} from '@/app/redux/selectors';
import {selectNextPageToken, selectVideos} from '@/app/redux/videosList/selectors';
import {IThunkNames} from '@/app/redux/videosList/types';
import ErrorMessage from '@/app/components/ErrorMessage';
import {selectNavbarStatus} from '@/app/redux/navbar/selectors';
import {IVideosListProps} from './types';
import SkeletonList from '@/app/components/SkeletonList';

const VideosList = ({loadVideosList}: IVideosListProps) => {
    const videos = useSelector(selectVideos);
    const isLoading = useSelector(selectLoading(ISlicesNames.videosData, IThunkNames.onLoadVideosList));
    const videosDataSliceErrors = useSelector(selectErrors(ISlicesNames.videosData));
    const isNavbarOpen = useSelector(selectNavbarStatus);
    const nextPageToken = useSelector(selectNextPageToken);

    const videosListError = videosDataSliceErrors?.[0]?.thunk === IThunkNames.onLoadVideosList;

    const loadNextVideos = () => {
        loadVideosList({nextPageToken});
    };

    return (
        <InfiniteScroll
            dataLength={videos?.length || 0}
            next={loadNextVideos}
            loader={<SkeletonList />}
            hasMore={!!nextPageToken}
            scrollThreshold={0.9}>
            {!videos?.length && !isLoading && (
                <ErrorMessage
                    status="Oops!"
                    message={videosListError ? 'Something went wrong...' : 'Nothing to show...'}
                />
            )}

            <VideosListWrapper itemsSize={'large'} isNavbarOpen={isNavbarOpen}>
                {!!videos.length &&
                    !videosDataSliceErrors.length &&
                    videos.map((video, index) => {
                        const _videoId = typeof video.id === 'string' ? video.id : video.id?.videoId;

                        // youtube api has some issues with duplicating items,
                        // so I decided to use {videoId-index} as key
                        return (
                            <VideoItem
                                key={`${_videoId}-${index}`}
                                video={video}
                                videoId={_videoId}
                                kind={video.kind}
                            />
                        );
                    })}
            </VideosListWrapper>
        </InfiniteScroll>
    );
};

export default memo(VideosList);
