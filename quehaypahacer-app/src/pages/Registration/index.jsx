import { Layout } from "../../components/Layout"
import { FormContainer, FormControl,Button } from "../../globalStyles"
import {useForm} from 'react-hook-form'

const emailPattern = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i


export const Signup =() => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmitLogin = data => {
    console.log('formData', data)
  }
  return(
    <Layout>
      <h2>Registration Form</h2>
      <p>A continuación ingrese los datos para su registro</p>
      <hr/>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>

          <FormControl>
            <label>Ingrese su nombre </label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su Apellido </label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su correo electronico </label>
            <input type="email"  {...register("email", {required: true, pattern: emailPattern})}/>
            {errors.email?.type === 'required' && <span>Correo requerido</span>}
            {errors.email?.type === 'pattern' && <span>Correo no válido</span>}
          </FormControl>

          <FormControl>
            <label>Ingrese su número de Identificación </label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su Teléfono </label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su usuario</label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su Contraseña</label>
            <input type="password" {...register("password", {required:true, minLength:4})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 4 caracteres</span>}
          </FormControl>

          <Button type='submit'>Registrar cuenta</Button>

        </form>
      </FormContainer>
    </Layout>
  )
}
