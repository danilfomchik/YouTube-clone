import { useEffect, useRef, useTransition } from "react";
// import { useAppSelector, useAppDispatch } from "../../../hooks";
import { Box, Tooltip } from "@chakra-ui/react";

import useScrollOnDrag from "react-scroll-ondrag";

// import { enableHorizontalScroll } from "../../../utils/helpers";

// import { fetchCategories, changeCurrentCategory } from "./categoriesSlice";

// import { resetSearchValue } from "../../../app/header/search/searchSlice";

import "./categories-filter.scss";

const CategoriesFilter = () => {
    // const [isPending, startTransition] = useTransition();
    // const dispatch = useAppDispatch();

    // const categories = useAppSelector((state) => state.categories.categories);
    // const currentCategory = useAppSelector(
    //     (state) => state.categories.currentCategory
    // );

    // useEffect(() => {
    //     if (categories.length === 0) {
    //         dispatch(fetchCategories());
    //     }

    //     enableHorizontalScroll(containerRef);

    //     // return () => dispatch(changeCurrentCategory("0"));
    // }, []);

    // const onCategoryChange = (newCategory) => {
    //     dispatch(resetSearchValue());
    //     startTransition(() => {
    //         dispatch(changeCurrentCategory(newCategory));
    //     });
    // };

    const containerRef = useRef(null);

    const { events } = useScrollOnDrag(containerRef);

    return (
        <section>
            <Box className="categories-filter__wrapper">
                <Box
                    className="categories-filter__inner"
                    ref={containerRef}
                    {...events}
                >
                    <Tooltip label="All" bg="#6B7280" color="#ffffff">
                        <Box
                            // className={`categories-filter__item${
                            //     currentCategory === "0" ? " active" : ""
                            // }`}
                            className={"categories-filter__item"}
                            // onClick={() => onCategoryChange("0")}
                        >
                            <span>All</span>
                        </Box>
                    </Tooltip>

                    {/* {categories.map((category) => {
                        const {
                            id,
                            snippet: { title },
                        } = category;

                        return (
                            <Tooltip
                                key={id}
                                label={title}
                                bg="#6B7280"
                                color="#ffffff"
                            >
                                <Box
                                    className={`categories-filter__item${
                                        currentCategory === category.id
                                            ? " active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        onCategoryChange(category.id)
                                    }
                                >
                                    <span>{title}</span>
                                </Box>
                            </Tooltip>
                        );
                    })} */}
                </Box>
            </Box>
        </section>
    );
};

export default CategoriesFilter;
