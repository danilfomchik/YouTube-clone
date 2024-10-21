'use client';

import React from 'react';

import MenuItem from '../../MenuItem';
import {TMenu} from '../../types';

const ThemeMenu = ({menuOptions}: TMenu) => {
    return (
        <>
            {menuOptions.map(({text, hasNested}) => (
                <MenuItem key={text} text={text} hasNested={hasNested} />
            ))}
        </>
    );
};

export default ThemeMenu;
