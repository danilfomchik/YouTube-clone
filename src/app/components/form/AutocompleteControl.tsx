import React, {useEffect, useRef, useState} from 'react';
import {
    Autocomplete,
    CircularProgress,
    Grid2,
    IconButton,
    InputAdornment,
    Typography,
    type TextFieldProps,
} from '@mui/material';
import {useController, useFormContext} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {get} from 'lodash';
import SearchIcon from '@mui/icons-material/Search';

import {IInputProps} from './InputControl';
import Input from '../inputs/Input';

type TAutocompleteOptions = string[];

interface IAutocompleteControlProps {
    options: TAutocompleteOptions;
    loading?: boolean;
}

const AutocompleteControl = ({
    control,
    name,
    defaultValue,
    options,
    loading,
    ...restProps
}: IAutocompleteControlProps & IInputProps & TextFieldProps) => {
    const inputRef = useRef<HTMLElement | null>(null);

    const {formState} = useFormContext();
    const {field} = useController({
        name,
        control,
        defaultValue,
    });

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isTransition, setIsTransition] = useState(false);

    const toggleAutocomplete = () => {
        setOpen(prev => !prev);
        setIsTransition(false);
    };

    const {errors} = formState;

    const errorProps = {
        error: Boolean(get(errors, name)),
        helperText: <ErrorMessage errors={errors as any} name={name} render={({message}) => message} />,
    };

    useEffect(() => {
        setValue(field.value);
    }, [field.value]);

    return (
        <Autocomplete
            open={open}
            freeSolo
            autoComplete
            blurOnSelect
            disableClearable={value === ''}
            onOpen={toggleAutocomplete}
            onClose={toggleAutocomplete}
            options={options}
            loading={loading}
            value={value}
            onTransitionEnd={() => setIsTransition(true)}
            onBlur={() => setOpen(false)}
            onChange={(e, value) => {
                const newValue = value || '';

                setValue(newValue);
                field.onChange(newValue);
            }}
            onInputChange={(event, value) => {
                setValue(value);
            }}
            renderInput={params => (
                <Input
                    {...params}
                    field={field}
                    onChange={field.onChange}
                    value={field.value}
                    name={name}
                    placeholder="Search"
                    variant="outlined"
                    inputRef={input => (inputRef.current = input)}
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            endAdornment: (
                                <InputAdornment position="end">
                                    {params.InputProps.endAdornment}

                                    {loading ? (
                                        <IconButton edge="end">
                                            <CircularProgress color="inherit" size={20} />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            edge="end"
                                            type="submit"
                                            onClick={e => {
                                                e.stopPropagation();

                                                if (open) {
                                                    toggleAutocomplete();
                                                    inputRef?.current?.blur();
                                                }
                                            }}>
                                            <SearchIcon />
                                        </IconButton>
                                    )}
                                </InputAdornment>
                            ),
                        },
                    }}
                    {...restProps}
                    {...errorProps}
                />
            )}
            renderOption={(props, option) => {
                return (
                    <li {...props} key={props.id}>
                        <Grid2 container alignItems="center" flexWrap="nowrap" gap={2}>
                            <SearchIcon />

                            <Typography variant="body1" mr={1}>
                                {option}
                            </Typography>
                        </Grid2>
                    </li>
                );
            }}
        />
    );
};

export default AutocompleteControl;
