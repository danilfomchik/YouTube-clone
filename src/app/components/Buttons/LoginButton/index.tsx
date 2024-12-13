import {Typography, ButtonProps} from '@mui/material';
import {useSelector} from 'react-redux';

import Button from '..';
import {LoginButtonProps} from './types';
import {StartIconButton} from '../types';
import AuthModal from '../../AuthModal';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys, AuthSearchParamsValues} from '@/app/services/types';
import {selectNavbarStatus} from '@/app/redux/navbar/selectors';

const LoginButton = ({startIcon, ...restProps}: LoginButtonProps & StartIconButton & ButtonProps) => {
    const isNavbarOpen = useSelector(selectNavbarStatus);
    const {addParams} = useChangeParams();

    const openAuthModal = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
    };

    return (
        <>
            <Button
                open={isNavbarOpen}
                fullWidth
                variant="outlined"
                color="secondary"
                startIcon={startIcon}
                onClick={openAuthModal}
                {...restProps}>
                <Typography variant="body1">Log in</Typography>
            </Button>
            <AuthModal />
        </>
    );
};

export default LoginButton;
