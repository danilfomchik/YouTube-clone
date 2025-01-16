import {CSSObject, Theme} from '@mui/material';

enum ItemsSizes {
    small = 250,
    large = 330,
}

export const gridWrapperMixin = (
    theme: Theme,
    itemsSize: keyof typeof ItemsSizes,
    isNavbarOpen?: boolean,
): CSSObject => ({
    display: 'grid',

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: `repeat(auto-fill, minmax(${ItemsSizes[itemsSize]}px, 1fr))`,
    },

    [theme.breakpoints.up('xs')]: {
        gridTemplateColumns: `repeat(auto-fill, minmax(${
            !isNavbarOpen
                ? `calc(${ItemsSizes[itemsSize]}px - ${theme.spacing(7.25)})`
                : `calc(${ItemsSizes[itemsSize]}px - ${theme.spacing(5.25)})`
        }, 1fr))`,
    },
});
