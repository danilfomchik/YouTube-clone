import React from 'react';
import {Grid2} from '@mui/material';

type Props = {
    children: React.ReactNode;
};

const LibraryPageLayout = ({children}: Props) => {
    return (
        <Grid2 container justifyContent="center">
            <Grid2 size={12}>{children}</Grid2>
        </Grid2>
    );
};

export default LibraryPageLayout;
