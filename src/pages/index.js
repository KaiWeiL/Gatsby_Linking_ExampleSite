import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout/layout.js'

const IndexPage = () => {
  return (
      <Layout>
          <h1>Comparison Time!</h1>
          <h2>Click the different link to feel the difference</h2><br/>
          <div class="comp-link"><a href="./comparison">HTML anchor link</a></div><br/>
          <div class="comp-link"><Link to="/comparison">Gatsby Link</Link></div><br/>
      </Layout>
  )
}

export default IndexPage