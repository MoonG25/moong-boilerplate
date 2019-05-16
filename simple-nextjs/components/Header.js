import React from 'react'
import styled from 'styled-components'

import { i18n } from '../i18n'

import LanguageBox from './LanguageBox'

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: #96333f;
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <div>
          <p>LIVING CORAL</p>
        </div>
        <LanguageBox language={i18n.language} onChangeLanguage={(language) => i18n.changeLanguage(language)} />
      </HeaderContainer>
    )
  }
}