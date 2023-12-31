import { useParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Button, COLORS } from '../../globalStyles'
import { useContext, useEffect, useState } from 'react'
import { httpRequest, HTTP_METHODS } from '../../utils/HttpRequest'
import { currencyFormat } from '../../utils/CurrencyFormat'
import { dateFormat } from '../../utils/DateFormat'
import { UserContext } from '../../contexts/UserContext'
import { ALERT_ICON, Alert } from '../../components/Alert'
import { getCategoryText } from '../../constants/categoriesDict'
import { useNavigate } from 'react-router-dom'

export const EventDetail = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const { user } = useContext(UserContext)

  useEffect (() => {
    loadEvent()
  }, [id])

  const loadEvent = async () => {
    try {
      const response = await httpRequest({
        method: HTTP_METHODS.GET,
        endpoint: `/events/${id}`
      })

      const {data} = response
      setEvent(data)

    } catch (error) {
      // TODO
    }
  }

  const joinToEvent = async () => {
    if (user.isAuth) { // puede unirse al evento
      // TODO: taller final :D

      // registrarlo al evento
      const bookingData = {
        idUser: user._id,
        idEvent: event._id
      }

      const response = await httpRequest({
        endpoint: '/booking/',
        body: bookingData
      })
      const {data} = response

      // si sale bien: redireccionarlo a confirmation-screen
      if(data && data?.booking && data?.booking._id){
        navigate('/confirmation')
      }else{
        Alert ({
          icon: ALERT_ICON.ERROR,
          title: 'Reserva no existosa',
          text: data.error
        })
      }

      // si sale mal: mostrar una alerta con la restricción


    } else {
      Alert ({
        title: 'Autenticación requerida',
        text: 'Para unirte al evento debes estar autenticado'
      })
    }
  }
  return (
    <Layout>
      <h2>{event.name}</h2>
      <div>
        <img src={event.image} width="100%" />
      </div>
      <div>
        <p>{event.description}</p>
        <p>{event.place}</p>
        <p>{dateFormat(event.date)}</p>
        <p>{getCategoryText(event.idCategory)}</p>
        <p>{event.price === 0 ? 'Gratuito': currencyFormat(event.price)}</p>
      </div>
      <Button onClick={joinToEvent} color={COLORS.secondary}>Quiero participar</Button>
    </Layout>
  )
}
