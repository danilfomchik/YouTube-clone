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
import {selectUserLocation} from '../redux/auth/selectors';

const Main = () => {
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const userLocation = useSelector(selectUserLocation);
    const searchQuery = searchParams.get(SearchParamsKeys.searchKey) || '';

    const loadVideosList = useCallback(
        ({nextPageToken}: {nextPageToken: string}) => {
            dispatch(onLoadVideosList({nextPageToken, searchValue: searchQuery, regionCode: userLocation}));
        },
        [dispatch, searchQuery, userLocation],
    );

    useEffect(() => {
        loadVideosList({nextPageToken: ''});

        return () => {
            dispatch(resetSlice());
        };
    }, [dispatch, loadVideosList]);

    return (
        <Grid2 container flexDirection="column" alignItems="flex-start" spacing={2}>
            <VideosList loadVideosList={loadVideosList} />
        </Grid2>
    );
};

export default Main;
