import React from 'react'
import ItemCardContainer from '../components/ItemCardContainer/ItemCardContainer'


export default function HomeAndCategories({sectionHeading}) {
  return (
    <>
      <h1 className="text-center m-2 text-lg">{sectionHeading}</h1>
      <ItemCardContainer />
    </>
  )
}
