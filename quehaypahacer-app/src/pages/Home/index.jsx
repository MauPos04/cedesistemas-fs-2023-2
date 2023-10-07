// import { Fragment } from "react"
import { Categories } from "./components/Categories"
import { Layout } from "../../components/Layout"
import { TopEvents } from "./components/TopEvents"
import { CategoryContextStore } from "../../contexts/CategoryContext"
import { useCurrentPosition } from "../../hooks/useCurrentPosition"


export const Home = () => {

  const [latitude, longitude] = useCurrentPosition()

  return(
    // Fragment o vacio <>
    <Layout>
      <CategoryContextStore>
        <Categories/>
        <TopEvents latitude = {latitude} longitude = {longitude}/>
      </CategoryContextStore>
    </Layout>
  )
}
