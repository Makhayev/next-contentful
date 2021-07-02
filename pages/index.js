import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {createClient} from 'contentful'
import BlogCard from '../components/BlogCard'
import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'




export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })


  const res = await client.getEntries({content_type: 'blog'})


  return {
    props: {
      blogs: res.items
    }
  }
}



export default function Home({blogs}) {

var arr = []

for (let i = 0; i < blogs.length; i += 4) {
  let tempArr = blogs.slice(i, i + 4)
  console.log(tempArr)
  arr.push(tempArr)
}
  console.log(arr)
  const [count, setcount] = useState(0)
  // console.log(blogs)
  return (
    <div>
    

      <Container fluid>
        
        {arr.map((blog) => (
          

          <Row className = 'justify-content-xs-center'>
            
            {blog.map((entry) => (
              <Col sm = {3} key = {entry.sys.id}>

                <BlogCard blog = {entry} />
                <br>
                </br>
              </Col>
            ))}
            </Row>
          
          
        ))}
        

        {/* <Row className = 'justify-content-xs-center'>
          
          {blogs.map((blog) => (
            <Col>
            <BlogCard key = {blog.sys.id} blog = {blog} /> 
            
            </Col>
            
          ))}
          
        </Row> */}
      </Container>

      
    
    
    </div>
  )
}
