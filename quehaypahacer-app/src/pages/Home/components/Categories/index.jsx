import styled from "styled-components"
import { Category } from "../Category"
import { IoMusicalNotesOutline, IoColorPalette, IoFastFood, IoLaptopOutline } from "react-icons/io5";
import { useState } from "react";

const CategoriesContainer = styled.section`
  display: flex;
  margin: 0 15px;
  justify-content: center;

`

const CATEGORY_LIST = [
  {
    id:1,
    name: 'Arte',
    icon: <IoColorPalette/>,
    color: 'yellow',

  },
  {
    id:2,
    name: 'Gastronomico',
    icon: <IoFastFood/>,
    color: 'orange',

  },
  {
    id:3,
    name: 'Musica',
    icon: <IoMusicalNotesOutline/>,
    color: 'blue',

  },
  {
    id:4,
    name: 'Geek',
    icon: <IoLaptopOutline/>,
    color: 'green',

  }
]
const ALL_CATEGORIES = 0

export const Categories = () => {

  const [categorySelected, setCategorySelected] =useState(ALL_CATEGORIES)

  const onChangeCategory = (newCategoryId) => {
    // console.log('new category ', newCategoryId)
    // categorySelected = newCategoryId
    // if(categorySelected===newCategoryId){
    //   setCategorySelected(0)
    //   }else{setCategorySelected(newCategoryId)}

      setCategorySelected(categorySelected===newCategoryId? ALL_CATEGORIES: newCategoryId)
    }



  return(
    <CategoriesContainer>
      {
        CATEGORY_LIST.map(item => <Category
        isActive ={categorySelected===item.id}
        {...item}
          onChangeCategory={onChangeCategory}
        /> )
      }
    </CategoriesContainer>
  )
}
