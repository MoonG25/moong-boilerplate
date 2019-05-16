import React from 'react'
import Layout from '../../src/components/Layout'
import Background from '../../src/components/Background'
import { connect } from 'react-redux'
import { withNamespaces } from '../../i18n'

class AdvantagesPage extends React.Component {

  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  render() {
    return (
      <Layout>
        <Background title="advantages for investors" subtitle="platform" />
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('common')(AdvantagesPage))