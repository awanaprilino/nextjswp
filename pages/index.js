import React from "react";
import Header from "./layouts/header";
import Body from "./layouts/body";
import Head from "next/head";
import { Component } from 'react'
import axios from 'axios'
import { Container } from "react-bootstrap";

export default class Index extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get('https://www.theblogstarter.com/wp-json/wp/v2/posts')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (<>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <Container className="mt-3">
        {
          this.props.posts.map(post => {
            return (<Body key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} slug={post.slug} id={post.id} />)
          })}
      </Container>
    </>
    )
  }
}