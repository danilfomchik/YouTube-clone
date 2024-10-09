'use client';

import React from 'react';

import ReturnBack from '../../ReturnBack';
import MenuItem from '../../MenuItem';
import {TMenu} from '../../types';

const ThemeMenu = ({menuOptions}: TMenu) => {
    return (
        <>
            <ReturnBack />

            {menuOptions.map(({text, hasNested}) => (
                <MenuItem key={text} text={text} hasNested={hasNested} />
            ))}
        </>
    );
};

export default ThemeMenu;
