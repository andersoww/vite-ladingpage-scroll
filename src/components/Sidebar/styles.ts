import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

interface SidebarProps {
  isOpen?: boolean
}

export const SidebarContainer = styled.aside<SidebarProps>`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
right: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => isOpen ? "100%" : "0"};
top:${({ isOpen }) => isOpen ? "0" : "-100%"}
`
export const CloseIcon = styled(FaTimes)`
color:#fff;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color:#fff
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width:760px){
  grid-template-rows: repeat(6,60px);
}
`

export const SidebarBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover{
  color: #01bf71;
  transition: 0.2s ease-in-out;
}

`
export const SidebarRoute = styled(LinkS)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 1rem 4rem;
color: #010606;
font-size:1rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  color: #010606;
}
`