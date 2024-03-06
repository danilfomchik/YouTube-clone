import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useAppSelector } from "../../hooks";

import CategoriesFilter from "./categories-filter/CategoriesFilter";
import VideosList from "./videos-list/VideosList";

import { selectSearchValue } from "../../app/header/search/searchSlice";

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchValue = useAppSelector(selectSearchValue);
    // const currentCategory = useAppSelector(
    //     (state) => state.categories.currentCategory
    // );

    useEffect(() => {
        const searchParam = searchValue
            ? { searchQuery: searchValue }
            : undefined;

        // const params = {
        //     categoryId: currentCategory,
        //     ...searchParam,
        // };

        // setSearchParams(params, { replace: true });
        // }, [searchValue, currentCategory]);
    }, [searchValue]);

    return (
        <>
            <CategoriesFilter />
            <section>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <VideosList />
                </ErrorBoundary>
            </section>
        </>
    );
};

export default HomePage;

// при клике на главную иконку перебрасывать на начальную страницу сбрасывая все фильтры и тд.

// настроить навигацию. например когда кникаю на стрелку назад должен показываться предыдущий урл

// Адаптив делать гридами: grid-template-areas

// ---------------------
// создать компонент ошибки (для эрор баундери, ошибок и тд)

// Для удаление, добавления и получения плейлиста с видео использовать ртк квери
// Написать тесты
