import React from 'react'

import Hero from './components/hero'
import Ceramics from './components/caramics-sec'
import Brandsec from './components/brand-sec'
import PopularProducts from './components/popularProducts'
import Bottom from './components/last-sec'


export default function Home() {
  return (
  <>
  <Hero/>
 
  <Ceramics/>
 <Brandsec/>

 <PopularProducts/>
 <Bottom/>
  
  
  </>
  )
}
