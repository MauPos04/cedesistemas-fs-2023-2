import { Layout } from "../../components/Layout"
import { FormContainer, FormControl } from "../../globalStyles"

export const Registration =() => {
  return(
    <Layout>
      <h2>Registration Form</h2>
      <p>A continuación ingrese los datos para su registro</p>
      <hr/>
      <FormContainer>
        <form>

          <FormControl>
            <label>Ingrese su nombre </label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su Apellido </label>
            <input type="text"/>
          </FormControl>

          <FormControl>
            <label>Ingrese su correo </label>
            <input type="text"/>
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
            <label>Ingrese su contraseña </label>
            <input type="password"/>
          </FormControl>




        </form>
      </FormContainer>
    </Layout>
  )
}
