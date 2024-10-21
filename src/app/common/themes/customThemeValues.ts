import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
    export interface TypeBackground {
        black: string;
        white: string;
        grey: string;
        border: string;
        lightGrey: string;
    }
}

const customThemeValues = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1086,
            xl: 1537,
        },
    },
    palette: {
        primary: {
            light: '#ffffff',
            main: '#121214',
            dark: '#D1D5DB',
            contrastText: '#000000',
        },
        secondary: {
            main: '#ec625c',
            light: '#fcefee',
            dark: '#ed67671a',
            contrastText: '#ffffff',
        },
        error: {
            main: '#ed6767',
            light: '#ed67671a',
            dark: '#f56969',
            contrastText: '#ffffff',
        },
        info: {
            main: '#3ea6ff',
            contrastText: '#ffffff',
        },
        success: {
            main: '#63c7b2',
            contrastText: '#ffffff',
        },
        background: {
            default: '#121214',
            grey: '#202024',
            black: '#24262a',
            lightGrey: '#d9d9d9',
            white: '#ffffff',
        },
        text: {
            disabled: '#aaaaaa',
            primary: '#ffffff',
            secondary: '#D1D5DB',
        },
    },
});

export default customThemeValues;
