import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import { getAllPostsForHome, getAllPages, getLatestTenProducts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Nav from '../components/nav'
import LeadIntro from '../components/lead-intro'

import Features from '../components/features'
import ProductList from '../components/productList'
import Newsletter from '../components/newsletter'
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const allPages = await getAllPages()
  const products = await getLatestTenProducts()
  return {
    props: { allPosts, preview,allPages,products },
  }
}

export default function Home({ allPosts: { edges }, preview, allPages, products }) {
  const heroPost = edges[0]?.node
  
  const morePosts = edges
  const pages = allPages
  const allProducts = products
  
  return (<>
  <Layout preview={preview}>
    <Head>
      <title>{CMS_NAME}</title>
    </Head>
    <Nav />
    
    <Container>
    <LeadIntro />
      <ProductList {...products}/>
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      <Newsletter />
    </Container>
  </Layout>
</>)
}
