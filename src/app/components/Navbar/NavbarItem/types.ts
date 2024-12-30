import {Page} from '../types';

export interface NavbarItemProps {
    page: Page;
    isNavbarOpen: boolean;
    handleListItemClick: (index: number) => void;
    isSelected: boolean;
    pageIndex: number;
}
