'use client';

import React from 'react';

import MenuItem from '../../MenuItem';

export const languages = [
    {
        text: 'English',
    },
    {
        text: 'Ukrainian',
    },
];

const LanguageMenu = () => {
    return (
        <>
            {languages.map(({text}) => (
                <MenuItem key={text} text={text} hasNested={false} />
            ))}
        </>
    );
};

export default LanguageMenu;
