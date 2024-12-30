import {Grid2, styled} from '@mui/material';

export const VideoPreviewSkeleton = styled(Grid2)(({theme}) => ({
    aspectRatio: '16/7.5',

    '& .MuiSkeleton-rectangular': {
        borderRadius: theme.spacing(1.5),
        width: '100%',
        height: '100%',
    },
}));

export const VideoDescriptionSkeletonWrapper = styled(Grid2)(({theme}) => ({
    flexWrap: 'nowrap',
    width: '100%',
    paddingTop: theme.spacing(1.5),

    '& .MuiTypography-h6': {
        marginBottom: theme.spacing(1),

        '& .MuiSkeleton-text': {
            transform: 'scale(1)',
        },
    },
}));
