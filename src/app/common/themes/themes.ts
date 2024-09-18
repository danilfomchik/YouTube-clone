/* eslint-disable max-len */
import {Theme, createTheme} from '@mui/material';

import lightPalette from './lightPalette';

export const toolbarHeights = {
    mobilePortrait: 60,
    mobileLandscape: 60,
    tabletDesktop: 79,
};

const createCommonTheme = (theme: Theme) =>
    createTheme({
        ...theme,
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 1086,
                xl: 1537,
            },
        },
        spacing: 8,
        mixins: {
            toolbar: {
                minHeight: toolbarHeights.mobilePortrait,
                [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                    minHeight: toolbarHeights.mobileLandscape,
                },
                [theme.breakpoints.up('sm')]: {
                    minHeight: toolbarHeights.mobileLandscape,
                },
                [theme.breakpoints.up('md')]: {
                    minHeight: toolbarHeights.tabletDesktop,
                },
            },
        },
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        body1: 'span',
                    },
                },
                styleOverrides: {
                    root: {
                        fontFamily: 'inherit',
                        color: theme.palette.background.black,
                    },
                    h1: {
                        fontSize: '3.8rem',
                        lineHeight: '130%',
                        fontWeight: '500',
                    },
                    h2: {
                        fontSize: theme.spacing(4),
                        lineHeight: theme.spacing(5),
                        fontWeight: '800',

                        [theme.breakpoints.down('md')]: {
                            fontSize: '2.13rem',
                        },
                    },
                    h3: {
                        fontSize: '2.5rem',
                        lineHeight: '140%',
                        fontWeight: '500',
                    },
                    h4: {
                        fontSize: '2rem',
                        lineHeight: '140%',
                        fontWeight: '500',
                    },
                    h5: {
                        fontSize: '1.5rem',
                        lineHeight: '150%',
                        fontWeight: '600',

                        [theme.breakpoints.down('md')]: {
                            fontSize: '1.25rem',
                            lineHeight: '140%',
                            fontWeight: '500',
                        },
                    },
                    body1: {
                        fontWeight: '500',
                    },
                    body2: {
                        fontSize: '1.13rem',
                        lineHeight: '150%',
                        fontWeight: '400',

                        [theme.breakpoints.down('md')]: {
                            fontSize: '1rem',
                            opacity: 0.9,
                        },
                    },
                    caption: {
                        fontSize: '0.8 rem',
                        lineHeight: '1.125rem',
                    },
                },
            },
        },
    });

export const lightTheme = createTheme(createCommonTheme(lightPalette));
