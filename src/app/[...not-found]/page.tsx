'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

import Button from '../components/Buttons';
import {BoxContainer} from './Styles';
import ErrorMessage from '../components/ErrorMessage';

const Notfound = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <BoxContainer>
            <ErrorMessage status="404" message="Page not found" mb={3} />
            <Button color="primary" onClick={handleGoBack}>
                {'go back'}
            </Button>
        </BoxContainer>
    );
};

export default Notfound;
