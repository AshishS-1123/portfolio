import React, { useState } from 'react'
import PropTypes from 'prop-types'

import YearHolder from 'components/YearHolder/Loadable'
import YearInfoHolder from 'components/YearInfoHolder/Loadable'
import NavArrows from 'components/NavArrows/Loadable'

const year_data = [
  {
    year: 2016,
    meta: "10th standard",
    data: [
      "This year is the first major landmark in my journey till now.",
      "I gave my board exams and scored 9.8 CGPA.",
      "This was my first skirmish with the competitive world.",
      "I had no idea what programming or web development was, but I was still a nerd and read a lot of story books."
    ]
  },
  {
    year: 2018,
    meta: "12th standard",
    data: [
      "In 12th, I chose Science as the branch where I would make my career. This was a very easy decision for me, as I was a math geek back then.",
      "I scored a whooping 94.2%, the highest score in my batch. I also broke the school record.",
      "I gave a couple of competitive exams- JEE Main, JEE Advanced and MHT-CET."
    ]
  },
  {
    year: 2019,
    meta: "1st Year",
    data: [
      "Aah, my first year of college. This was my first time living alone",
      "I din't do much in this year. Basically just adjusting to my new lifestyle and college.",
      "But I did learn my first programming language, C.",
      "I also joined a social service club called Unnat Bharat Abhiyan, did a lot of good work, but quit eventually."
    ]
  },
  {
    year: 2020,
    meta: "2nd Year",
    data: [
      "This is when programming finally clicked for me.",
      "I participated in the E-Yantra Robotics Competition in a team of 4. We had to make a line following robot with a pick-and-place mechanism.",
      "I did the embedded programming and designed a path finding algorithm",
      "The more coding I did, the more I enjoyed it. Eventually, I found my way to competitive programming."
    ]
  },
  {
    year: 2021,
    meta: "3rd Year",
    data: [
      "By this time, I had a good grasp on programming basics, but I wanted to do more. I wanted to make actual softwares.",
      "I tried out a couple of domains- Machine Learning, Image Processing, etc. but none of them felt natural to me.",
      "Halfway through my 3rd year, I started making Open Source Contributions. I started small and made some contributions to pythonRLSA and pymaze."
    ]
  },
  {
    year: 2022,
    meta: "4th Year",
    data: [
      "In my finaly year, I went into hyper programming mode.",
      "I made several sizeable contributions to Akira and learnt about OOP, software development and team work.",
      "I also learnt ReactJS, made several projects and have zeroed in on Web Development as my ideal career choice.",
      "Looking forward to getting a good job!"
    ]
  }
]

const container_style = {
  background: "#16161655",
  width: "60vw",
  height: "63vh",
  margin: "2vw auto",
  borderRadius: "8px",
  boxShadow: "0px 5px 19px 0px black"
}

function TimelineContainer() {

  const [activeYear, setActiveYear] = useState(5)

  return (
    <div style={container_style}>
      <YearHolder year={year_data[activeYear].year}/>
      <YearInfoHolder
        yearMeta={year_data[activeYear].meta}
        yearInfo={year_data[activeYear].data}
      />
      <NavArrows />
    </div>
  )
}

export default TimelineContainer
