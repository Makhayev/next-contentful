import React from 'react'
import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})


export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blog'
    })

    const paths = res.items.map(item => {
        return {
            params: {blog: item.fields.slug}
        }
    })


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'blog',
        'fiels.slug': params.slug
    })
    return {
        props: {
            blog: items[0] 
        }
    }
}


function blog({blog}) {
    
    console.log(blog)
    return (
        <div>
            <h2> {blog.fields.title} </h2>
            <div> {blog.fields.date} </div>
            <p> {blog.fields.featuredText} </p>
            
            <hr style = {{width: '50vw', marginLeft: '25vw'}}/>
            
            <div> {documentToReactComponents(blog.fields.text)} </div>
        </div>
    )
}

export default blog
