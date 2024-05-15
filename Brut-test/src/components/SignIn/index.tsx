import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SiApple } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { VscChromeClose } from 'react-icons/vsc'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import { Wrapper, Container } from './styles'
import { type RootState } from '../../context/store'
import { changeSignInState } from '../../context/signIn.slice'

import YoutubeLogo from '../../assets/images/logo/YouTube-Icon-Logo.svg'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { isOpen } = useSelector((state: RootState) => state.signIn)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <Wrapper hidden={isOpen}>
      <Container>
        <VscChromeClose
          className='close'
          title='Fechar'
          onClick={() => dispatch(changeSignInState())}
        />

        <img
          src={YoutubeLogo}
          alt='Youtube'
          title='Logo do youtube'
          className='logo'
        />

        <form>
          <div className='field'>
            <label htmlFor='email' className='field__label'>
              E-mail
            </label>

            <div className='field__fieldContainer'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='E-mail'
                className='fieldContainer__input'
              />
            </div>
          </div>

          <div className='field'>
            <label htmlFor='password' className='field__label'>
              Palavra-passe
            </label>

            <div className='field__fieldContainer'>
              <input
                type={!showPassword ? 'password' : 'text'}
                name='password'
                id='password'
                placeholder='min. 6 caracteres'
                className='fieldContainer__input'
              />

              {!showPassword ? (
                <BsEyeSlash
                  className='fieldContainer__icon'
                  onClick={() => {
                    setShowPassword(state => !state)
                  }}
                />
              ) : (
                <BsEye
                  className='fieldContainer__icon'
                  onClick={() => {
                    setShowPassword(state => !state)
                  }}
                />
              )}
            </div>
          </div>

          <button type='submit' className='btn'>
            Entrar
          </button>
        </form>

        <p className='separator'>OU</p>

        <div className='btnContainer'>
          <button type='button' className='btnContainer__btn'>
            <FcGoogle className='icon' />
            Continuar com o Google
          </button>

          <button type='button' className='btnContainer__btn'>
            <SiApple className='icon' />
          </button>
        </div>

        <p className='account'>
          Ainda não tem uma conta?&nbsp;
          <span className='account__emphasis'>Conecte-se</span>
        </p>
      </Container>
    </Wrapper>
  )
}

export default SignIn
