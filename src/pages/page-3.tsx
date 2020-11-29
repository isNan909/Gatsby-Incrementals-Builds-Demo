// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { PageProps, Link } from "gatsby"
import Image from "../components/Image/Image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = (props: PageProps) => {
  const [imageSource] = useState([
    {
      file: "bg.png",
    },
    {
      file: "gatsby-astronaut.png",
    },
    {
      file: "gatsby-banner.png",
    },
    {
      file: "gatsby-icon.png",
    },
    {
      file: "jamstack.jpg",
    }
  ])
  return (
    <Layout>
      <SEO title="Page three" />
      <h1>Hi from the third page</h1>
      <p>Welcome to the third page({props.path})</p>
      {imageSource.map((e, i) => (
        <Image class="image-sample" filename={e.file} key={i} alt="image" />
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ThirdPage
