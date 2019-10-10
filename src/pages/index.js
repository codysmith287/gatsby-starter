// @flow

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <Link to="/page-2/" style={{ marginRight: `1.45rem` }}>
        Go to page 2
      </Link>
      <Link to="/emotion-example/">Emotion CSS Example page</Link>
    </div>
  </Layout>
)

export default IndexPage
