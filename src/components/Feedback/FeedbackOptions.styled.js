import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 4px;
 
  &:not(:last-child) {
    margin-right: 10px;
  }

  :hover,
  :focus {
    background-color: #b770a0;
    color: white;
    transition: all 0.2s;
  }
`;