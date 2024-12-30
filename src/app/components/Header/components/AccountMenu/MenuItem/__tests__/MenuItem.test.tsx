import userEvent from '@testing-library/user-event';
import LabelIcon from '@mui/icons-material/Label';

import {renderWithProviders} from '@/app/tests/utils';
import MenuItem from '..';

describe('MenuItem component', () => {
    it('should render MenuItem', () => {
        const {getByRole} = renderWithProviders(<MenuItem text={'Menu item text'} />);

        expect(
            getByRole('menuitem', {
                name: /menu item text/i,
            }),
        ).toBeInTheDocument();
    });

    it('should render MenuItem with icon', () => {
        const {getByTestId} = renderWithProviders(<MenuItem text={'Menu item text'} icon={<LabelIcon />} />);

        expect(getByTestId('LabelIcon')).toBeInTheDocument();
    });

    it('should render MenuItem with nested menu', () => {
        const {getByTestId} = renderWithProviders(<MenuItem text={'Menu item text'} hasNested={true} />);

        expect(getByTestId('ArrowForwardIosRoundedIcon')).toBeInTheDocument();
    });

    it('should change current menu by clicking on menu item', async () => {
        const onClickFunction = vi.fn();

        const {getByRole} = renderWithProviders(<MenuItem text={'Menu item text'} onClick={onClickFunction} />);

        await userEvent.click(
            getByRole('menuitem', {
                name: /menu item text/i,
            }),
        );

        expect(onClickFunction).toHaveBeenCalledTimes(1);
    });
});
