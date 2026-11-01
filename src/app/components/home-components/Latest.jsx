import React from 'react'
import Cards from '../common/Cards'

export default function Latest() {
  return (
    <section className='bg-lime-50 py-10'>
      <h2 className='text-2xl font-bold text-center text-black'>Latest Updates</h2>
      <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        <Cards product="Product 1"/>
        <Cards product="Product 2"/>
        <Cards product="Product 3"/>
        <Cards product="Product 4"/>
      </div>
    </section>
  )
}
