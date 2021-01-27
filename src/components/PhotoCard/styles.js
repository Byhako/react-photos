import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  /* relacion 16:9 */
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn({ time: '2s' })};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: flex;
  outline: none;
  padding: 8px;
  & svg {
    margin-right: 4px;
  }
`

export const Article = styled.article`
  min-height: 260px;
`
