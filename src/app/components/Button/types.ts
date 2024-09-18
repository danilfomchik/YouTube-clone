import React from 'react';

export interface CustomButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    color: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    minWidth?: string;
}
