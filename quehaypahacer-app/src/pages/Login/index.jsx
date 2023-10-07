// import styled from 'styled-components'
import{Layout} from '../../components/Layout'
import { Button, FormContainer, FormControl } from '../../globalStyles'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'

const emailPattern = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i

export const Login =() => {

  const {setAuthorization} = useContext (UserContext)
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmitLogin = data => {
    console.log('formData', data)
    if(data.email === 'juanito@gmail.com' && data.password === '123456'){
      const userData ={ //mockear
        name : 'Juanito',
        email: data.email,
        document: '0000005',
        phone: '555555'
      }
      setAuthorization(userData)
      navigate('/')

  } else {
    alert('Error de credenciales')
  }
  }

  return(
    <Layout>
      <h2>Iniciar sesión</h2>
      <hr/>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label>Correo electrónico</label>
            {/* operador spread */}
            <input type="email"  {...register("email", {required: true, pattern: emailPattern})}/>
            {errors.email?.type === 'required' && <span>Correo requerido</span>}
            {errors.email?.type === 'pattern' && <span>Correo no válido</span>}
          </FormControl>

          <FormControl fontSize= "1.2em">
            <label>Contraseña</label>
            <input type="password" {...register("password", {required:true, minLength:4})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 4 caracteres</span>}
          </FormControl>

          <Button type='submit'>Acceder</Button>
        </form>
      </FormContainer>
      <p>¿Aún no tienes una cuenta ? <Link to="/signup">Registrate</Link></p>

    </Layout>
  )
}
