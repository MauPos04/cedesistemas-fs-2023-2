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
