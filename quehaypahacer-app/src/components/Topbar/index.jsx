import { Link } from "react-router-dom"
import { TopbarContainer, TopbarIcon, TopbarTitle } from "./styles"
import {IoHome, IoPersonCircleOutline, IoLogInOutline} from 'react-icons/io5'
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"

export const Topbar = () => {

  const {user} = useContext(UserContext)

  // const isAuth = false

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
      user.isAuth
      ? <Link to={'/profile'}><IoPersonCircleOutline/></Link>
      : <Link to={'/login'}><IoLogInOutline/></Link>
    }
    </TopbarIcon>
    </TopbarContainer>
  )
}

