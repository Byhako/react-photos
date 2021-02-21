import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    color: #222;
    margin: 0
  }
  span {
    cursor: pointer;
    color: #b700b1;
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Title = styled.h2`
  color: #222;
  padding: 0 20px 20px;
`

export const Button = styled.button`
  background: #b700b1;
  border-radius: 3px;
  border: none;
  border-bottom: 2px solid #8d00ff;
  border-right: 2px solid #8d00ff;
  color: #fff;
  display: block;
  height: 32px;
  width: calc(100% - 100px);
  text-align: center;
  outline: none;
  margin: 20px auto 0;
  cursor: pointer;
  &:hover {
    background: #b700b1c2;
  }
  &[disabled] {
    opacity: 0.4
  }
`
