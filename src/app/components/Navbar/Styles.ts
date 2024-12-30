import {CSSObject, Drawer, styled, Theme} from '@mui/material';

export const drawerWidth = 220;

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
        width: 0,
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
                '& .MuiPaper-root': {
                    [theme.breakpoints.up('xs')]: {
                        padding: theme.spacing(1, 1.5, 0),
                    },
                    [theme.breakpoints.up('sm')]: {
                        padding: theme.spacing(2, 1.5, 0),
                    },
                },
            },
        },
        {
            props: ({open}) => !open,
            style: {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
                '& .MuiPaper-root': {
                    [theme.breakpoints.up('xs')]: {
                        padding: 0,
                    },
                    [theme.breakpoints.up('sm')]: {
                        padding: theme.spacing(2, 1.5, 0),
                    },
                },
            },
        },
    ],
}));
