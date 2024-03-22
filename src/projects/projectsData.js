import studyscape from '../images/studyscape.png';
import bitewise from '../images/bitewise.png';
import spellbuddy from '../images/spellbuddy.png';
import ummah from '../images/ummah.png';
//import portfolio from '../images/portfolio.png';
import uscmap from '../images/westernuscmap.png'

const projects = {
  1: { title: "Bitewise",
  subtitle: "UI/UX Design & Design Thinking", 
  description: (
    <>
    <p>
    Bitewise is a social-focused mobile application tailored for individuals with dietary restrictions and allergies. It simplifies the search for safe dining options, provides an array of socially vetted recipes, and connects users to a supportive network. 
    The app embodies a seamless integration of user experience design and thoughtful features, making dining and socializing with dietary restrictions an easier and more enjoyable experience.
    </p>
    </>
  ),
  casestudy: 'https://www.behance.net/gallery/193664761/BiteWise',
  figma: 'https://www.figma.com/file/ja2L9fPbM38G95BWeY4Czp/BiteWise?type=design&node-id=0%3A1&mode=design&t=CsWhdXC6afgUCik5-1',
  image:bitewise,
  },
  2: { title: "Spellbuddy",
  subtitle: "UI/UX Design & Software Developer", 
  description: (
    <>
    <p>
    SpellBbddy is a standalone application that helps people quickly find and fix spelling mistakes in their texts and web files. 
    It's easy to use, runs fast, and lets users add their own words to avoid mistakes. 
    Perfect for anyone who writes, it saves time and makes writing clearer and more accurate.
    </p>
    </>
  ),
  github: 'https://github.com/joudlahham/spellbuddy',
  figma:'https://www.figma.com/file/9f0OJV6muuMAzTD8tgseKD/SpellBuddy?type=design&node-id=0%3A1&mode=design&t=zcr7EPPCSnzfT7hG-1',
  casestudy: 'https://www.behance.net/gallery/192198199/SpellBuddy',
  image: spellbuddy,
  },
  3: {
    title: "ummah - WIP",
    subtitle: "UI/UX Design & Full-Stack Developer", 
    description: (
      <>
      <p>
        A web application to connect people locally, facilitating professional networking and community engagement. 
        Providing a free, user-friendly space to find and share professional contacts, emphasizing authenticity
        and regional search capabilities to serve the unique needs of local communitie
      </p>
      </>
    ),
    github: "https://github.com/joudlahham/ummah",
    figma: "https://www.figma.com/file/29j6z3uwmeApNkdCceoT7g/Ummah?type=design&node-id=0%3A1&mode=design&t=pP87V7ei9REXQfS8-1",
    image: ummah,

  },
 /* 4: {
    title: "My Portfolio Website",
    description: (
      <>
      <p>
      A responsive website that uses ReactJS, HTML, and CSS to showcase my work and design ability.
        </p>
      </>
    ),
    github: "https://github.com/joudlahham/portfolio",
    image: portfolio,
    imageClass: 'small-image'
  },
  */
  4: {
    title: "Interactive Map of Western USC",
    subtitle: "Frontend Developer", 
    description: (
      <>
        <p>
        The USC Interactive Map is an online tool that combines React, Three.js, and Bootstrap to create an engaging and easy-to-navigate building map. 
        It's designed to help students, faculty, and visitors explore the University Community Centre with ease, providing a seamless and interactive experience. 
        Whether you're looking for a specific USC service or find a classroom, this map puts the entire building at your fingertips.
        </p>
      </>
    ),
    github: "https://github.com/joudlahham/westernuscmap",
    demo: "https://westernusc-map.ca/",
    image: uscmap,
    imageClass: 'small-image'
  },
  5: {
    title: "StudyScape",
    subtitle: "UI/UX Design & Frontend Developer", 
    description: (
      <>
        <p>
         StudyScape is a virtual productivity hub designed to elevate students' at-home learning experience.
         With features like a customizable calendar, a Pomodoro timer, and task prioritization tools, it aims to enhance focus and organization. 
         The project encapsulates a thoughtful design process, intuitive UX/UI, and smart integrations, fostering a conducive environment for academic success.
        </p>
      </>
    ),
    github: "https://github.com/joudlahham/studyscape",
    casestudy: "https://www.behance.net/gallery/141559391/StudyScape-Case-Study",
    figma: "https://www.figma.com/proto/7lLdYuMJ4rTDSfuE87s55N/StudyScape-Case-Study?node-id=15-818&scaling=scale-down",
    image: studyscape,
  },
};

export default projects;
