import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Tab} from '@mui/material';

import {selectCategories, selectCurrentCategoryIndex} from '@/app/redux/categories/selectors';
import {selectNavbarStatus} from '@/app/redux/navbar/selectors';
import {TabsWrapper} from './Styles';
import {useAppDispatch} from '@/app/redux/store';
import {changeCurrentCategory, clearCategoriesData} from '@/app/redux/categories/categoriesSlice';
import {initialCategory} from '@/app/services/constants';

const Categories = () => {
    const dispatch = useAppDispatch();
    const categories = useSelector(selectCategories);
    const currentCategoryIndex = useSelector(selectCurrentCategoryIndex);
    const isNavbarOpen = useSelector(selectNavbarStatus);

    const handleCategoryChange = (event: React.SyntheticEvent, newCategoryIndex: number) => {
        const categoryId = newCategoryIndex > 0 ? categories[newCategoryIndex - 1].id : initialCategory;

        dispatch(changeCurrentCategory({categoryIndex: newCategoryIndex, categoryId}));
    };

    useEffect(() => {
        return () => {
            dispatch(clearCategoriesData());
        };
    }, [dispatch]);

    return (
        <TabsWrapper
            value={categories.length > 0 ? currentCategoryIndex : 0}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            isNavbarOpen={isNavbarOpen}>
            <Tab label="All" />
            {categories?.map(category => <Tab key={category.id} label={category.snippet.title} />)}
        </TabsWrapper>
    );
};

export default Categories;
