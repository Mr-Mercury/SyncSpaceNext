'use client';
// Bad for server component testing due to high interactivity
import { useCallback, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';

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
            axios.post('/api/register', data)
            .catch(() => toast.error('Registration error!'))
            .finally(() => setLoading(false))
        }
        if (option === 'LOGIN') {
            signIn('credentials', {...data, redirect:false})
            .then((callback) => {

                if (callback?.error) {
                    toast.error('Invalid Credentials');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in')
                }
            })
            .finally(() => setLoading(false))
        }
    }

    function oAuthAction(action: string): void {
        setLoading(true);

        signIn(action, {redirect: false})
        .then((callback) => {
            if (callback?.error) {
                toast.error('Invalid username and/or password')
            }

            if (callback?.ok && !callback?.error) {
                toast.success('Logged in')
            }
        })
        .finally(() => setLoading(false))
    }

    return (
        <div
          className="
              mt-8
              w-full
              mx-auto
              lg:w-1/3
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
                    <Input id='name' label='Username' register={register} errors={errors} disabled={loading}/>
                  )}
                    <Input id='email' label='Email Address' type="email" register={register} errors={errors} disabled={loading}/>
                    <Input id='password' label='Password' type="password" register={register} errors={errors} disabled={loading}/>
                    <div>
                        <Button
                          disabled={loading}
                          fullWidth
                          type='submit'>
                            {option === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className='mt-6'>
                    <div className='relative'>
                        <div
                          className='
                            absolute
                            inset-0
                            flex
                            items-center'
                        >
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-zinc-800 px-2 text-slate-50'>
                                Or login with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                            {/* TODO: Make these oauth buttons a little taller? */}
                        <AuthSocialButton 
                          icon={BsGithub}
                          onClick={() => oAuthAction('github')} />
                        <AuthSocialButton 
                          icon={BsGoogle}
                          onClick={() => oAuthAction('google')} />
                    </div>
                </div>

                <div className='
                  flex
                  gap-2
                  justify-center
                  text-sm
                  mt-6
                  px-2
                  text-slate-50
                  '>
                    <div>
                        {option === 'LOGIN' ? 'New to SyncSpace?' : 'Already have an Account?'}
                    </div>
                    <div
                      onClick={toggleOption}
                      className='underline cursor-pointer'
                    >
                        {option === 'LOGIN' ? 'Create an account' : 'Login'}

                    </div>
                </div>
            </div>
        </div>
    )
}