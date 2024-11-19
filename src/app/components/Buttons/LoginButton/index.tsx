import {Typography, ButtonProps} from '@mui/material';

import Button from '..';
import {AuthSearchParamsValues, LoginButtonProps} from './types';
import {StartIconButton} from '../types';
import AuthModal from '../../AuthModal';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys} from '@/app/services/types';

const LoginButton = ({open, startIcon, ...restProps}: LoginButtonProps & StartIconButton & ButtonProps) => {
    const {addParams} = useChangeParams();

    const openAuthModal = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
    };

    return (
        <>
            <Button
                open={open}
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
