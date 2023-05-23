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
            <div className='mt-2'>
                <input id={id} type={type} disabled={disabled} 
                {...register(id, { required })} 
                className={clsx('form-input block w-full rounded-md bg-slate-600  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-slate-50 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6')} />
            </div>
        </div>
    )
}