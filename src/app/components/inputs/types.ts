import React, {ChangeEvent} from 'react';
import {ControllerRenderProps, FieldValues} from 'react-hook-form';

export interface IInputProps {
    field?: ControllerRenderProps<FieldValues, string>;
    value?: any;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    isInt?: boolean;
    defaultValue?: string | undefined;
}

export interface IInputEndAdornmentProps {
    children: React.ReactNode;
}

export interface IPhoneProps {
    type?: 'text' | 'tel' | 'password';
}
