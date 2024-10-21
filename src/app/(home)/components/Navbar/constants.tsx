import HomeIconSvg from '@/app/common/assets/svg/home-icon/homeIconSvg.svg';
import ActiveHomeIconSvg from '@/app/common/assets/svg/home-icon/activeHomeIconSvg.svg';
import LibraryIconSvg from '@/app/common/assets/svg/library-icon/libraryIconSvg.svg';
import ActiveLibraryIconSvg from '@/app/common/assets/svg/library-icon/activeLibraryIconSvg.svg';
import ShortsIconSvg from '@/app/common/assets/svg/shorts-icon/shortsIconSvg.svg';
import ActiveShortsIconSvg from '@/app/common/assets/svg/shorts-icon/activeShortsIconSvg.svg';

export const pages = [
    {
        label: 'Home',
        defaultIcon: <HomeIconSvg />,
        activeIcon: <ActiveHomeIconSvg />,
        path: '/',
    },
    {
        label: 'Library',
        defaultIcon: <LibraryIconSvg />,
        activeIcon: <ActiveLibraryIconSvg />,
        path: '/library',
    },
    {
        label: 'Shorts',
        defaultIcon: <ShortsIconSvg />,
        activeIcon: <ActiveShortsIconSvg />,
        path: '/shorts',
    },
];

export const defaultPageIndex = 0;
