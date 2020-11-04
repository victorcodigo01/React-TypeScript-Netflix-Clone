import React, { ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
	children?: ReactNode
}

/*---> Component <---*/
function Navbar({ children, ...restProps }: defaultProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.nav`
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 175px;
  margin-right: auto;
  margin-left: auto;
  /* border: solid red; */

  @media (max-width: 550px) {
    margin-bottom: 100px;
  }
`

export default Navbar
