import React, {Suspense} from 'react';
import {Mulish} from 'next/font/google';

import ReduxProvider from './redux/redux-provider';
import Theme from './Theme';
import Loading from './loading';

import {MainContainer, Main} from './Styles';

const mulish = Mulish({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--mulish',
    display: 'swap',
});

type LocaleLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = async ({children}: LocaleLayoutProps) => {
    return (
        <html>
            <body suppressHydrationWarning={true} className={mulish.className}>
                <ReduxProvider>
                    <Theme>
                        <MainContainer>
                            <Suspense fallback={<Loading />}>
                                <Main>{children}</Main>
                            </Suspense>
                        </MainContainer>
                    </Theme>
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
