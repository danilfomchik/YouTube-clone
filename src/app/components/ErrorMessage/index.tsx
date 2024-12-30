import React from 'react';
import {Divider, Grid2, Grid2Props, Typography} from '@mui/material';

import {IErrorMessageProps} from './types';

const ErrorMessage = ({status, message, ...restProps}: IErrorMessageProps & Grid2Props) => {
    return (
        <Grid2
            container
            alignItems="center"
            justifyContent="center"
            flexWrap="nowrap"
            gap={2}
            size={{xs: 12}}
            {...restProps}>
            <Typography variant="h5" color="inherit">
                {status}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" fontSize="1.25rem" color="inherit">
                {message}
            </Typography>
        </Grid2>
    );
};

export default ErrorMessage;
