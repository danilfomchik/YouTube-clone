import { lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./app/navbar/Navbar";
import Header from "./app/header/Header";

import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/home/HomePage"));

function App() {
    return (
        <div className="App">
            <Header />

            <main>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    minHeight="100vh"
                    bg="#121214"
                >
                    <Navbar />

                    <Box className="main-content">
                        <Suspense fallback={<Spinner />}>
                            <Routes>
                                <Route index path="/" element={<HomePage />} />
                                {/* <Route path="/watch" element={<VideoPage />} />

                                <Route path="library" element={<Library />} />
                                <Route
                                    path="/shorts"
                                    element={
                                        <Box color="white">
                                            shorts, проверять видео на длину
                                            (должно быть меньше 60 сек)
                                        </Box>
                                    }
                                />
                                comment for render additional 404 page
                                <Route path="*" element={<Page404 />} />

                                comment for redirect to home page
                                comment <Route
                                    path="*"
                                    element={<Navigate to="/" replace />}
                                /> */}
                            </Routes>
                        </Suspense>
                    </Box>
                </Box>
            </main>
        </div>
    );
}

export default App;
