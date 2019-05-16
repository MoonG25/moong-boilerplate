import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  width: 280px;
  height: 280px;
  margin: 1em;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
  cursor: pointer;

  @media (min-width: 601px) {
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    &:hover {
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
    }
  }
`

const CardInnerHeader = styled.div`
  height: 60%;
  width: 280px;
  background-color: red;
  border-radius: 5px 5px 0 0;
  background: url(${props => props.imageSrc || '/static/images/bg/default-bg.jpg'});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    width: 75px;
  }

  p {
    font-weight: 800;
    margin-bottom: 3px;
    text-align: center;
  }
  
  span {
    color: #bbb;
  }
`

const CardInnerContent = styled.div`
  height: 40%;
  width: 100%;
  background-color: #white;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 800;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const DogeIcon = styled.div`
  height: 21px;
  width: 21px;
  background: url(/static/images/doge-icon.png);
  background-size: cover;
  background-position: center;
`

interface CardProps {
  symbol: string
  imageSrc: string
  logoSrc: string
  product: any
  key: string
}

export default class CardContainer extends React.Component<CardProps> {
  private _getRiskDoge = (risk) => {
    let dogs: any = []
    for (let i = 0; i < risk; i++) {
      dogs.push(<div key={i}><DogeIcon/></div>)
    }
    return dogs
  }

  render() {
    const { symbol, imageSrc, logoSrc, product } = this.props

    return (
      <Link href={`/showcase/symbol=${symbol}`} as={`/showcase/${symbol}`}>
        <Card>
          <CardInnerHeader imageSrc={imageSrc}>
            <img src={logoSrc} alt={symbol}/>
            <p>{product.name}</p>
            <span>{product.assets}</span>
          </CardInnerHeader>
          <CardInnerContent>
            <div>
              Return &amp; Risk {this._getRiskDoge(product.returnRisk)}
            </div>
            <div>
              <p>{product.currency.toUpperCase()} <span>{product.returnValue}</span></p>
            </div>
            <div>
              <button>BUY</button>
              <button>SELL</button>
            </div>
          </CardInnerContent>
        </Card>
      </Link>
    )
  }
}