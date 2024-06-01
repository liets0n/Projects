import React, { useState } from 'react'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { Eye, EyeSlash } from '@phosphor-icons/react'

import { Wrapper } from './styles'
import { auth } from './../../lib/firebase'
import { registerEmployee } from './../../services'
import { nameFormatter, numberAreIncluded } from './../../helpers'

import Logo from './../../../public/logo.svg'

const handleSubmitFormDataSchema = z.object({
  name: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .transform(name => nameFormatter(name))
    .refine(name => numberAreIncluded(name), 'Informe apenas caracteres de a-Z'),
  lastname: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .transform(lastname => nameFormatter(lastname))
    .refine(lastname => numberAreIncluded(lastname), 'Informe apenas caracteres de a-Z'),
  email: z.string().nonempty('Campo obrigatório').email('E-mail inválido'),
  position: z.string().min(1, 'Campo obrigatório'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    .max(255, 'Informe 255 caracteres ou menos para senha'),
})

type DataType = {
  name: string
  lastname: string
  email: string
  position: string
  password: string
}

type handleSubmitFormDataType = Zod.infer<typeof handleSubmitFormDataSchema>

const SignUp = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<handleSubmitFormDataType>({ resolver: zodResolver(handleSubmitFormDataSchema) })

  const handleSubmitFormData = async (data: DataType) => {
    const avatar = ''
    const { name, lastname, email, position, password } = data

    createUserWithEmailAndPassword(auth, email, password)
      .then(async response => {
        const uid = response.user.uid

        await registerEmployee({ avatar, name, lastname, email, position }, false, 'users', uid)

        navigate('/')
      })
      .catch(error => {
        console.log(error.message)
        toast.error('Verifique o seu E-mail e a senha')
      })
  }

  return (
    <Wrapper>
      <img alt='Logotipo oficial da aplicação' src={Logo} className='logo' />

      <form onSubmit={handleSubmit(handleSubmitFormData)}>
        <h1 className='title'>Cadastro</h1>

        <h2 className='subtitle'>
          Seja bem-vindo a área de cadastro, preencha todos os campos para completar o seu cadastro.
        </h2>

        <div className='fields'>
          <div className='fields__names'>
            <span className='fields__context'>
              <label htmlFor='name'>
                Nome
                <span className='label__obligationSign'>*</span>
              </label>

              <input
                type='text'
                id='name'
                className='context__input'
                placeholder='Lietson'
                {...register('name')}
              />

              {errors.name && <span className='context__messageError'>{errors.name.message}</span>}
            </span>

            <span className='fields__context'>
              <label htmlFor='lastname'>
                Sobrenome
                <span className='label__obligationSign'>*</span>
              </label>

              <input
                type='text'
                id='lastname'
                className='context__input'
                placeholder='Dos Santos'
                {...register('lastname')}
              />

              {errors.lastname && (
                <span className='context__messageError'>{errors.lastname.message}</span>
              )}
            </span>
          </div>

          <span className='fields__context'>
            <label htmlFor='email'>
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

          <span className='fields__context'>
            <label htmlFor='position'>
              Cargo
              <span className='label__obligationSign'>*</span>
            </label>

            <select
              defaultValue=''
              id='position'
              className='context__select'
              {...register('position')}
            >
              <option value='' disabled selected>
                Selecione...
              </option>

              <option value='Técnico em Recursos Humanos'>Técnico em Recursos Humanos</option>
              <option value='Chefe Dos Recursos Humanos'>Chefe Dos Recursos Humanos</option>
              <option value='Administrador Geral'>Administrador Geral</option>
            </select>

            {errors.position && (
              <span className='context__messageError'>{errors.position.message}</span>
            )}
          </span>

          <span className='fields__context fields__context--password'>
            <label htmlFor='password'>
              Senha
              <span className='label__obligationSign'>*</span>
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
          Cadastrar
        </button>
      </form>

      <p className='footer'>Copyright @Minerva 2023</p>
    </Wrapper>
  )
}

export default SignUp
