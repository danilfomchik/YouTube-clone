import React from 'react';
import {Grid2, Skeleton, Typography} from '@mui/material';

import {IVideoItemSkeletonProps} from './types';
import {VideoDescriptionSkeletonWrapper, VideoPreviewSkeleton} from './Styles';

const VideoItemSkeleton = ({withChannelInfo = true}: IVideoItemSkeletonProps) => {
    return (
        <Grid2 container wrap="wrap" size={{xs: 12}} height="100%" data-testid="Video item skeleton">
            <VideoPreviewSkeleton size={{xs: 12}}>
                <Skeleton variant="rectangular" />
            </VideoPreviewSkeleton>

            <VideoDescriptionSkeletonWrapper container gap={1.5} size={{xs: 12}}>
                {withChannelInfo && (
                    <Grid2>
                        <Skeleton variant="circular" width={36} height={36} />
                    </Grid2>
                )}

                <Grid2 size={{xs: 12}}>
                    <Typography component="div" variant="h6">
                        <Skeleton />
                    </Typography>

                    {withChannelInfo && <Skeleton width="45%" />}
                    <Skeleton width="60%" />
                </Grid2>
            </VideoDescriptionSkeletonWrapper>
        </Grid2>
    );
};

export default VideoItemSkeleton;
