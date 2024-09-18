'use client';

import React from 'react';

import Button from '../components/Button';

import {BoxContainer, Title} from './Styles';

const Notfound = () => {
    return (
        <BoxContainer>
            <Title variant="h1">{'404'}</Title>
            <Button color="primary" href={'/'}>
                {'go back'}
            </Button>
        </BoxContainer>
    );
};

export default Notfound;
