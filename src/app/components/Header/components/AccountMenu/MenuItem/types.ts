import {JSXElementConstructor, ReactElement} from 'react';

export interface MenuItemProps {
    icon?: ReactElement<any, string | JSXElementConstructor<any>> | null | undefined;
    text: string;
    hasNested?: boolean;
}
