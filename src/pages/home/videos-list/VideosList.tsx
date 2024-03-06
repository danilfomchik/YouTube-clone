import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box } from "@chakra-ui/react";

// import VideosListItem from "../videosListItem/VideosListItem";
// import VideoDescription from "../videosListItem/VideoDescription";

import Portal from "../../../components/Portal";
import StatusMessage from "../../../components/StatusMessage";

// import { videosCount } from "../../utils/constants";
// import { scrollToTop } from "../../utils/helpers";

// в будующем оптимизировать этот момент
// import {
// fetchVideos,
// resetVideosList,
// videosSelector,
// } from "../../pages/home/videosSlice";

// import skeletonList from "../../components/skeleton/skeletonList";

import "./videos-list.scss";

const VideosList = () => {
    const dispatch = useAppDispatch();

    // filtered videos (more then 60sec)
    // const videos = useAppSelector(videosSelector);

    // general list of videos
    // const videos = useSelector((state) => state.videos.videos);

    // const videosFetchStatus = useAppSelector(
    //     (state) => state.videos.videosFetchStatus
    // );
    // const nextPageToken = useAppSelector((state) => state.videos.nextPageToken);
    // const currentCategory = useAppSelector(
    //     (state) => state.categories.currentCategory
    // );

    // const searchValue = useAppSelector((state) => state.search.searchValue);

    // useEffect(() => {
    //     scrollToTop(wrapperRef);

    //     dispatch(fetchVideos({ nextPageToken, currentCategory, searchValue }));

    //     return () => dispatch(resetVideosList());
    // }, [currentCategory, searchValue]);

    const itemRefs = useRef([]);
    const wrapperRef = useRef(null);

    return (
        <>
            <div className="wrapper-ref" ref={wrapperRef}></div>
            {/* <InfiniteScroll
                loader={null}
                dataLength={videos.length}
                next={() =>
                    dispatch(
                        fetchVideos({
                            nextPageToken,
                            currentCategory,
                            searchValue,
                        })
                    )
                }
                hasMore={nextPageToken ? true : false}
                scrollThreshold={0.95}
            > */}
            <Box className="videos-list">
                {/* {nextPageToken === "" &&
                    videos.length < videosCount &&
                    skeletonList}

                {videos.length === 0 && videosFetchStatus === "idle" ? (
                    <p style={{ color: "#ffffff" }}>Nothing to show...</p>
                ) : (
                    <TransitionGroup component={null} appear={true}>
                        {videos.map((video, index) => (
                            <CSSTransition
                                nodeRef={itemRefs.current[index + 1]}
                                key={index}
                                timeout={900}
                                mountOnEnter={true}
                                classNames="item"
                            >
                                <VideosListItem
                                    key={index}
                                    video={video}
                                    VideoDescription={VideoDescription}
                                    type=""
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )} */}
            </Box>
            {/* </InfiniteScroll> */}
            {/* {videosFetchStatus !== "idle" && (
                <Portal>
                    <StatusMessage status={videosFetchStatus} />
                </Portal>
            )} */}
            <Portal>
                <StatusMessage status={"loading"} />
            </Portal>
        </>
    );
};

export default VideosList;
