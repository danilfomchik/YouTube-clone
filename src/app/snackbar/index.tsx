'use client';

import React, {useCallback, useEffect, useState} from 'react';
import {useSnackbar} from 'notistack';
import {useSelector} from 'react-redux';
import IconButton from '@mui/material/IconButton';
import type {VariantType} from 'notistack';

import {hideMessage, removeMessage} from '../redux/snackbar/snackbarSlice';
import {useAppDispatch} from '../redux/store';
import {selectMessages} from '../redux/snackbar/selectors';

const Snackbar: React.FC = () => {
    const [displayed, setDisplayed] = useState<number[]>([]);

    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const messages = useSelector(selectMessages);
    const dispatch = useAppDispatch();

    const storeDisplayed = useCallback((id: number) => setDisplayed(prev => [...prev, id]), []);

    const removeDisplayed = useCallback((id: number) => setDisplayed(prev => prev.filter(key => id !== key)), []);

    useEffect(() => {
        messages.forEach((item: any) => {
            if (displayed.includes(item.id)) return;
            const message = item.message! as string;

            enqueueSnackbar(message, {
                preventDuplicate: true,
                key: item.id,
                variant: item.severity as VariantType,
                hideIconVariant: true,
                onClose: (event, reason, key) => {
                    if (reason === 'timeout' || reason === 'maxsnack') {
                        dispatch(hideMessage({id: key}));
                    }
                },
                onExited: (event, myKey) => {
                    dispatch(removeMessage(myKey));
                    removeDisplayed(Number(myKey));
                },
                action: () => <IconButton onClick={() => closeSnackbar(item.id)}>x</IconButton>,
            });

            storeDisplayed(item.id);
        });
    }, [messages, dispatch, enqueueSnackbar, closeSnackbar, displayed, storeDisplayed, removeDisplayed]);

    return null;
};

export default Snackbar;
