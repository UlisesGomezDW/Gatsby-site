import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/logo"
const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi, I'm Gatsby ✌️</h1>
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default About
