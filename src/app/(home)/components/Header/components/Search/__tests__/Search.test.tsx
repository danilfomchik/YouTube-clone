import {describe, it, expect, afterEach, vi, test} from 'vitest';
import {cleanup, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {renderWithProvider} from '@/app/test-utils';
import Search from '..';
import {mock, query} from '@/app/mocks/handlers';

describe('Search component', () => {
    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
        vi.resetAllMocks();
    });

    it(`should render without options`, async () => {
        const {getByRole, queryByRole, queryByTestId} = renderWithProvider(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.click(combobox);

        expect((combobox as HTMLInputElement).value).toBe('');
        expect(queryByRole('listbox')).toBeNull();
        expect(queryByTestId('CloseIcon')).toBeNull();
    });

    it(`should render with options`, async () => {
        const {getByRole, queryByRole, queryByTestId, getByText} = renderWithProvider(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, query);

        expect((combobox as HTMLInputElement).value).toBe(query);

        const listbox = queryByRole('listbox');
        const closeButton = queryByTestId('CloseIcon');

        expect(listbox).toBeDefined();
        expect(closeButton).toBeDefined();

        for (const suggestion of mock[1] as string[]) {
            expect(getByText(suggestion)).toBeDefined();
        }
    });

    it(`should clear options by clicking clear button`, async () => {
        const {getByRole, queryByRole, queryByTestId} = renderWithProvider(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, query);

        const closeButton = queryByTestId('CloseIcon');
        await userEvent.click(closeButton as Element);

        const listbox = queryByRole('listbox');

        await waitFor(() => {
            expect((combobox as HTMLInputElement).value).toBe('');
            expect(listbox).toBeNull();
        });
    });

    it(`should change input value by clicking on option`, async () => {
        const {getByRole, queryByRole} = renderWithProvider(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, query);

        const listbox = queryByRole('listbox');
        const optionsList = within(listbox as HTMLElement).queryAllByRole('option');
        const firstOption = optionsList[0];

        await userEvent.click(firstOption);

        expect((combobox as HTMLInputElement).value).toBe(firstOption.textContent);
    });

    it(`should submit form by clicking on search button`, async () => {
        const handleOnSubmitMock = vi.fn();

        const {getByRole, getByTestId} = renderWithProvider(<Search />);

        const combobox = getByRole('combobox');
        await userEvent.type(combobox, query);

        const searchButton = getByTestId('Search submit');
        const searchForm = getByTestId('Search form');

        searchForm.onsubmit = handleOnSubmitMock;

        await userEvent.click(searchButton);

        expect(handleOnSubmitMock).toHaveBeenCalled();
    });

    test.todo('add test for not submitting form');
});
