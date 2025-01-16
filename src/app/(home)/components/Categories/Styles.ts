import {styled, Tabs} from '@mui/material';

import {gridWrapperMixin} from '@/app/common/themes/mixins';
import {toolbarHeights} from '@/app/common/themes/themes';

export const categoriesHeight = 41.5;

export const TabsWrapper = styled(Tabs, {
    shouldForwardProp: prop => prop !== 'itemsSize' && prop !== 'isNavbarOpen',
})<{isNavbarOpen: boolean; itemsSize?: 'small' | 'large'}>(({theme, itemsSize = 'large', isNavbarOpen}) => ({
    minHeight: 'auto',
    position: 'fixed',
    zIndex: 1000,
    padding: theme.spacing(4, 0, 2),
    backgroundColor: theme.palette.background.default,

    [`${theme.breakpoints.up('xs')}`]: {
        top: `${toolbarHeights.mobilePortrait}px`,
    },
    [`${theme.breakpoints.down('sm')}`]: {
        padding: theme.spacing(2, 0),
    },
    [theme.breakpoints.up('sm')]: {
        top: `${toolbarHeights.mobileLandscape}px`,
    },
    [theme.breakpoints.up('md')]: {
        top: `${toolbarHeights.tabletDesktop}px`,
    },

    '.MuiTabs-scrollButtons.Mui-disabled': {
        display: 'none',
    },

    '& .MuiTabs-scroller': {
        height: `${categoriesHeight}px`,
        ...gridWrapperMixin(theme, itemsSize, isNavbarOpen),

        '& .MuiTabs-indicator': {
            display: 'none',
        },

        '& .MuiTabs-flexContainer': {
            gap: theme.spacing(1.5),
        },

        '& .MuiTab-root': {
            minHeight: 'auto',
            padding: theme.spacing(1.5, 2),
            borderRadius: theme.spacing(1),
            background: theme.palette.background.black,

            '&:hover': {
                background: theme.palette.background.hover,
            },

            '&.Mui-selected': {
                background: theme.palette.background.lightWhite,
            },
        },
    },
}));
