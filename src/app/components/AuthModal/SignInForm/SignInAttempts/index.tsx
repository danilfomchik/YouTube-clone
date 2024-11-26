import React from 'react';
import {useSelector} from 'react-redux';
import {Alert} from '@mui/material';

import {selectLoginAttemptsTime} from '@/app/redux/auth/selectors';

const SignInAttempts = () => {
    const loginAttemptsTime = useSelector(selectLoginAttemptsTime);

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <Alert severity="error" variant="outlined">
            Too many failed login attempts. Please try again after {formatTime(loginAttemptsTime)}.
        </Alert>
    );
};

export default SignInAttempts;
