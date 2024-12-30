import React, {memo, MouseEvent} from 'react';
import moment from 'moment';
import {CardContent, Grid2, Tooltip, Typography} from '@mui/material';

import {VideoItemChannelLink, VideoItemChannelPhoto, VideoTitle} from './Styles';
import {IVideo} from './types';

const VideoDetails = ({video}: {video: IVideo}) => {
    const {
        snippet: {publishedAt, channelTitle, channelId, title},
    } = video;

    const onChannelLinkClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        window.open(`https://www.youtube.com/channel/${channelId}`, '_blank');
    };

    return (
        <CardContent>
            <Grid2 container flexWrap="nowrap" gap={1.5} size={{xs: 12}}>
                {video?.channelInfo && (
                    <Grid2 container minWidth="auto">
                        <VideoItemChannelPhoto
                            src={
                                video.channelInfo.snippet.thumbnails.medium.url ||
                                video.channelInfo.snippet.thumbnails.default.url
                            }
                            alt={video?.channelInfo?.snippet.title}
                            width={36}
                            height={36}
                        />
                    </Grid2>
                )}
                <Grid2>
                    <VideoTitle variant="h5" mb={0.5}>
                        {title}
                    </VideoTitle>
                    <Tooltip
                        title={channelTitle || video?.channelInfo?.snippet.title}
                        placement="top-start"
                        disableInteractive
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [-4, -14],
                                        },
                                    },
                                ],
                            },
                        }}>
                        <VideoItemChannelLink variant="body2" onClick={onChannelLinkClick}>
                            {channelTitle || video?.channelInfo?.snippet.title}
                        </VideoItemChannelLink>
                    </Tooltip>
                    <Typography variant="body2" fontSize={14} color="text.disabled">
                        {Intl.NumberFormat('en', {
                            notation: 'compact',
                        }).format(+video?.statistics?.viewCount)}
                        &nbsp;view(s) •&nbsp;{moment(publishedAt).fromNow()}
                    </Typography>
                </Grid2>
            </Grid2>
        </CardContent>
    );
};

export default memo(VideoDetails);
