'use client';

import React, {useEffect} from 'react';
import {Grid2} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {validation, defaultValues} from './form';
import Suggestions from './Suggestions';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys} from '@/app/services/types';

const Search = () => {
    const {searchParams, addParams, deleteParams} = useChangeParams();

    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onSubmit',
    });

    const {control, handleSubmit, watch, setValue} = methods;

    const searchValue = watch('search') || '';
    const searchQuery = searchParams.get(SearchParamsKeys.searchKey);

    useEffect(() => {
        if (searchQuery) {
            setValue('search', searchQuery);
        }
    }, [searchQuery, setValue]);

    const onSubmit = () => {
        if (searchValue) {
            addParams([SearchParamsKeys.searchKey, searchValue]);
        } else {
            deleteParams(SearchParamsKeys.searchKey);
        }
    };

    return (
        <FormProvider {...methods}>
            <Grid2 container flexGrow={1} justifyContent="center">
                <form onSubmit={handleSubmit(onSubmit)} data-testid="Search form">
                    <Suggestions control={control} searchValue={searchValue} />
                </form>
            </Grid2>
        </FormProvider>
    );
};

export default Search;
