import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    color?: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    minWidth?: string;
}

export type StartIconButton = {
    startIcon?: React.ReactNode;
    endIcon?: never;
};

export type EndIconButton = {
    endIcon?: React.ReactNode;
    startIcon?: never;
};

export type ConditionalButtonProps = StartIconButton | EndIconButton;

export type CustomButtonProps = ButtonProps & ConditionalButtonProps;
