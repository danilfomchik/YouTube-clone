import {Page} from '../types';

export interface NavbarItemProps {
    page: Page;
    navbarStatus: boolean;
    handleListItemClick: (index: number) => void;
    isSelected: boolean;
    pageIndex: number;
}
