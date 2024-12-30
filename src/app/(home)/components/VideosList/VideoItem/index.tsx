'use client';

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {duration, utc} from 'moment';
import {Grid2} from '@mui/material';
import Image from 'next/image';

import {IVideoItemProps} from './types';
import {selectIsVideoLoading} from '@/app/redux/videosList/selectors';
import VideoItemSkeleton from '@/app/components/VideoItemSkeleton';
import {VideoDuration, VideoItemCard, VideoItemCardLink, VideoItemCardMedia} from './Styles';
import VideoDetails from './VideoDetails';
import {useAppDispatch} from '@/app/redux/store';
import {onLoadVideoInfo} from '@/app/redux/videosList/thunks';

const VideoItem = ({video, videoId, kind}: IVideoItemProps) => {
    const dispatch = useAppDispatch();
    const isVideoLoading = useSelector(selectIsVideoLoading(videoId));

    const {
        snippet: {title, channelId, thumbnails},
        contentDetails,
    } = video;

    const givenDuration = contentDetails?.duration;
    const seconds = duration(givenDuration).asSeconds();
    const _duration = utc(seconds * 1000).format(givenDuration?.includes('H') ? 'h:mm:ss' : 'mm:ss');
    const thumbnail = thumbnails?.maxres?.url || thumbnails?.high?.url || thumbnails?.medium?.url;

    useEffect(() => {
        dispatch(onLoadVideoInfo({videoId, channelId, kind}));
    }, [dispatch, videoId, channelId, kind]);

    return (
        <>
            {isVideoLoading ? (
                <VideoItemSkeleton withChannelInfo={true} />
            ) : (
                <VideoItemCard>
                    <VideoItemCardLink href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
                        <Grid2 container position="relative">
                            <VideoItemCardMedia title={title}>
                                <Image alt={title} src={thumbnail} priority fill sizes="100%" width={0} height={0} />
                            </VideoItemCardMedia>
                            <VideoDuration component="div" variant="body1">
                                {_duration}
                            </VideoDuration>
                        </Grid2>
                        <VideoDetails video={video} />
                    </VideoItemCardLink>
                </VideoItemCard>
            )}
        </>
    );
};

export default VideoItem;
