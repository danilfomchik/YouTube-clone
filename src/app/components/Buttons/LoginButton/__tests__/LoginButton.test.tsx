import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {renderWithProvider} from '@/app/test-utils';
import LoginButton from '..';

describe('LoginButton component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should open Auth modal', async () => {
        const {getByRole, queryByRole} = renderWithProvider(<LoginButton />);

        expect(queryByRole('dialog')).toBeNull();

        const logInButton = getByRole('button', {
            name: /log in/i,
        });

        await userEvent.click(logInButton);

        expect(getByRole('dialog')).toBeDefined();
    });
});
