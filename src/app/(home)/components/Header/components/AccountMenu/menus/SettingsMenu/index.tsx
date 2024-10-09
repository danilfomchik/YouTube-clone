'use client';

import React from 'react';

import ReturnBack from '../../ReturnBack';
import {useAppDispatch} from '@/app/redux/store';
import MenuItem from '../../MenuItem';
import {TMenu} from '../../types';
import {handleMenuItemClick} from '../../utils';

const SettingsMenu = ({menuOptions}: TMenu) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <ReturnBack />

            {menuOptions.map(item => {
                const {icon, text, hasNested} = item;

                return (
                    <MenuItem
                        key={text}
                        icon={icon}
                        text={text}
                        onClick={() => handleMenuItemClick(dispatch, item)}
                        hasNested={hasNested}
                    />
                );
            })}
        </>
    );
};

export default SettingsMenu;
