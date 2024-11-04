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
                        color: theme.palette.background.white,
                        background: theme.palette.background.default,
                        borderRadius: theme.spacing(3),
                        padding: theme.spacing(1, 6),
                        border: `1px solid ${theme.palette.secondary.main}`,

                        '&:hover': {
                            background: theme.palette.secondary.light,
                        },
                    },
                    containedSecondary: {
                        color: theme.palette.background.white,
                        background: theme.palette.secondary.main,

                        '&:hover': {
                            background: theme.palette.background.default,
                            boxShadow: `0px 0px 1px 1px ${theme.palette.secondary.main} inset`,
                        },
                    },
                    outlined: {
                        color: theme.palette.info.main,
                        borderColor: theme.palette.info.main,
                        padding: theme.spacing(1, 2),
                        borderRadius: theme.spacing(3),
                        background: theme.palette.background.default,

                        '&:hover': {
                            background: theme.palette.info.light,
                        },

                        '& .MuiTypography-root': {
                            color: theme.palette.info.main,
                        },

                        '& .MuiButton-startIcon .MuiSvgIcon-root': {
                            color: theme.palette.info.main,
                        },
                    },
                    outlinedSecondary: {
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

                        '& .MuiButtonBase-root.MuiButton-outlinedSecondary': {
                            flexDirection: 'row',
                            padding: theme.spacing(1, 6),
                            width: 'auto',
                            borderRadius: theme.spacing(3),

                            '& .MuiButton-icon': {
                                marginRight: theme.spacing(1),
                            },

                            [theme.breakpoints.down('lg')]: {
                                padding: theme.spacing(1, 3),
                            },

                            [theme.breakpoints.down('sm')]: {
                                borderRadius: theme.spacing(2),
                                padding: theme.spacing(1.5),

                                '& .MuiTypography-body1': {
                                    display: 'none',
                                },
                                '& .MuiButton-icon': {
                                    marginRight: theme.spacing(0),
                                    marginLeft: theme.spacing(0),
                                },
                            },
                        },

                        '& .MuiTypography-h6': {
                            display: 'flex',
                            marginRight: theme.spacing(2),
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: theme.palette.text.primary,
                            textDecoration: 'none',

                            [theme.breakpoints.down('md')]: {
                                display: 'none',
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
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        '&:not(.MuiMenuItem-dense)': {
                            justifyContent: 'space-between',
                        },

                        '& .MuiTypography-root': {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: theme.spacing(20),
                        },

                        '& .MuiListItemIcon-root': {
                            marginRight: theme.spacing(2),
                            minWidth: 0,
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
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        overflow: 'visible',
                        background: theme.palette.background.black,

                        '& .MuiBadge-root': {
                            position: 'absolute',
                            top: -20,
                            left: '50%',
                            transform: 'translate(-50%, 0%)',
                            zIndex: 1202,

                            '& .MuiIconButton-root': {
                                padding: theme.spacing(0.5),
                                background: theme.palette.background.lightGrey,
                                border: `1px solid ${theme.palette.background.black}`,
                                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

                                '& .MuiSvgIcon-root': {
                                    width: 20,
                                    height: 20,
                                    color: theme.palette.background.black,
                                },

                                '&:hover': {
                                    border: `1px solid ${theme.palette.error.main}`,

                                    '& .MuiSvgIcon-root': {
                                        color: theme.palette.error.main,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(0, 3, 3),

                        [theme.breakpoints.down('sm')]: {
                            padding: theme.spacing(4, 3, 3),
                        },

                        '& .MuiDivider-root': {
                            color: theme.palette.background.white,
                            ':before, :after': {borderTop: `thin solid ${theme.palette.background.white}`},
                        },

                        '& .MuiAvatar-root': {
                            width: 100,
                            height: 100,
                        },
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(0, 3, 2),

                        '& .MuiButtonBase-root': {
                            padding: theme.spacing(1, 2),
                            minWidth: '100px',
                        },
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(2, 3, 0),
                    },
                },
            },
            MuiAlert: {
                styleOverrides: {
                    root: {
                        margin: theme.spacing(3, 0, 0),
                        background: theme.palette.error.light,
                    },
                    message: {
                        color: theme.palette.error.main,
                    },
                },
            },
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        position: 'absolute',
                        color: theme.palette.background.white,
                        zIndex: theme.zIndex.drawer + 1,
                    },
                },
            },
        },
    });

export const lightTheme = createTheme(createCommonTheme(customThemeValues));
