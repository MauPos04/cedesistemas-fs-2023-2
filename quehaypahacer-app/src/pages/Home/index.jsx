// import { Fragment } from "react"
import { Categories } from "./components/Categories"
import { Layout } from "../../components/Layout"
import { TopEvents } from "./components/TopEvents"

export const Home = () => {

  return(
    // Fragment o vacio <>
    <Layout>
      <Categories/>
      <TopEvents/>
    </Layout>
  )
}
