import React from 'react';

import {maxVideosResults} from '@/app/services/constants';
import VideoItemSkeleton from '../VideoItemSkeleton';

const SkeletonList = () => {
    return (
        <>
            {Array(maxVideosResults)
                .fill(0)
                .map((item, i) => (
                    <VideoItemSkeleton key={i} withChannelInfo={true} />
                ))}
        </>
    );
};

export default SkeletonList;
