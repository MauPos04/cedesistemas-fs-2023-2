import { Link } from "react-router-dom"
import { TopbarContainer, TopbarIcon, TopbarTitle } from "./styles"
import {IoHome, IoPersonCircleOutline, IoLogInOutline} from 'react-icons/io5'


export const Topbar = () => {

  const isAuth = false

  return(
    <TopbarContainer>
    <TopbarIcon>
      <Link to={'/'}>
      <IoHome/>
      </Link>
    </TopbarIcon>
    <TopbarTitle>
      <h5>Que hay pa' hacer</h5>
    </TopbarTitle>

    <TopbarIcon>
    {
      isAuth
      ? <Link to={'/profile'}><IoPersonCircleOutline/></Link>
      : <Link to={'/login'}><IoLogInOutline/></Link>
    }
    </TopbarIcon>
    </TopbarContainer>
  )
}

