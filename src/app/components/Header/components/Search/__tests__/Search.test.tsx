import {waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import {renderWithProviders} from '@/app/tests/utils';
import Search from '..';
import {searchQuery, searchQueryMock} from '@/app/redux/suggestions/__test__/mswHandlers';

describe('Search component', () => {
    it(`should render all elements`, async () => {
        const {getByRole, getByTestId} = renderWithProviders(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.click(combobox);

        const searchButton = getByTestId('SearchIcon');

        expect((combobox as HTMLInputElement).value).toBe('');
        expect(searchButton).toBeInTheDocument();
    });

    it(`should change input value`, async () => {
        const {getByRole, getByTestId} = renderWithProviders(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, searchQuery);

        const clearButton = getByTestId('CloseIcon');

        expect(clearButton).toBeDefined();
        expect((combobox as HTMLInputElement).value).toBe(searchQuery);
    });

    it(`should change input value by clicking on option`, async () => {
        mockRouter.push(`/?search_query=${searchQuery}`);

        const {getByRole} = renderWithProviders(<Search />);
        await userEvent.click(getByRole('combobox'));

        const listbox = getByRole('listbox');
        const firstOption = within(listbox).getAllByRole('option')[0];
        await userEvent.click(firstOption);

        expect((getByRole('combobox') as HTMLInputElement).value).toBe(firstOption.textContent);
    });

    it(`should clear input value by clicking on clear button`, async () => {
        mockRouter.push(`/?search_query=${searchQuery}`);

        const {getByRole, getByTestId} = renderWithProviders(<Search />);

        const clearButton = getByTestId('CloseIcon');
        await userEvent.click(clearButton);

        expect((getByRole('combobox') as HTMLInputElement).value).toBe('');
    });

    it(`should render list of options if input has value`, async () => {
        mockRouter.push(`/?search_query=${searchQuery}`);

        const {getByRole} = renderWithProviders(<Search />);
        await userEvent.click(getByRole('combobox'));

        const listbox = getByRole('listbox');
        const options = within(listbox).getAllByRole('option');

        expect(options.length).toBe(searchQueryMock[1].length);

        for (const suggestion of searchQueryMock[1]) {
            expect(getByRole('option', {name: suggestion})).toBeDefined();
        }
    });

    it(`should not render list of options`, async () => {
        const {getByRole, queryByRole, getByTestId} = renderWithProviders(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, 'not correct search value');

        const listbox = queryByRole('listbox');
        const clearButton = getByTestId('CloseIcon');

        expect(clearButton).toBeDefined();
        expect(listbox).toBeNull();
    });

    it(`should clear options by clicking clear button`, async () => {
        mockRouter.push(`/?search_query=${searchQuery}`);

        const {queryByRole, getByTestId} = renderWithProviders(<Search />);

        const clearButton = getByTestId('CloseIcon');
        await userEvent.click(clearButton);

        await waitFor(() => {
            expect(queryByRole('listbox')).toBeNull();
        });
    });

    it(`should submit form with value by clicking on search button`, async () => {
        const {getByRole, getByTestId} = renderWithProviders(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, searchQuery);

        const searchButton = getByTestId('Search submit');
        await userEvent.click(searchButton);

        expect(mockRouter.asPath).toBe(`/?search_query=${searchQuery}`);
    });

    it(`should submit form without value by clicking on search button`, async () => {
        mockRouter.push(`/?search_query=${searchQuery}`);

        const {getByTestId} = renderWithProviders(<Search />);

        const clearButton = getByTestId('CloseIcon');
        await userEvent.click(clearButton);

        const searchButton = getByTestId('Search submit');
        await userEvent.click(searchButton);

        expect(mockRouter.asPath).toBe(`/`);
    });
});
