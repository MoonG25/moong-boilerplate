import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withNamespaces } from '../../i18n'


const HeaderNav = styled.div`
  display: flex;
  text-transform: uppercase;

  @media (max-width: 600px) {
    display: none;
  }
`

const HeaderNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,.4);
  }
`

const HeaderSubNav = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  justify-content: left;
  align-items: left;

  position: absolute;
  top: 45px;
  padding: 1em;
  width: 240px;

  background-color: hotpink;
  color: white;

  div {
    width: 100%;
    padding: 12px;
  }

  div:hover {
    background-color: pink;
    a {
      color: hotpink;
      font-weight: 800;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
`

class Nav extends React.Component<{t}> {

  state = {
    menus: [
      {
        title: 'platform',
        display: 'none',
        subs: [
          {
            href: '/platform/products',
            text: 'investment products'
          },
          {
            href: '/platform/offering',
            text: 'equity offering'
          },
          {
            href: '/platform/about',
            text: 'about the platform'
          },
          {
            href: '/platform/advantages',
            text: 'advantages for investors'
          },
        ]
      },
      {
        title: 'company',
        display: 'none',
        subs: [
          {
            href: '/company/about',
            text: 'about'
          },
          {
            href: '/company/roadmap',
            text: 'roadmap'
          },
          {
            href: '/company/contacts',
            text: 'contacts'
          },
          {
            href: '/company/blog',
            text: 'blog and press'
          },
        ]
      },
      {
        title: 'partnership',
        display: 'none',
        subs: [
          {
            href: '/',
            text: 'Login to access Continuous Contributor functionality'
          }
        ]
      },
      {
        title: 'support',
        display: 'none',
        subs: [
          {
            href: '/support/faq',
            text: 'faq'
          },
          {
            href: '/support/faq',
            text: 'ask a question'
          },
          {
            href: '/support/legal',
            text: 'legal documents'
          },
        ]
      },
    ]
  }

  private _showSubMenu = (m) => {
    const menus = this.state.menus.map(menu => {
      if (menu.title === m.title) {
        menu.display = 'flex'
      }
      return menu
    })
    this.setState({
      menus
    })
  }

  private _closeSubMenu = () => {
    const menus = this.state.menus.map(menu => {
      menu.display = 'none'
      return menu
    })
    this.setState({
      menus
    })
  }

  render() {
    const { menus } = this.state
    const { t } = this.props

    return (
      <HeaderNav>
        {
          menus.map(menu => {
            return (
              <HeaderNavItem key={menu.title} onMouseOver={() => this._showSubMenu(menu)} onMouseOut={this._closeSubMenu}>
                <div>{t(menu.title)}</div>
                <HeaderSubNav display={menu.display}>
                  {
                    menu.subs.map(sub => {
                      return (
                        <div key={sub.text}>
                          <Link href={sub.href}>
                            <a>{sub.text}</a>
                          </Link>
                        </div>
                      )
                    })
                  }
                </HeaderSubNav>
              </HeaderNavItem>
            )
          })
        }
      </HeaderNav>
    )
  }
}

export default withNamespaces('header')(Nav)