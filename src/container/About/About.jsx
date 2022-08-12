import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { AppWrap } from '../../wrapper'


const small_description = `I'm self taught web developer with a great passion for creating beautiful websites. Powered by React VS Code and Coffee.`
const description = [
  "I’ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code.As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.",
  "Download my resume(.pdf) below!"
]
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'Tailwind', 'Node.Js', 'Express.js', 'RestAPI', 'Python', 'GIT & GitHub', 'SQL', 'MongoDB']

function About() {

  // const resume_location = '../../assets/Resume/Sayantan_majee_resume.pdf'
  
  return (
    <>
      <div className="app__about-header">
        <h1 className='head-text about-heading'>About Me</h1>
        <div className='app__horizontal-bar'/>
        <p className='p-text about_info'>{small_description}</p>
      </div>
      <div className='app__about-body'>
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          className="about-more">
          <h2>Get to know me!</h2>
          <div className="about_body-content">{description.map((item) => {
            return <p className='p-text'>{item}</p>
          })}</div>
          <a className="p-text generic_btn" target="__blank" download href="/#">Resume</a>
          {/* <a className="p-text generic_btn" href="./#Contact">Download</a> */}
        </motion.div>

        <motion.div
          whileInView={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          className="about-skils">
          <h2 className="skills-heading">My Skills</h2>
          <div className="skills">
            {skills.map((skill_item) => {
              return <div className="p-text skill-item">{skill_item}</div>
            })}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(About,"About", 'app__about');