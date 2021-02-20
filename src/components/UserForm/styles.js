import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 50px;
  position: relative;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: none;
  &[disabled] {
    opacity: 0.4
  }
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
  &[disabled] {
    opacity: 0.4
  }
`

export const Title = styled.h2`
  color: #222;
  padding: 0 20px 20px;
`

export const Error = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  padding: 3px 10px;
  width: calc(100% - 100px);
  margin: 10px auto;
  text-align: center;
`

export const Loader = styled.div`
  margin: 100px auto;
  font-size: 15px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 999;
  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #979595, 1.8em -1.8em 0 0em rgba(151,149,149, 0.2), 2.5em 0em 0 0em rgba(151,149,149, 0.2), 1.75em 1.75em 0 0em rgba(151,149,149, 0.2), 0em 2.5em 0 0em rgba(151,149,149, 0.2), -1.8em 1.8em 0 0em rgba(151,149,149, 0.2), -2.6em 0em 0 0em rgba(151,149,149, 0.5), -1.8em -1.8em 0 0em rgba(151,149,149, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.7), 1.8em -1.8em 0 0em #979595, 2.5em 0em 0 0em rgba(151,149,149, 0.2), 1.75em 1.75em 0 0em rgba(151,149,149, 0.2), 0em 2.5em 0 0em rgba(151,149,149, 0.2), -1.8em 1.8em 0 0em rgba(151,149,149, 0.2), -2.6em 0em 0 0em rgba(151,149,149, 0.2), -1.8em -1.8em 0 0em rgba(151,149,149, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.5), 1.8em -1.8em 0 0em rgba(151,149,149, 0.7), 2.5em 0em 0 0em #979595, 1.75em 1.75em 0 0em rgba(151,149,149, 0.2), 0em 2.5em 0 0em rgba(151,149,149, 0.2), -1.8em 1.8em 0 0em rgba(151,149,149, 0.2), -2.6em 0em 0 0em rgba(151,149,149, 0.2), -1.8em -1.8em 0 0em rgba(151,149,149, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.2), 1.8em -1.8em 0 0em rgba(151,149,149, 0.5), 2.5em 0em 0 0em rgba(151,149,149, 0.7), 1.75em 1.75em 0 0em #979595, 0em 2.5em 0 0em rgba(151,149,149, 0.2), -1.8em 1.8em 0 0em rgba(151,149,149, 0.2), -2.6em 0em 0 0em rgba(151,149,149, 0.2), -1.8em -1.8em 0 0em rgba(151,149,149, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.2), 1.8em -1.8em 0 0em rgba(151,149,149, 0.2), 2.5em 0em 0 0em rgba(151,149,149, 0.5), 1.75em 1.75em 0 0em rgba(151,149,149, 0.7), 0em 2.5em 0 0em #979595, -1.8em 1.8em 0 0em rgba(151,149,149, 0.2), -2.6em 0em 0 0em rgba(151,149,149, 0.2), -1.8em -1.8em 0 0em rgba(151,149,149, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.2), 1.8em -1.8em 0 0em rgba(151,149,149, 0.2), 2.5em 0em 0 0em rgba(151,149,149, 0.2), 1.75em 1.75em 0 0em rgba(151,149,149, 0.5), 0em 2.5em 0 0em rgba(151,149,149, 0.7), -1.8em 1.8em 0 0em #979595, -2.6em 0em 0 0em rgba(151,149,149, 0.2), -1.8em -1.8em 0 0em rgba(151,149,149, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.2), 1.8em -1.8em 0 0em rgba(151,149,149, 0.2), 2.5em 0em 0 0em rgba(151,149,149, 0.2), 1.75em 1.75em 0 0em rgba(151,149,149, 0.2), 0em 2.5em 0 0em rgba(151,149,149, 0.5), -1.8em 1.8em 0 0em rgba(151,149,149, 0.7), -2.6em 0em 0 0em #979595, -1.8em -1.8em 0 0em rgba(151,149,149, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(151,149,149, 0.2), 1.8em -1.8em 0 0em rgba(151,149,149, 0.2), 2.5em 0em 0 0em rgba(151,149,149, 0.2), 1.75em 1.75em 0 0em rgba(151,149,149, 0.2), 0em 2.5em 0 0em rgba(151,149,149, 0.2), -1.8em 1.8em 0 0em rgba(151,149,149, 0.5), -2.6em 0em 0 0em rgba(151,149,149, 0.7), -1.8em -1.8em 0 0em #979595;
    }
  }
`

