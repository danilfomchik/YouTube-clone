'use client';

import React from 'react';

import MenuItem from '../../MenuItem';

const languages = [
    {
        text: 'English',
    },
    {
        text: 'Ukrainian',
    },
    {
        text: 'Italian',
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
