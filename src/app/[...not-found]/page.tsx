'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

import Button from '../components/Button';
import {BoxContainer, Title} from './Styles';

const Notfound = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <BoxContainer>
            <Title variant="h1">{'404'}</Title>
            <Button color="primary" onClick={handleGoBack}>
                {'go back'}
            </Button>
        </BoxContainer>
    );
};

export default Notfound;
