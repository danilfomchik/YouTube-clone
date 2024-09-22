/* eslint-disable max-len */
import {Theme, createTheme} from '@mui/material';

import customThemeValues from './customThemeValues';

export const toolbarHeights = {
    mobilePortrait: 60,
    mobileLandscape: 60,
    tabletDesktop: 79,
};

const createCommonTheme = (theme: Theme) =>
    createTheme({
        ...theme,
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
                        color: theme.palette.text.primary,
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
                        fontSize: '1rem',
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
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: theme.palette.background.black,
                        fontFamily: 'inherit',
                        fontWeight: '600',
                        '&.Mui-error': {
                            color: theme.palette.error.main,
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    input: {
                        '&::placeholder': {
                            fontWeight: '400',
                        },
                    },
                    root: {
                        color: theme.palette.background.black,
                        background: 'inherit',
                        fontFamily: 'inherit',
                        fontSize: 18,
                        fontStyle: 'normal',
                        fontWeight: '600',
                        minHeight: 60,
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '& fieldset': {
                            borderColor: theme.palette.background.grey,
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.secondary.main,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.secondary.main,
                        },
                    },
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        maxWidth: 600,
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    outlined: {
                        '&.MuiInputLabel-marginDense': {
                            transform: 'translate(14px, 9px) scale(1)',
                        },
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -6px) scale(0.75)',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                    text: {
                        minWidth: 140,
                        height: 40,
                        background: theme.palette.primary.main,
                    },
                    containedPrimary: {
                        color: theme.palette.background.black,

                        '& .MuiButton-endIcon': {
                            backgroundColor: theme.palette.secondary.main,
                            color: `${theme.palette.background.black}`,
                        },
                    },
                    containedSecondary: {
                        '& .MuiButton-endIcon': {
                            background: theme.palette.primary.main,
                        },

                        '&:hover': {
                            background: theme.palette.secondary.dark,
                        },
                    },
                    outlinedSecondary: {
                        '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                        },
                        padding: theme.spacing(1, 2),
                        borderRadius: theme.spacing(3),
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1),
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    padding: {
                        padding: theme.spacing(2, 0),
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1.5, 2),
                        borderRadius: theme.spacing(2),

                        variants: [
                            {
                                props: ({open = true}) => open,
                                style: {
                                    '& .MuiListItemIcon-root': {
                                        marginRight: theme.spacing(3),
                                    },

                                    '& .MuiListItemText-root': {
                                        '& .MuiTypography-root': {
                                            fontSize: '1rem',
                                        },
                                    },

                                    '& .MuiListItemButton-root': {
                                        flexDirection: 'row',
                                    },
                                },
                            },
                            {
                                props: ({open = true}) => !open,
                                style: {
                                    '& .MuiListItemIcon-root': {
                                        marginRight: theme.spacing(0),
                                    },

                                    '& .MuiListItemText-root': {
                                        marginBottom: theme.spacing(0),

                                        '& .MuiTypography-root': {
                                            fontSize: '.8rem',
                                        },
                                    },

                                    '& .MuiListItemButton-root': {
                                        flexDirection: 'column',
                                    },

                                    [theme.breakpoints.down('sm')]: {
                                        padding: theme.spacing(1.25, 2.75),

                                        '& .MuiListItemText-root': {
                                            display: 'none',
                                        },
                                    },
                                },
                            },
                        ],

                        '&:has(.MuiButtonBase-root.Mui-selected)': {
                            backgroundColor: theme.palette.background.black,

                            '& .MuiButtonBase-root': {
                                backgroundColor: theme.palette.background.black,
                            },
                        },

                        '& .MuiButtonBase-root': {
                            padding: theme.spacing(0),
                        },

                        '& .MuiListItemIcon-root': {
                            minWidth: 0,
                            justifyContent: 'center',
                        },
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: theme.palette.background.lightGrey,
                    },
                },
            },
        },
    });

export const lightTheme = createTheme(createCommonTheme(customThemeValues));
