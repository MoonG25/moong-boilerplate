import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMessage } from '../src/redux/showcase/actions'
import { withNamespaces } from '../i18n'
import Layout from '../src/components/Layout'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'
import axios from 'axios'
import Background from '../src/components/Background'
import Card from '../src/components/Card'

import "./index.scss"
import Modal from '../src/components/Modal';
import Register from '../src/components/Register';
import Login from '../src/components/Login';
import { openModal, closeModal } from '../src/redux/common/actions';

interface IndexProps {
  message: string
  updateMessage: any
  t: Function
  productParams: object
  symbolsByTabs: any
  isOpen: boolean
  openModal: Function
  closeModal: Function
  type: string
}

interface IndexState {

}

// CARD LIST
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CardHeader = styled.div`
  height: 55px;
  background-color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  padding: 5px;
`

const CardHeaderButton = styled.button`
  background-color: #123456;
  color: white;
  width: 120px;
  border: 1px solid white;
  border-radius: 7px;
  padding: 5px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: #012345;
  }

  &:focus {
    outline: none;
  }

  span {
    margin: 5px;
    color: #12aa12;
    font-weight: 600;
  }
`

const CardContent = styled.div`
  display: flex;
  background-color: #123456;

  @media (min-width: 601px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: space-between;
  }
`

class IndexPage extends React.Component<IndexProps, IndexState> {

  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    console.log('init prop')
    const result: any = await axios.get('https://blackmoonplatform.com/_jsdata/showcase').then(res => res.data)
    return {
      namespacesRequired: ['common'],
      productParams: result.productParams,
      symbolsByTabs: result.symbolsByTabs
    }
  }

  public _getShowcase = async () => {
    const result = await fetch('https://blackmoonplatform.com/_jsdata/showcase')
    console.log(result)
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render(): JSX.Element {
    const { t, closeModal, productParams, symbolsByTabs, isOpen, type } = this.props
    const filteredProducts = Object.values(productParams).filter(product => product.name)
    console.log('render')
    return (
      <Layout>
        {
          (isOpen && type) ? (
            <Modal>
              {
                type === 'register' ? <Register /> : <Login />
              }
            </Modal>
          ) : (
            <React.Fragment />
          )
        }
        <Background title={t('title')} subtitle={t('subtitle')} />

        {/* CARD LIST */}
        <CardContainer>
          <CardHeader>
            {
              symbolsByTabs.map(tab => {
                return (
                  <CardHeaderButton key={tab.title}>
                    {tab.title}
                    <span>{tab.symbols.length}</span>
                  </CardHeaderButton>
                )
              })
            }
          </CardHeader>
          <CardContent>
            {
              filteredProducts.map(product => {
                const symbol = product.tokenSymbol
                const imageSrc = `/static/images/bg/${symbol}.jpg`
                const logoSrc = `/static/images/logo/${symbol}.svg`
                const dogeSrc = `/static/images/doge-icon.png`
                return (
                  <Card key={symbol} 
                        symbol={symbol} 
                        imageSrc={imageSrc} 
                        logoSrc={logoSrc} 
                        product={product} />
                )
              })
            }
          </CardContent>
        </CardContainer>

        {/* <div className="root">
          <p>Message : <span>{message}</span></p>
          <button onClick={() => updateMessage('update message')}>click</button>
          <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
          <button onClick={() => i18n.changeLanguage('ko')}>🇰🇷</button>
        </div> */}
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.showcaseReducer,
  ...state.commonReducer,
})

const mapDispatchToProps = (dispatch) => ({
  updateMessage: bindActionCreators(updateMessage, dispatch),
  openModal: bindActionCreators(openModal, dispatch),
  closeModal: bindActionCreators(closeModal, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('common')(IndexPage))