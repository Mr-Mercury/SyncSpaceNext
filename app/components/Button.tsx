'use client';

import cslx, { clsx } from 'clsx';
import { type } from 'os';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

export default function Button(props: ButtonProps): JSX.Element {
    const { type, fullWidth, children, onClick, secondary, danger, disabled } = props;

    return (
        <div>
            <button
                onClick={onClick}
                type={type}
                disabled={disabled}
                className={clsx('flex justify-center rounded-md px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', 
                disabled && 'opacity-50 cursor-default',
                fullWidth && 'w-full',
                secondary ? 'text-slate-50' : 'text-slate-900',
                danger && 'bg-red-500 hover:bg-red-600 focus-visible:outline-red-600',
                !secondary && !danger && 'bg-slate-200 hover:bg-slate-300 focus-visible:outline-slate-300')}>
                {children}
            </button>
        </div>
    )
}