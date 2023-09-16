import {Layout} from '../../components/Layout'
import { Button } from '../../globalStyles'
export const Profile =() =>{
  return(
    <Layout>
      <h3>Mi cuenta</h3>
      <hr/>
      <p>Nombre: <srtong>Juan</srtong></p>
      <p>Correo: <srtong>Juan@gmail.com</srtong></p>
      <p>Identificación: <srtong>164562655965</srtong></p>
      <p>Teléfono: <srtong>32000000</srtong></p>

      <br/><br/>
      <Button>Cerrar Sesión</Button>
    </Layout>
  )
}
