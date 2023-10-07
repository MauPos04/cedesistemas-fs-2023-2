import styled from "styled-components"
import { COLORS } from "../../../../globalStyles"
import {Link} from 'react-router-dom'
import { CategoryContext } from "../../../../contexts/CategoryContext"
import { useState , useContext, useEffect} from "react"


const TopEventsContainer = styled.section`

  margin: 25px 0;

`
const EventWrapper = styled.div`
  display: flex;
  border: 1px solid #CCC;
  border-radius: 5px;
  margin: 10px 0;
  overflow: hidden;

  &:hover{
    background-color: #CCC;
    cursor:pointer;
  }
`

const EventContent = styled.div`

  margin-left: 15px;
  h5{
    font-size:1.2em;
    line-height: 1.2em;
    margin: 15px 0;
    color: #222;
  }
  p{
    margin:0;
    color: #222;
  }
`

const FreeText = styled.p`
  background-color: ${COLORS.info};
  color: ${COLORS.primary};
  padding: 3px 4px;
  border-radius: 3px;
  display: inline;
`
const EVENTS_DATA = [
  {
    id:1,
    image: 'https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg',
    tittle: 'Desfile de silleteros',
    date: '10/09/2023',
    location: 'Medellin',
    is_free: true,
    price: '0',
    category:1
  },

  {
    id:2,
    image: 'https://lh5.googleusercontent.com/p/AF1QipMBFBeqhHIkgZRLA2s4FHCkXqy7bWNTYP5HBtq9',
    tittle: 'Encuentro de comida oriental',
    date: '10/09/2023',
    location: 'Poblado',
    is_free: false,
    price: '150000',
    category:2
  },

  {
    id:3,
    image: 'https://viajeronomada.com/wp-content/uploads/2020/01/quehacerenmedellin.jpg',
    tittle: 'Encuentro cultural de comida oriental',
    date: '10/09/2023',
    location: 'Parque Berrio',
    is_free: true,
    price: '0',
    category:1
  },

  {
    id:4,
    image: 'https://where.com.co/wp-content/uploads/2022/07/sIRVALO-PUES.jpg',
    tittle: 'Concierto de musica pa tomar',
    date: '09/09/2023',
    location: 'La macarena',
    is_free: false,
    price: '240000',
    category:3
  }
]

//each event component
const Event = (props) =>(
  <Link to = { `/detail/${props.id}`  }>
    <EventWrapper>

      <img src={props.image} width="200px"/>

    <EventContent>
      <h5>{props.tittle}</h5>
      <p>{props.date}</p>
      <p>{props.location}</p>
      {
        props.is_free? <FreeText>Gratuito</FreeText>: <p>$ {props.price}</p>
      }
    </EventContent>
    </EventWrapper>
    </Link>

)

export const TopEvents = ({latitude = null, longitude = null}) =>{

  const {categoryState} = useContext(CategoryContext)
  const [events, setEvents] = useState(EVENTS_DATA)

  useEffect(() => {
    //..
    if (categoryState.categorySelected !==0){
    const eventsFilter = EVENTS_DATA.filter(
      item => item.category === categoryState.categorySelected
      )
      setEvents(eventsFilter);
    }else{
      setEvents(EVENTS_DATA)
    }

    }
  ,[categoryState])

  return(
    <TopEventsContainer>
    <h3>Eventos Cercanos </h3>
    <p>{latitude}, {longitude}</p>
    <section>
      {
        events.map((item , key ) => <Event key = {key} {...item}/>)
      }
    </section>
    </TopEventsContainer>
  )
}
