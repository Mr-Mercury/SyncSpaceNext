'use client';

import clsx from "clsx";
import { La_Belle_Aurore } from "next/font/google";
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

export default function Input(props:InputProps): JSX.Element {

    const {label, id, type, required, register, errors, disabled} = props; 

    return (
        <div>
            <label htmlFor={id}
                className='
                  block
                  text-sm
                  font-medium
                  leading-6
                  text-slate-50
                '
            >
                {label}
            </label>
        </div>
    )
}