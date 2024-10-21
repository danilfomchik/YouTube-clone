import {ReactNode} from 'react';

declare module '@mui/material/ListItem' {
    export interface ListItemOwnProps {
        open?: boolean;
    }
}

export interface Page {
    label: string;
    defaultIcon: ReactNode;
    activeIcon: ReactNode;
    path: string;
}

export type Pages = Page[];
