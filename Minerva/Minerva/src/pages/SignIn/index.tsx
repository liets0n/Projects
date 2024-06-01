import React, { useState } from 'react'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { Eye, EyeSlash } from '@phosphor-icons/react'

import { Wrapper } from './styles'
import { auth } from './../../lib/firebase'

import Logo from './../../../public/logo.svg'

const handleSubmitFormDataSchema = z.object({
  email: z.string().nonempty('O E-mail é obrigatório').email('E-mail inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    .max(255, 'Informe 255 caracteres ou menos para senha'),
})

type DataType = {
  email: string
  password: string
}

type handleSubmitFormDataType = Zod.infer<typeof handleSubmitFormDataSchema>

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<handleSubmitFormDataType>({ resolver: zodResolver(handleSubmitFormDataSchema) })

  const handleSubmitFormData = (data: DataType) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(_ => console.log('Seja bem-vindo 🥳'))
      .catch(error => {
        console.log(error.message)
        toast.error('Verifique o seu email e a senha')
      })
  }

  return (
    <Wrapper>
      <img alt='Logotipo oficial da aplicação' src={Logo} className='logo' />

      <form onSubmit={handleSubmit(handleSubmitFormData)}>
        <h1 className='title'>Entrar</h1>

        <h2 className='subtitle'>Olá, insira seus dados para entrar na sua conta.</h2>

        <div className='fields'>
          <span className='fields__context fields__context--email'>
            <label htmlFor='email' className='context__label'>
              E-mail
              <span className='label__obligationSign'>*</span>
            </label>

            <input
              type='email'
              id='email'
              className='context__input'
              placeholder='lietson@exemplo.com'
              {...register('email')}
            />

            {errors.email && <span className='context__messageError'>{errors.email.message}</span>}
          </span>

          <span className='fields__context fields__context--password'>
            <label htmlFor='password' className='context__label'>
              <span>
                Senha
                <span className='label__obligationSign'>*</span>
              </span>

              <Link to='/redefinir/senha' className='label__forgotPassword'>
                Esqueceu a senha?
              </Link>
            </label>

            <div className='context__input'>
              <input
                type={showPassword === false ? 'password' : 'text'}
                id='password'
                className='input__field'
                placeholder='******'
                {...register('password')}
              />

              {showPassword === false ? (
                <EyeSlash
                  className='input__icon'
                  onClick={() => setShowPassword(state => !state)}
                />
              ) : (
                <Eye className='input__icon' onClick={() => setShowPassword(state => !state)} />
              )}
            </div>

            {errors.password && (
              <span className='context__messageError'>{errors.password.message}</span>
            )}
          </span>
        </div>

        <button type='submit' className='btn'>
          Entrar
        </button>
      </form>

      <p className='footer'>Copyright @Minerva 2023</p>
    </Wrapper>
  )
}

export default SignIn
