import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Link from 'next/link'

function BlogCard({blog}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Title>{blog.fields.title}</Card.Title>
                <Card.Text style = {{fontSize: '2vh'}}> {blog.fields.date} </Card.Text>
                <Card.Text style = {{fontSize: '2vh'}}> {blog.fields.tags.map((tag) => (<div> {tag}  </div>))} </Card.Text>
                <Card.Img variant="top" src={'https:' + blog.fields.featuredImage.fields.file.url} />
                <Card.Body>
                    
                    <Card.Text>
                    {blog.fields.featuredText}
                    </Card.Text>
                    <Card.Text>
                    <Link href = {'/blog/' + blog.fields.slug}> Читать Статью </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BlogCard
