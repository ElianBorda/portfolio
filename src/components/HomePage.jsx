import React, { useEffect, useState } from 'react'
import Introduction from './Introduction'
import BGAnimate from './BGAnimate'

const HomePage = () => {

  return (
    <div className='base-page'>
        <Introduction />
        <BGAnimate />
        <div className='base-nav'></div>
        <div className='base-body'>
            <div className='base-content'>
              <div className='presentation'>
                  <div>
                    <h2>Hi, i'am</h2>
                    <h1>Elian Borda</h1>
                    <p>Software Engineer</p>
                  </div>
                  
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default HomePage