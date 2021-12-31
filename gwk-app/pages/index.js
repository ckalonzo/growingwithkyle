import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import { getAllPostsForHome, getAllPages } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Nav from '../components/nav'
import LeadPromo from '../components/lead-promo'

import Features from '../components/features'
import ProductList from '../components/productList'
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const allPages = await getAllPages()
  return {
    props: { allPosts, preview,allPages },
  }
}

export default function Home({ allPosts: { edges }, preview, allPages }) {
  const heroPost = edges[0]?.node
  
  const morePosts = edges
  const pages = allPages
  return (<>
  <Layout preview={preview}>
    <Head>
      <title>{CMS_NAME}</title>
    </Head>
    <Nav />
    <LeadPromo />
    <Container>
      <Features />
         <ProductList />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  </Layout>
</>)
}
