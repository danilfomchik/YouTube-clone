import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
    export interface TypeBackground {
        black: string;
        grey: string;
        border: string;
        white: string;
    }
}

const lightPalette = createTheme({
    palette: {
        primary: {
            light: '#fff799',
            main: '#feea00',
            dark: '#e5d300',
            contrastText: '#000000',
        },
        secondary: {
            main: '#ef97e3',
            light: '#f5c1ee',
            dark: '#d788cc',
            contrastText: '#000000',
        },
        error: {
            main: '#ed6767',
            light: '#ed67671a',
            dark: '#f56969',
            contrastText: '#000000',
        },
        info: {
            main: '#94a9e8',
            dark: '#0126E5',
            light: '#4267B2',
            contrastText: '#000000',
        },
        success: {
            main: '#63c7b2',
            contrastText: '#000000',
        },
        background: {
            default: '#ffffff',
            grey: '#f2f2f2',
            black: '#000000',
        },
        text: {
            disabled: '#00000099',
            primary: '#000000',
            secondary: '#ffffff',
        },
    },
});

export default lightPalette;
