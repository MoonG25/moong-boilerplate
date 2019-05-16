import React from 'react'
import { withNamespaces } from '../i18n'

// components
import Layout from '../components/Layout'

class EditorPage extends React.Component {
  static async getInitialProps({ req }) {
    return {
      namespacesRequired: ['common']
    }
  }

  render() {
    return (
      <Layout t={this.props.t}>
        <div className="container flex">
          <h1>Editor Page</h1>
        </div>
      </Layout>
    )
  }
}

export default withNamespaces('common')(EditorPage)