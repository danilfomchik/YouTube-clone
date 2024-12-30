'use client';

import {Box, styled} from '@mui/material';

export const MainContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
}));

export const Main = styled(Box)(() => ({
    flexGrow: 1,

    '& .infinite-scroll-component__outerdiv': {
        width: '100%',
    },
}));

interface VideosListWrapperProps {
    itemsSize: 'small' | 'large';
    isNavbarOpen?: boolean;
}

enum ItemsSizes {
    small = 250,
    large = 330,
}

export const VideosListWrapper = styled(Box, {
    shouldForwardProp: prop => prop !== 'itemsSize' && prop !== 'isNavbarOpen',
})<VideosListWrapperProps>(({theme, itemsSize, isNavbarOpen}) => ({
    gridTemplateColumns: `repeat(auto-fill, minmax(${ItemsSizes[itemsSize]}px, 1fr))`,
    display: 'grid',
    gap: '1rem',
    alignItems: 'start',
    justifyItems: 'center',
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: `repeat(auto-fill, minmax(${
            !isNavbarOpen ? `calc(320px - 48px)` : `${ItemsSizes[itemsSize]}px`
        }, 1fr))`,
    },

    [theme.breakpoints.up('sm')]: {},
}));
