import React from 'react'
import styled from 'styled-components'

// components
import Layout from '../components/Layout'
import Box from '../components/Box'
const BlockContainer = styled.div`
  height: 75px;
`
const FlexContainer = styled.div`
  display: flex;
  flex-flow: ${props => props.direction} wrap;
  justify-content: space-around;

  width: 80%;
  margin: 0 auto;
`

// This is our initialised `NextI18Next` instance
import { withNamespaces, i18n } from '../i18n'

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {
      userAgent,
      namespacesRequired: ['common']
    }
  }

  componentDidMount() {
    console.log(i18n.language)
  }

  render() {
    const list = [
      { href:"/", flex:"1" },
      { href:"/", flex:"2" },
      { href:"/", flex:"2" },
      { href:"/", flex:"1" },
      { href:"/", flex:"1" },
      { href:"/", flex:"1" },
      { href:"/", flex:"1" }
    ]
    return (
      <Layout t={this.props.t}>
        <BlockContainer />
        <FlexContainer direction="row">
          {
            list.map(({href, flex}, i) => <Box key={i} href={href} flex={flex}>{i}</Box>)
          }
        </FlexContainer>
        <FlexContainer direction="column">
          {
            list.map(({href, flex}, i) => <Box key={i} href={href} flex={flex}>{i}</Box>)
          }
        </FlexContainer>
      </Layout>
    )
  }
}

export default withNamespaces('common')(IndexPage)