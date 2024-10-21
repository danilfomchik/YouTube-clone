'use client';

import React from 'react';

import {useAppDispatch} from '@/app/redux/store';
import MenuItem from '../../MenuItem';
import {TMenu} from '../../types';
import {handleMenuItemClick} from '../../utils';

const SettingsMenu = ({menuOptions, name}: TMenu) => {
    const dispatch = useAppDispatch();

    return (
        <>
            {menuOptions.map(item => {
                const {icon, text, hasNested} = item;

                return (
                    <MenuItem
                        key={text}
                        icon={icon}
                        text={text}
                        onClick={() => handleMenuItemClick({dispatch, item, name})}
                        hasNested={hasNested}
                    />
                );
            })}
        </>
    );
};

export default SettingsMenu;
