import React from 'react'
// The Storyblok Client
import Storyblok from '../lib/storyblok'
import DynamicComponent from '../components/DynamicComponent'
import Header from '../components/Header'
 
export default function Home(props) {
  const story = props.story
  return (
    <div>
      <Header />
      <DynamicComponent blok={story.content} />
    </div>
  )
}
 
export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home'
  // load the published content outside of the preview mode
  let sbParams = {
    version: 'published', // or 'draft'
  }
 
  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = 'draft'
    sbParams.cv = Date.now()
  }
 
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)
 
  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  }
}