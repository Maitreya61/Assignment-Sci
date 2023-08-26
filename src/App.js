import React from 'react'
import "./App.css"
import institutes from './institutes'
import SliderComponent from './slider'

const App = () => {


  return (
    <div className='main-container'>
      <div className='main-title'>
      <h2>Team Page</h2>
    </div>
    <div className='caption'>
      <h3>Learn from the scientists, research scholars from the top institutes in the world</h3>
    </div>
    <div className='logo-container'>
      {
        institutes.map((institutes)=>{
          return(
            <div key={institutes.id} className='logo'>
        <img src={institutes.image} alt="logo" className='logo-image' />
      </div>
          )
        })
      }
      <div className='logo'>
        <p>And Many more...</p>
      </div>
    </div>
    <div className='mentors-title'>
      <h2>Meet your mentors</h2>
    </div>
    <div className='team'>
      <h3>Biology</h3>
      <SliderComponent/>
    </div>
    <div className='team'>
      <h3>Physics</h3>
      <SliderComponent/>
    </div>
    <div className='team'>
      <h3>Mathematics</h3>
      <SliderComponent/>
    </div>
    <div className='team'>
      <h3>Chemistry</h3>
      <SliderComponent/>
    </div>
    <div className='advisor'>
      <div>
      <h2>Mentor & Advisor</h2>
        <img src="pngegg.png" alt="mentor" />
        <h3>Dr. Omkar</h3>
        <h4>Principal Project Scientist at Indian Institute of Technology, Madras</h4>
      </div>
      <div>
      <img src="pngegg.png" alt="mentor" />
        <h3>Akhil Tripati</h3>
        <button>Message him now</button>
      </div>
      <div>
      <img src="pngegg.png" alt="mentor" />
        <h3>Vivek Drivedi</h3>
        <button>Message him now</button>
      </div>
    </div>
    </div>
  )
}

export default App
