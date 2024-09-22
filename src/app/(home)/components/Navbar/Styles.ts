import {CSSObject, Drawer, styled, Theme} from '@mui/material';

const drawerWidth = 220;

export const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('xs')]: {
        width: `calc(${theme.spacing(8.5)} + 1px)`,
    },
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(11.875)} + 1px)`,
    },
});

export const MuiDrawer = styled(Drawer, {shouldForwardProp: prop => prop !== 'open'})(({theme}) => ({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    variants: [
        {
            props: ({open}) => open,
            style: {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            },
        },
        {
            props: ({open}) => !open,
            style: {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            },
        },
    ],

    '& .MuiPaper-root': {
        padding: theme.spacing(2, 1.5, 0),
    },
}));
