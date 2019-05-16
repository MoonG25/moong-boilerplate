import React from 'react'
import Nav from './Nav'

import styled from 'styled-components'
import { i18n, withNamespaces } from '../../i18n'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openModal, closeModal } from '../redux/common/actions';

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  color: white;
  background-color: #16638d;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  @media (min-width: 1001px) {
    background-color: transparent;
  }

  @media (max-width: 1000px) and (min-width: 601px) {
    background-color: transparent;
    font-size: 13px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  .nav__lang-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  .nav__lang {
    cursor: pointer;

    &:hover {
      & + .nav__lang-sub {
        display: block;
      }
    }
  }

  .nav__lang-sub {
    position: absolute;
    display: none;
    cursor: pointer;
    top: 33px;

    &:hover {
      display: block;
    }
  }
`

const HeaderLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: hotpink;
`

// HEADER NAV

const HeaderUser = styled.div`
  display: flex;
`

const HeaderUserItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: hotpink;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

interface HeaderProps {
  t: Function
  openModal: Function
  closeModal: Function
  isLoggedIn?: boolean
}
class Header extends React.Component<HeaderProps> {

  _register = () => {
    console.log('register')
    this.props.openModal('register')
  }

  _login = () => {
    console.log('login')
    this.props.openModal('login')
  }

  _logout = () => {
    console.log('logout')
  }

  render(): JSX.Element {
    const { t, openModal, closeModal, isLoggedIn } = this.props
    return (
      <HeaderContainer>
        <HeaderLogo href="/">AETHER STO</HeaderLogo>
        <Nav />
        <HeaderUser>
          {
            isLoggedIn ? (
              <React.Fragment>
                <HeaderUserItem onClick={this._logout}>{t('logout')}</HeaderUserItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <HeaderUserItem onClick={() => this._login()}>{t('login')}</HeaderUserItem>
                <HeaderUserItem onClick={() => this._register()}>{t('register')}</HeaderUserItem>
              </React.Fragment>
            )
          }
        </HeaderUser>
        <div className="nav__lang-container">
          <div className="nav__lang">🌏</div>
          <div className="nav__lang-sub">
            <div onClick={() => i18n.changeLanguage('en')}>🇺🇸</div>
            <div onClick={() => i18n.changeLanguage('ko')}>🇰🇷</div>
          </div>
        </div>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  openModal: bindActionCreators(openModal, dispatch),
  closeModal: bindActionCreators(closeModal, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('header')(Header))