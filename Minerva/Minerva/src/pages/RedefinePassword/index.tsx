import React from 'react'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Wrapper } from './styles'
import Logo from './../../../public/logo.svg'

const handleSubmitFormDataSchema = z.object({
  email: z.string().nonempty('O E-mail é obrigatório').email('E-mail inválido'),
})

type DataType = {
  email: string
}

type handleSubmitFormDataType = Zod.infer<typeof handleSubmitFormDataSchema>

const RedefinePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<handleSubmitFormDataType>({ resolver: zodResolver(handleSubmitFormDataSchema) })

  const handleSubmitEmail = (data: DataType) => {
    toast.success('Verifique o seu E-mail')
    console.log(data)
  }

  return (
    <Wrapper>
      <img alt='Logotipo oficial da aplicação' src={Logo} className='logo' />

      <form onSubmit={handleSubmit(handleSubmitEmail)}>
        <h1 className='title'>Redefinir a senha</h1>

        <h2 className='subtitle'>Informe o E-mail que usou para fazer o cadastro.</h2>

        <span className='field'>
          <label htmlFor='email' className='field__label'>
            E-mail
            <span className='label__obligationSign'>*</span>
          </label>

          <input
            type='email'
            id='email'
            className='field__input'
            placeholder='lietson@exemplo.com'
            {...register('email')}
          />

          {errors.email && <span className='field__messageError'>{errors.email.message}</span>}
        </span>

        <button type='submit' className='btn'>
          Enviar
        </button>

        <Link to='/entrar' className='back'>
          Voltar
        </Link>
      </form>
    </Wrapper>
  )
}

export default RedefinePassword
