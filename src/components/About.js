import React from 'react';
import SchoolCard from './AboutComponents/SchoolCard.js'
import LaxCard from './AboutComponents/LacrosseCard.js'
import HobbieCard from './AboutComponents/HobbiesCard.js'




export default function AboutGrid(){
  return (
    <div>
      <SchoolCard/>
      <LaxCard/>
      <HobbieCard/>
    </div>
  )


}
