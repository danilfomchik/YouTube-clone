import React, {ChangeEvent, useCallback, useMemo, useRef} from 'react';
import type {TextFieldProps} from '@mui/material';
import {Grid2, TextField, Typography, useMediaQuery, useTheme} from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {filesize} from 'filesize';

import {IInputProps} from './types';
import Button from '../Buttons';

const FileInput = ({
    field,
    label,
    onChange,
    type,
    accept = '*',
    children,
    ...textFieldProps
}: IInputProps & TextFieldProps) => {
    const inputFileRef = useRef<HTMLInputElement | null>(null);
    const fileSize = useMemo(() => filesize(field?.value.size || 0, {standard: 'jedec'}), [field?.value.size]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const file = (e.currentTarget as HTMLInputElement).files?.[0];

            if (onChange) {
                onChange(e);
            }

            if (field?.onChange) {
                if (file) {
                    field.onChange(file);
                }
            }
        },
        [field, onChange],
    );

    return (
        <Grid2
            container
            gap={1}
            alignItems={isMobile ? 'stretch' : 'center'}
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            flexDirection={isMobile ? 'column' : 'row'}>
            <Button
                color="secondary"
                onClick={() => {
                    inputFileRef.current?.click();

                    if (inputFileRef.current) {
                        inputFileRef.current.value = '';
                    }
                }}
                startIcon={<FileUploadOutlinedIcon />}>
                {children}
                <TextField
                    {...field}
                    onChange={handleChange}
                    variant="standard"
                    label={label}
                    value={undefined}
                    color="secondary"
                    type={type}
                    inputRef={inputFileRef}
                    slotProps={{
                        htmlInput: {
                            accept,
                        },
                    }}
                    sx={{display: 'none'}}
                    {...textFieldProps}
                />
            </Button>
            <Typography variant="caption" textAlign={isMobile ? 'center' : 'left'}>
                {field?.value.size > 0 ? fileSize : null}
            </Typography>
        </Grid2>
    );
};

export default FileInput;
