'use client';

import {Box, styled} from '@mui/material';

import {gridWrapperMixin} from './common/themes/mixins';
import {categoriesHeight} from './(home)/components/Categories/Styles';

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

export const VideosListWrapper = styled(Box, {
    shouldForwardProp: prop => prop !== 'itemsSize' && prop !== 'isNavbarOpen',
})<VideosListWrapperProps>(({theme, itemsSize, isNavbarOpen}) => ({
    ...gridWrapperMixin(theme, itemsSize, isNavbarOpen),

    paddingTop: `calc(${categoriesHeight}px + ${theme.spacing(6)})`,
    gap: '1rem',
    alignItems: 'start',
    justifyItems: 'center',
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
        paddingTop: `calc(${categoriesHeight}px + ${theme.spacing(4)})`,
    },
}));
