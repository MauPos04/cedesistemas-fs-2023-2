import {Layout} from '../../components/Layout'
import { Button } from '../../globalStyles'
export const Profile =() =>{
  return(
    <Layout>
      <h3>Mi cuenta</h3>
      <hr/>
      <p>Nombre: <strong>Juan</strong></p>
      <p>Correo: <strong>Juan@gmail.com</strong></p>
      <p>Identificación: <strong>164562655965</strong></p>
      <p>Teléfono: <strong>32000000</strong></p>

      <br/><br/>
      <Button>Cerrar Sesión</Button>
    </Layout>
  )
}
