'use client';
// Bad for server component testing due to high interactivity
import { useCallback, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
// I don't know why vscode is erroring this out
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';

type Option = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
    const [option, setOption] = useState<Option>('LOGIN'); 
    const [loading, setLoading] = useState(false);

    const toggleOption = useCallback(() => {
        if (option === 'LOGIN') {
            setOption('REGISTER');
        } else {
            setOption('LOGIN');
        }
    },[option]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);

        if (option === 'REGISTER') {
            // fetch register
        }
        if (option === 'LOGIN') {
            // NextAuth signin.  
        }

        function oAuthAction(action: string) {
            setLoading(true);

            //nextAuth socials signin
        } 
    }

    return (
        <div
          className="
              mt-8
              w-full
              mx-auto
              lg:w-1/2
              sm:w-3/4
              lg:max-w-screen-lg
            "
        >
            <div
              className="
               bg-zinc-800
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            "
            >
                <form
                    className='space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                  {option === 'REGISTER' && (
                    <Input id='name' label='Name' register={register} errors={errors}/>
                  )}
                    <Input id='email' label='Email Address' type="email" register={register} errors={errors}/>
                    <Input id='password' label='Password' type="password" register={register} errors={errors}/>
                    <div>
                        <Button>
                            {option === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}