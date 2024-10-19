/* eslint-disable max-len */
import {Theme, createTheme} from '@mui/material';

import customThemeValues from './customThemeValues';
import {closedMixin, openedMixin} from '@/app/(home)/components/Navbar/Styles';

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
                        color: theme.palette.background.white,
                        fontFamily: 'inherit',
                        textAlign: 'left',
                        fontWeight: '500',
                        lineHeight: theme.spacing(3),
                        margin: theme.spacing(0, 0, 1),

                        '&.Mui-error': {
                            color: theme.palette.text.primary,
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    inputAdornedStart: {
                        border: `0px solid ${theme.palette.background.black}`,
                        borderWidth: '0px 0px 0px 2px',
                        borderRadius: '0 6px 6px 0',
                    },
                    root: {
                        color: theme.palette.background.white,
                        background: 'inherit',
                        fontFamily: 'inherit',
                        fontSize: theme.spacing(2),
                        lineHeight: theme.spacing(3),
                        fontStyle: 'normal',

                        '& fieldset': {
                            top: 0,
                            borderRadius: 0,
                            border: 'none',
                        },
                        '& fieldset legend': {
                            display: 'none',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(0),
                        borderRadius: 0,
                        borderBottom: `2px solid ${theme.palette.background.white}`,

                        '&.Mui-focused': {
                            borderBottom: `2px solid ${theme.palette.secondary.main}`,
                        },
                    },
                    input: {
                        padding: theme.spacing(1.5, 2),
                        border: 'none',
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
            MuiInputAdornment: {
                styleOverrides: {
                    root: {
                        margin: 0,
                        padding: theme.spacing(0, 1),

                        svg: {
                            color: theme.palette.background.white,
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
                            backgroundColor: theme.palette.info.main,
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
                        color: theme.palette.info.main,
                        borderColor: theme.palette.info.main,
                        padding: theme.spacing(1, 2),
                        borderRadius: theme.spacing(3),

                        '& .MuiTypography-root': {
                            color: theme.palette.info.main,
                        },

                        variants: [
                            {
                                props: ({open}) => open,
                                style: {
                                    ...openedMixin(theme),
                                },
                            },
                            {
                                props: ({open, startIcon, endIcon}) => (!open && startIcon) || endIcon,
                                style: {
                                    [theme.breakpoints.down('sm')]: {
                                        '& .MuiTypography-body1': {
                                            display: 'none',
                                        },
                                    },
                                },
                            },
                            {
                                props: ({open = true}) => !open,
                                style: {
                                    flexDirection: 'column',
                                    borderRadius: theme.spacing(2),
                                    padding: theme.spacing(1.5),
                                    ...closedMixin(theme),

                                    '& .MuiButton-icon': {
                                        marginRight: theme.spacing(0),
                                        marginLeft: theme.spacing(0),
                                    },
                                },
                            },
                        ],
                    },
                    outlinedPrimary: {
                        color: theme.palette.primary.dark,
                        borderColor: theme.palette.primary.dark,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1),
                        margin: 0,
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        '& form': {
                            width: '100%',
                            textAlign: 'center',

                            [theme.breakpoints.down('sm')]: {
                                textAlign: 'left',
                            },
                        },

                        '& .MuiSvgIcon-root:not(.MuiSvgIcon-colorSecondary)': {
                            color: theme.palette.background.white,
                        },

                        '& .MuiAutocomplete-root': {
                            transition: theme.transitions.create('width'),
                            margin: theme.spacing(0, 'auto'),

                            [theme.breakpoints.down('lg')]: {
                                width: '80%',
                            },
                            [theme.breakpoints.down('md')]: {
                                width: '70%',

                                '&.Mui-focused': {
                                    width: '100%',
                                },
                            },
                            [theme.breakpoints.down('sm')]: {
                                width: '90%',
                            },
                        },
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

                            '&:hover': {
                                '& .MuiButtonBase-root': {
                                    backgroundColor: 'transparent',
                                },
                            },
                        },

                        '&:not(:has(.MuiButtonBase-root.Mui-selected)):hover': {
                            backgroundColor: theme.palette.background.grey,
                        },

                        '& .MuiButtonBase-root': {
                            backgroundColor: 'transparent',
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
                        margin: theme.spacing(0),
                        borderColor: theme.palette.background.lightGrey,
                    },
                },
            },
            MuiMenu: {
                styleOverrides: {
                    root: {
                        '& .MuiMenuItem-root .MuiListItemIcon-root': {
                            minWidth: 0,
                        },
                    },
                    paper: {
                        background: 'transparent',
                    },
                    list: {
                        background: theme.palette.background.black,
                        color: theme.palette.text.primary,
                        borderRadius: theme.spacing(2),

                        svg: {
                            color: theme.palette.text.primary,
                        },
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(0),
                        maxWidth: '600px',
                        margin: theme.spacing(0, 'auto'),

                        '& .MuiOutlinedInput-root.MuiInputBase-formControl': {
                            padding: theme.spacing(0),
                            paddingRight: theme.spacing(0),

                            '& input': {
                                padding: theme.spacing(1, 2),

                                [theme.breakpoints.down('sm')]: {
                                    padding: theme.spacing(1, 0, 1, 1),
                                },
                            },

                            '&.Mui-focused input': {
                                padding: theme.spacing(1, 3.5, 1, 2),

                                [theme.breakpoints.down('sm')]: {
                                    padding: theme.spacing(1, 2.5, 1, 1),
                                },
                            },
                        },

                        '& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                            height: '100%',
                            width: theme.spacing(3),
                            right: 45,
                            top: 0,

                            '& .MuiIconButton-root': {
                                height: '100%',
                                width: '100%',
                            },
                        },

                        '& .MuiInputAdornment-root': {
                            position: 'relative',
                            padding: theme.spacing(0, 1, 0, 0),
                        },
                    },
                    input: {
                        '&.MuiOutlinedInput-input': {
                            minWidth: 10,
                            padding: theme.spacing(0),
                        },
                    },
                    option: {
                        '& .MuiTypography-root': {
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        },

                        '&.MuiAutocomplete-option.Mui-focused': {
                            background: theme.palette.background.default,
                            boxShadow: `2px 0px 0px 0px ${theme.palette.background.lightGrey} inset`,
                        },
                    },
                    popper: {
                        '& .MuiPaper-root': {
                            background: theme.palette.background.black,
                            borderRadius: theme.spacing(0, 0, 0.5, 0.5),
                        },
                    },
                    clearIndicator: {
                        padding: theme.spacing(0),
                    },
                    endAdornment: {
                        transform: 'none',
                    },
                },
            },
        },
    });

export const lightTheme = createTheme(createCommonTheme(customThemeValues));
