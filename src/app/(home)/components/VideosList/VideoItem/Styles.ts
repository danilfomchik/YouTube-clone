import Link from 'next/link';
import {Card, CardMedia, CardMediaProps, CSSObject, styled, Typography, TypographyProps} from '@mui/material';
import Image from 'next/image';

export const ellipsisOverflow = (lineClamp: string): CSSObject => ({
    display: '-webkit-box',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
});

export const VideoItemCard = styled(Card)(({theme}) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',

    '& .MuiCardContent-root': {
        padding: theme.spacing(1.5, 1, 0),
    },
}));

export const VideoItemCardLink = styled(Link)(() => ({
    color: 'initial',
    textDecoration: 'none',
}));

export const VideoItemCardMedia = styled(CardMedia)<CardMediaProps & {fetchPriority?: 'high' | 'low' | 'auto'}>(
    ({theme}) => ({
        width: '100%',
        position: 'relative',
        aspectRatio: '16/9',

        '& img': {
            objectFit: 'cover',
            aspectRatio: '16/9',
            borderRadius: theme.spacing(1.5),
        },
    }),
);

export const VideoItemChannelLink = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(1.75),
    color: theme.palette.text.disabled,
    textDecoration: 'none',

    '&:hover': {color: theme.palette.text.primary},
}));

export const VideoItemChannelPhoto = styled(Image)(() => ({
    borderRadius: '50%',
}));

export const VideoDuration = styled(Typography)<TypographyProps>(({theme}) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: theme.spacing(1),
    background: 'black',
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.125, 0.5),
    fontSize: theme.spacing(1.5),
    color: theme.palette.text.secondary,
}));

export const VideoTitle = styled(Typography)<TypographyProps>(({theme}) => ({
    ...ellipsisOverflow('2'),
    fontSize: theme.spacing(2),
}));
