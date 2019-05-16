import React from 'react'
import Layout from '../../src/components/Layout'
import Background from '../../src/components/Background'
import { connect } from 'react-redux'
import { withNamespaces } from '../../i18n'

class BlogPage extends React.Component {

  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  render() {
    return (
      <Layout>
        <Background title="blog and press" subtitle="company" />
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('common')(BlogPage))