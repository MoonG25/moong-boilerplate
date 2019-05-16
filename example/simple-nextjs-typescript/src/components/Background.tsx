import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    background: url(/static/images/background-image.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`

const BackgroundTitle = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 20px;
  margin: 0;
  font-weight: 400;
  color: white;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`

interface BackgroundProps {
  title: string
  subtitle: string
}

export default class Background extends React.Component<BackgroundProps> {
  render() {
    const { title, subtitle } = this.props
    return (
      <BackgroundImage>
        <BackgroundTitle>
          {title}<br/>
          {subtitle}
        </BackgroundTitle>
      </BackgroundImage>
    )
  }
}