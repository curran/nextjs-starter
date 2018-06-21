import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout
        title='Next.js Starter'
        lang={this.props.lang}
        session={this.props.session}
      >
      </Layout>
    )
  }
}
