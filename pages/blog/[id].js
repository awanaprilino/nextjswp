import axios from 'axios'
import { Component } from 'react'
import Head from 'next/head'
import Header from '../layouts/header'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'
import Body from '../layouts/body'

const Post = props => {
    console.log(props.posts)
    return (
        <div>
            <Head>
                <title>Post Page</title>
            </Head>
            <Header />
            <Container className="mt-3">
                <h1>{props.posts.title.rendered}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.posts.content.rendered
                    }}
                />
            </Container>
        </div>
    )
}

Post.getInitialProps = async (context) => {
    const id = context.query.id
    // Make request for posts.
    const response = await axios.get(`https://www.theblogstarter.com/wp-json/wp/v2/posts?slug=${id}`)

    // Return response to posts object in props.
    return {
        posts: response.data[0],
    }
}

export default Post