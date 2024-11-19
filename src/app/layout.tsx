'use client';

import React, {Suspense} from 'react';
import {Mulish} from 'next/font/google';
import dynamic from 'next/dynamic';

import ReduxProvider from './redux/redux-provider';
import Theme from './Theme';
import Loading from './loading';
import {MainContainer, Main} from './Styles';

const AuthProvider = dynamic(() => import('./AuthProvider'), {ssr: false});

const mulish = Mulish({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--mulish',
    display: 'swap',
});

type LocaleLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = ({children}: LocaleLayoutProps) => {
    return (
        <html>
            <body suppressHydrationWarning={true} className={mulish.className}>
                <ReduxProvider>
                    <Theme>
                        <AuthProvider>
                            <MainContainer>
                                <Suspense fallback={<Loading />}>
                                    <Main>{children}</Main>
                                </Suspense>
                            </MainContainer>
                        </AuthProvider>
                    </Theme>
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
