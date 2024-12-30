'use client';

import React from 'react';

import MenuItem from '../../MenuItem';

export const themes = [
    {
        text: 'Light',
    },
    {
        text: 'Dark',
    },
    {
        text: 'System',
    },
];

const ThemeMenu = () => {
    return (
        <>
            {themes.map(({text}) => (
                <MenuItem key={text} text={text} hasNested={false} />
            ))}
        </>
    );
};

export default ThemeMenu;
