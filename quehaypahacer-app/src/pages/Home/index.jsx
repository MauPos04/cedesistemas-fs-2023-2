// import { Fragment } from "react"
import { Categories } from "./components/Categories"
import { Layout } from "../../components/Layout"
import { TopEvents } from "./components/TopEvents"
import { CategoryContextStore } from "../../contexts/CategoryContext"

export const Home = () => {

  return(
    // Fragment o vacio <>
    <Layout>
      <CategoryContextStore>
        <Categories/>
        <TopEvents/>
      </CategoryContextStore>
    </Layout>
  )
}
