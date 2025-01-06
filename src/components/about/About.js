import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'
import Flag from '../../images/logos/flag.png'
import My8bit from '../../images/8bit.png'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
          <h2>Who am I?</h2>
<p >
  I'm Rahul{' '}
  <span className='' style={{ position: 'relative', bottom: "-15px"}} role="img" aria-label="smile">
   <img src={My8bit} height={50} width={50} alt="8bit" />
  </span>{' '}
</p>
<p>
  <span role="img" aria-label="lightning">
    ⚡
  </span>{' '}
  I'm a Fullstack Developer with a strong focus on Front-End web development and backend technologies, with expertise in React and Node.js.
</p>
<p>
  <span role="img" aria-label="lightning">
    ⚡
  </span>{' '}
  You can find me working with technologies like React, Node.js, Redux, Tailwind, Material UI, TypeScript,  Angular, and AWS.
</p>
<div className="typewriter">
  <p className="typewriter-start">
    <span role="img" aria-label="lightning">
      ⚡
    </span>{' '}
    I love
  </p>
  <Typewriter
    options={{
      strings: [
        'building innovative solutions',
        'learning new technologies',
        'solving challenging problems',
        'collaborating with my team',
        'experimenting with modern tech stacks',
        'sharing knowledge',
        'creating user-friendly applications',
      ],
      autoStart: true,
      loop: true,
    }}
  />
  <p>.</p>
</div>
<p>
  Since 2014 - I've dedicated my time to mastering both front-end and back-end technologies. My journey has led me to work with{' '}
  <Link
    className="textLink"
    to="projects"
    spy={true}
    smooth={true}
    duration={500}
  >
    exciting projects
  </Link>
  , collaborate with{' '}
  <Link
    className="textLink"
    to="experience"
    spy={true}
    smooth={true}
    duration={500}
  >
    fantastic teams
  </Link>
  , and contribute to impactful solutions.
</p>

            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
             
              <p> <img src={Flag} height={13} width={26} alt="Flag" />  London, UK  </p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
