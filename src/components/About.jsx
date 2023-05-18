import React from 'react'
import Img from '../img/Profile_img.jpeg'

function About() {
  return (
    <div>


      <div class="flex flex-col gap-[1rem] mx-2 mt-2 md:mx-4 md:flex-row">
        <div className="w-full md:w-1/2"><img className='h-[50vh] w-[50vh] m-auto rounded-full md:h-[20rem] md:w-[20rem] md:mt-8' src={Img} alt="profile image" />
        </div>
        <div class="w-full md:w-1/2 mt-[4rem] text-left md:mx-[2rem] lg:mx-[6rem]">
          I am computer science engineer graduated in 2023 from IIEST Shibpur.

          Talking about my Technical skills , I am skilled in Data structure and Algorithms. I have solved more than 700 problems on Leetcode . I am 3* coder at codechef. I have solved more than 500 problems on GeekForGeeks as well.I have also worked on 
          web development project that include E-commerce website and user management system.


          Talking about my interpersonal skills, i am good at communication skills and working in a team.
          

          
        </div>
      </div>
    </div>

  )
}

export default About