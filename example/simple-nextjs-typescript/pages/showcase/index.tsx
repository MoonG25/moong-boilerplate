import React from 'react'
import styled from 'styled-components'
import Layout from '../../src/components/Layout'
import { connect } from 'react-redux'
import { withNamespaces } from '../../i18n'
import ReactPlayer from 'react-player'

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`

const ShowcaseContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
  padding: 100px 150px;
  width: 100%;
  background-color: ${props => props.bgColor}
`

class ShowcasePage extends React.Component<{symbol}> {
  state = {
    url: 'https://you.be/bILE5BEyhdo'
  }
  static async getInitialProps({ query }) {
    return {
      namespacesRequired: ['common'],
      symbol: query.symbol
    }
  }

  _getDefaultVideo = (e) => {
    this.setState({
      url: '/static/movies/example.mp4'
    })
  }

  render() {
    const { symbol } = this.props
    const { url } = this.state

    return (
      <Layout>
        <ShowcaseContainer>
          <ShowcaseContentBox bgColor="#123456">
            <div>
              <img src={`/static/images/logo/${symbol}.svg`} alt={symbol} width="180px"/>
            </div>
            <div>
              {symbol.toUpperCase()} INC.<br/>
              BMx{symbol.toUpperCase()}
            </div>
            <div>
              <p>
                Lyft Inc. is one of the most notable companies in the transportation market. 
                Blackmoon offers a unique opportunity for investors to get exposure to the Lyft Inc. shares.
              </p>
            </div>
            <div>
              <div>
                <ReactPlayer url={url} controls onError={(e) => this._getDefaultVideo(e)} />
              </div>
              <div>
                <div>
                  <h5>CHANGE 24 HOURS</h5>
                  <h4>+5.80 %</h4>
                  <span>in USD</span>
                </div>
                <div>
                  <h5>CURRENCY</h5>
                  <h4>USD</h4>
                </div>
                <div>
                  <h5>LIQUIDITY</h5>
                  <h4>HIGH</h4>
                </div>
              </div>
            </div>
            <div>
              <button>BUY</button>
              <button>SELL</button>
            </div>
          </ShowcaseContentBox>
          <ShowcaseContentBox bgColor="#234567">
            <div>
              <img src={`/static/images/logo/${symbol}.svg`} alt={symbol} width="180px"/>
            </div>
            <div>
              {symbol.toUpperCase()} INC.<br/>
              BMx{symbol.toUpperCase()}
            </div>
            <div>
              <p>
                Lyft Inc. is one of the most notable companies in the transportation market. 
                Blackmoon offers a unique opportunity for investors to get exposure to the Lyft Inc. shares.
              </p>
            </div>
            <div>
              <div>
                <h5>CHANGE 24 HOURS</h5>
                <h4>+5.80 %</h4>
                <span>in USD</span>
              </div>
              <div>
                <h5>CURRENCY</h5>
                <h4>USD</h4>
              </div>
              <div>
                <h5>LIQUIDITY</h5>
                <h4>HIGH</h4>
              </div>
            </div>
            <div>
              <button>BUY</button>
              <button>SELL</button>
            </div>
          </ShowcaseContentBox>
          <ShowcaseContentBox bgColor="#345678">
            <div>
              <img src={`/static/images/logo/${symbol}.svg`} alt={symbol} width="180px"/>
            </div>
            <div>
              {symbol.toUpperCase()} INC.<br/>
              BMx{symbol.toUpperCase()}
            </div>
            <div>
              <p>
                Lyft Inc. is one of the most notable companies in the transportation market. 
                Blackmoon offers a unique opportunity for investors to get exposure to the Lyft Inc. shares.
              </p>
            </div>
            <div>
              <div>
                <h5>CHANGE 24 HOURS</h5>
                <h4>+5.80 %</h4>
                <span>in USD</span>
              </div>
              <div>
                <h5>CURRENCY</h5>
                <h4>USD</h4>
              </div>
              <div>
                <h5>LIQUIDITY</h5>
                <h4>HIGH</h4>
              </div>
            </div>
            <div>
              <button>BUY</button>
              <button>SELL</button>
            </div>
          </ShowcaseContentBox>
        </ShowcaseContainer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('common')(ShowcasePage))