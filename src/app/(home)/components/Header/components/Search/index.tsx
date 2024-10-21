import React, {useCallback, useEffect} from 'react';
import {Grid2} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRouter, useSearchParams} from 'next/navigation';

import {validation, defaultValues} from './form';
import Suggestions from './Suggestions';

const Search = () => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onSubmit',
    });

    const {control, handleSubmit, watch, setValue} = methods;

    const searchValue = watch('search');
    const searchQuery = searchParams.get('search_query');

    const handleSearch = useCallback(
        (query: string) => {
            const params = new URLSearchParams(searchParams as unknown as string);

            if (query) {
                params.set('search_query', query);
            } else {
                params.delete('search_query');
            }

            replace(`/?${params.toString()}`);
        },
        [replace, searchParams],
    );

    useEffect(() => {
        if (searchQuery) {
            setValue('search', searchQuery);
        }
    }, [searchQuery, setValue]);

    const onSubmit = () => {
        handleSearch(searchValue);
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
