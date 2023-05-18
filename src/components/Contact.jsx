import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinImg from '../img/linkedin.jpg';
import GithubImg from '../img/github.jpg';
import InstaImg from '../img/instagram.jpg';


function contact() {
  return (
    <>
      <div className='  mx-[30vw] flex  flex-col justify-around md:flex-row md:gap-[4rem] md:mt-8 md:mx-[25vw]'>
        <div  >
          <a target = "_blank"  href="https://www.linkedin.com/in/nishu-nishant-33176b1b3/"
          >
            <img className='target:_blank h-[5rem] hover:h-[6rem] hover:rounded-full hover:shadow-2xl'  src={LinkedinImg} alt="linkedin Icon" />
          </a>
        </div>
        <div>
          <a target = "_blank" href="https://github.com/nishu0123">
            <img className='h-[5rem] hover:h-[6rem] hover:rounded-full hover:shadow-2xl' src={GithubImg} alt="Github Icon" />
          </a>
        </div>
        <div>
          <a target = "_blank" href="https://www.instagram.com/nishant9017/">
            <img className='h-[5rem] hover:h-[6rem] hover:rounded-full hover:shadow-2xl' src={InstaImg} alt="Insta Icon" />
          </a>
        </div>

      </div>
    </>
  )
}

export default contact