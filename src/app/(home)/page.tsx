'use client';

import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useSearchParams} from 'next/navigation';
import {Grid2} from '@mui/material';

import VideosList from './components/VideosList';
import {onLoadVideosList} from '../redux/videosList/thunks';
import {SearchParamsKeys} from '../services/types';
import {useAppDispatch} from '../redux/store';
import {resetSlice} from '../redux/videosList/videosListSlice';
import {selectCurrentCategory} from '../redux/categories/selectors';
import {onLoadCategoriesList} from '../redux/categories/thunks';
import {selectUserLocation} from '../redux/auth/selectors';
import Categories from './components/Categories';

const Main = () => {
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const userLocation = useSelector(selectUserLocation);
    const currentCategory = useSelector(selectCurrentCategory);
    const searchQuery = searchParams.get(SearchParamsKeys.searchKey) || '';

    const loadVideosList = useCallback(
        ({nextPageToken}: {nextPageToken: string}) => {
            dispatch(
                onLoadVideosList({nextPageToken, searchValue: searchQuery, regionCode: userLocation, currentCategory}),
            );
        },
        [dispatch, searchQuery, userLocation, currentCategory],
    );

    const loadCategoriesList = useCallback(() => {
        dispatch(onLoadCategoriesList({regionCode: userLocation}));
    }, [dispatch, userLocation]);

    useEffect(() => {
        loadVideosList({nextPageToken: ''});

        return () => {
            dispatch(resetSlice());
        };
    }, [dispatch, loadVideosList]);

    useEffect(() => {
        loadCategoriesList();
    }, [loadCategoriesList]);

    return (
        <Grid2 container flexDirection="column" alignItems="flex-start" spacing={0}>
            <Categories />
            <VideosList loadVideosList={loadVideosList} />
        </Grid2>
    );
};

export default Main;
