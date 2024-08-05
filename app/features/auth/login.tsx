/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Loader2 } from 'lucide-react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface LoginState {
  email: string;
  password: string
}

export default function Login() {

  const [ loginState, setLoginState ] = useState<LoginState>({ email: '', password: '' });
  const [ loading, setLoading ] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    console.log('Email:', loginState.email);
    console.log('Password:', loginState.password);
  };

  return (
    <Card className="w-[350px] h-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={ handleSubmit }>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Usuario</Label>
              <Input id="email"
                name='email'
                placeholder="Ingrese su nombre de usuario"
                value={ loginState.email }
                onChange={ handleChange }/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password"
                name='password'
                placeholder="Ingrese su contraseña" 
                type='password'
                value={ loginState.password }
                onChange={ handleChange }/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-[100%]' 
          onClick={ handleSubmit }
          disabled={ !loginState.email || !loginState.password  || loading}>
            {
              loading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) : <></>
            }
            Iniciar Sesión
        </Button>
      </CardFooter>
    </Card>
  )
}