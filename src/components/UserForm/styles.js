import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 50px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: none;
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
  width: 100%;
  text-align: center;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background: #b700b1c2;
  }
`

export const Title = styled.h2`
  color: #222;
  padding: 0 20px 20px;
`
