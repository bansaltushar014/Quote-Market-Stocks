import React from "react";
import styles from "./index.module.css";
import profilePic from "../../assets/profile-pic.png";
import Accordion from "../accordion";
import ContentWrapper from "../content-wrapper";

function About() {

  const dataAboutMe = [
    {
      title: "What I do?",
      content: "I work in sales since 2015. It's one of my passions and a career path so far. I am quite good at it too."
    },
    {
      title: "What else am I up to?",
      content: "Well, it's exploring and developing solid JS & React skills. I wanted to be able to create applications to aid me in my other interests, namely capital investing and financial markets."
    },
    {
      title: "Some facts about me I find interesting!",
      content: " <p> * I am an avid book reader. I enjoy autobiography books. The  latest one is this of Benjamin Franklin. </p> <br/> <p> * I am an amateur botanist. </p><br /> <p> * I am also a wannabe beekeeper (that's for some time in the future, when I am older).</p><br /> <p> * Lastly, I enjoy the occasional Techno festival. Rocking it to Marco Carola in Ibiza or Dubfire in Amsterdam is just... sick. Paco Osuna and Hot Since 82 also make the top. </p>"
    },
    {
      title: "What's with this project?",
      content: " <p> The original reason I wanted to create it was to have a personal  stock portfolio tracker for myself. </p><br />  <p>  In the process of writing the code I came up with the idea to try and showcase as much of the things I have learned in programming so far in order for it to serve and aid me in applying for jobs. </p><br /> <p> The code is written from scratch. I've used React and custom css. I was trying to showcase my usage of React hooks, Router, HTTP requests, etc. </p><br /> <p>  The market data is fetched from Alphavantage's API, whilst the contact form is making post requests to Firebase. </p><br /> <p> I am especially proud with the way the intuitive search bar came to be. In the future I will continue adding features and functionalities here to serve my needs. Such include various graphs showing historic price movements, P/L tracker and hopefully much more. </p>"
    },
    {
      title: "What is next?",
      content: "I want to make the design responsive is the first thing.Time will show afterwards."
    }
  ]

  const clicked = (index) => {
    console.log("Clicked One "+index);
  }


  return (
    
    <ContentWrapper title="About">
      <h3 className={styles.name}>Velizar Natovski</h3>
      <div className={styles["profile-pic"]}>
        <img src={profilePic} alt={"Velizar Natovski"} />
      </div>
      {
        dataAboutMe.map((item, index) => {
          return <Accordion 
          title={item.title}
          content={item.content}
          clicked={clicked}
          id={index}
          key={index}/>
        })
      }
      
    </ContentWrapper>
  );
}

export default About;

