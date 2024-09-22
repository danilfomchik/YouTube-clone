'use client';

import {Box, styled} from '@mui/material';

import Button from './components/Button';
import {LogInButtonProps} from './(home)/types';
import {closedMixin, openedMixin} from './(home)/components/Navbar/Styles';

export const MainContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
}));

export const Main = styled('div')(() => ({
    flexGrow: 1,
}));

export const LogInButton = styled(Button, {shouldForwardProp: prop => prop !== 'open'})<LogInButtonProps>(
    ({theme}) => ({
        padding: theme.spacing(1, 2),
        borderRadius: theme.spacing(3),

        variants: [
            {
                props: ({open}) => open,
                style: {
                    ...openedMixin(theme),
                },
            },
            {
                props: ({open = true}) => !open,
                style: {
                    flexDirection: 'column',
                    borderRadius: theme.spacing(2),
                    padding: theme.spacing(1.5),
                    ...closedMixin(theme),

                    [theme.breakpoints.down('sm')]: {
                        '& .MuiTypography-body1': {
                            display: 'none',
                        },
                    },

                    '& .MuiButton-icon': {
                        marginRight: theme.spacing(0),
                        marginLeft: theme.spacing(0),
                    },
                },
            },
        ],
    }),
);
