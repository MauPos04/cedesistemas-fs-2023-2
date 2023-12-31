import styled, { createGlobalStyle } from 'styled-components'

export const COLORS = {
  primary: '#1D226B',
  secondary: '#0d5b6e',
  success:'#198753',
  error: '#DC3444',
  info:'#1F7A8C'
}

export const GlobalStyles = createGlobalStyle`
  *,::after, ::before{
    box-sizing:border-box;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins';

  }

  a{
    text-decoration:none;
  }

  a:hover{
    text-decoration:none;
  }
`


export const Button = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  /* background-color: ${COLORS.primary}; */
  background-color: ${props => props.color || COLORS.primary};
  font-size: 1em;
  padding: 12px 0;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  text-transform: uppercase;
  font-weight:400;

  &:hover{
    opacity:1;
  }
`
export const FormContainer = styled.section `
  /* border: 1px solid red; */

`

export const FormControl = styled.div`
  margin:10px 0;
  input{
    width:100%;
    font-family: 'Montserrat';
    font-size: 1.1em;
    border: 2px solid ${COLORS.secondary};
    border-radius: 6px ;
    padding: 8px 10px;
    outline:none;
  }
  label{
    font-size: ${props => props.fontSize || "1.0 em"};
  }

  span{
    font-size: 0.7em;
    color: ${COLORS.error}
  }
`
