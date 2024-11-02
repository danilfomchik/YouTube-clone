'use client';

import React from 'react';

import MenuItem from '../../MenuItem';

const themes = [
    {
        text: 'Dark',
    },
    {
        text: 'Light',
    },
    {
        text: 'Device',
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
