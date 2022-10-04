import React, { ReactNode } from "react";
import styled from "styled-components";

/*---> Component <---*/
const CardWrapper = ({ children, ...restProps }: PropsType) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

/*---> Styles <---*/
export const Wrapper = styled.div`
  & {
    transition: transform 0.4s;
    border-radius: 100%;
  }
  & img {
    border-radius: 12%;
  }
  &:hover {
    transform: scale(1.25);
  }
`;

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode;
  key: string;
}

export default CardWrapper;
