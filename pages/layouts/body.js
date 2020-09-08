import { Card, Button, Container } from "react-bootstrap"
import React, { Component } from 'react';
import Link from "next/link";

class Body extends Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title><Link as={`/blog/${this.props.slug}`} href="/blog/[id]">{this.props.title}</Link></Card.Title>
                    <Card.Text>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.props.excerpt
                            }}
                        />
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card >
        )
    }
}
export default Body