import {waitFor} from '@testing-library/react';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

import {renderWithProviders} from '@/app/tests/utils';
import {
    emptySearchQuery,
    mockedCategories,
    mockedSearchVideosList,
    mockedVideosByCategory,
    mockedVideosList,
    searchQuery,
} from './mocks';
import Main from '../page';

describe('MainPage component', () => {
    it('should render video items', async () => {
        const {queryAllByTestId, getAllByTestId, getByTestId} = renderWithProviders(<Main />);

        await waitFor(() => {
            expect(queryAllByTestId('Video item skeleton').length).toBe(0);
        });

        expect(getAllByTestId(/card link/i).length).toBe(mockedVideosList.items.length);

        for (const video of mockedVideosList.items) {
            const videoItemCardLink = getByTestId(`Video ${video.id} card link`);
            expect(videoItemCardLink).toBeInTheDocument();
            // TODO: change href after adding Video Page
            expect(videoItemCardLink).toHaveAttribute('href', `https://www.youtube.com/watch?v=${video.id}`);
        }
    });

    it('should render video items by search query', async () => {
        mockRouter.push(`/?search_query=${searchQuery}`);

        const {queryAllByTestId, getAllByTestId, getByTestId} = renderWithProviders(<Main />);

        await waitFor(() => {
            expect(queryAllByTestId('Video item skeleton').length).toBe(0);
        });

        expect(getAllByTestId(/card link/i).length).toBe(mockedSearchVideosList.items.length);

        for (const video of mockedSearchVideosList.items) {
            const videoItemCardLink = getByTestId(`Video ${video.id.videoId} card link`);
            expect(videoItemCardLink).toBeInTheDocument();
            // TODO: change href after adding Video Page
            expect(videoItemCardLink).toHaveAttribute('href', `https://www.youtube.com/watch?v=${video.id.videoId}`);
        }
    });

    it('should render message if the search response returns empty list', async () => {
        mockRouter.push(`/?search_query=${emptySearchQuery}`);

        const {queryAllByTestId, getByText, getByRole} = renderWithProviders(<Main />);

        await waitFor(() => {
            expect(queryAllByTestId('Video item skeleton').length).toBe(0);
        });

        expect(
            getByRole('heading', {
                name: /oops!/i,
            }),
        ).toBeInTheDocument();

        expect(getByText(/nothing to show/i)).toBeInTheDocument();
    });

    it('should render message if the search response returns error', async () => {
        mockRouter.push(`/?search_query=ssd`);

        const {queryAllByTestId, getByText, getByRole} = renderWithProviders(<Main />);

        await waitFor(() => {
            expect(queryAllByTestId('Video item skeleton').length).toBe(0);
        });

        expect(
            getByRole('heading', {
                name: /oops!/i,
            }),
        ).toBeInTheDocument();

        expect(getByText(/something went wrong/i)).toBeInTheDocument();
    });

    it('should render video items by category', async () => {
        const {queryAllByTestId, getByRole, getAllByTestId, getByTestId} = renderWithProviders(<Main />);

        await waitFor(() => {
            expect(queryAllByTestId('Video item skeleton').length).toBe(0);
        });

        const categoryItem = getByRole('tab', {
            name: mockedCategories[0].snippet.title,
        });

        await userEvent.click(categoryItem);

        expect(getAllByTestId(/card link/i).length).toBe(mockedVideosByCategory.items.length);

        for (const video of mockedVideosByCategory.items) {
            const videoItemCardLink = getByTestId(`Video ${video.id.videoId} card link`);
            expect(videoItemCardLink).toBeInTheDocument();
            // TODO: change href after adding Video Page
            expect(videoItemCardLink).toHaveAttribute('href', `https://www.youtube.com/watch?v=${video.id.videoId}`);
        }
    });
});
