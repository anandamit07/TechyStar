import React from 'react'
import vg from "../assets/2.webp"
const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems.</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems
                you face everyday. We are leading tech company whose aim is to 
                increase problem solving ability in children.
            </p>
        </div>
    </div>
    <div className='home3'>
        <div>
            <h1>Who we are</h1>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged.</p>
        </div>
    </div>
    </>
  )
}

export default Home