import React from "react";
import './AboutUs.scss'
import hero1 from '../../assets/other/AFT_logo.png'
import hero2 from '../../assets/aboutUs/hero2.jpg'
import hero3 from '../../assets/aboutUs/hero3.jpg'
import hero4 from '../../assets/aboutUs/hero4.jpg'
import hero5 from '../../assets/aboutUs/hero5.jpg'
const AboutUs = () => {
  return (
    <div className="about_us">
      <h2>About Us</h2>
      <div className="hero">
        <div className="hero_half">
          <img src={hero1} alt="..." />
        </div>
        <div className="hero_half vertical">
          <p>
            We are “Adjarian Film Tales” (previously known as "CinePhone-Adjara") - an International Youth Smart-Film Festival based in the
            picturesque mountainous region of Adjara, Shuakhevi, the region of country of Georgia (in Europe),
            where we celebrate the rising and thriving "smart- possibilities" of the magical world and industry of cinema created by smartphones and modern technology since 2022.
          </p>
          <p>
            Now that the leading smartphone companies have introduced super-smart gadgets that accompany us everyday, this also revolutionized the new ways of
            creating modern art, including the film-world as well, enhancing its technological abilities. We have been seeing countless amazing and jaw-dropping works, both from amatuer and acclaimed
            directors, who have shot their films not on big and heavy cameras but "small" smartphones that modern humanity carries in their hands every day.
          </p>
        </div>
      </div>
      <div className="hero">
        <div className="hero_half">
          <p>
            It goes without saying that nothing will beat the true magic of cinema created by big film cameras but we believe that something new and exciting might exist along with the original formidable first-source.
            We believe that Art and Cinema is universal and democratic and that anyone can create magic and tell an interesting story of their vision - with the help of a typical, ordinary smartphone.
          </p>
        </div>
        <div className="hero_half">
          <img src={hero2} alt="..." />
        </div>
      </div>
      <div className="hero">
        <div className="hero_half">
          <img src={hero3} alt="..." />
        </div>
        <div className="hero_half">
          <p>
            Another reason as to why are we doing this: <br />
            The place where we are located, Shuakhevi, is a mountainous region of Adjara, which is far from the administrative center of the region. Therefore modern culture is not too advanced or developed here. The main reason why we are arranging this festival is to popularize cinema, smart-cinema made by smartphones and give talented kids the chance to express themselves with the easiest available technology, AKA simple smartphones. We believe that Art and Cinema are universal and democratic and that anyone can create magic and tell an interesting story of their vision - with the help of a typical, ordinary smartphone.
            We have youth who are interested in cinema and want to make films but don't have the right technology or resources for it. We want to help them and give them the chance to do this with smartphones and smart-films.
          </p>
        </div>
      </div>
      <div className="hero">
        <div className="hero_half">
          <p>
            Before the festival is held, we go to schools, hold informative lectures and meetings, tell the kids that we arrange such kind of event/festival and prepare them for the festival. We would like to show not
            only cinema and smart-films to these kids, but also raise the cinema/art-awareness and spread the possibilities even with the easiest technological support such as smartphones.
          </p>
        </div>
        <div className="hero_half">
          <img src={hero4} alt="..." />
        </div>
      </div>
      <div className="hero">
        <div className="hero_half">
          <img src={hero5} alt="..." />
        </div>
        <div className="hero_half">
          <p>
            With this festival, we are on our journey to participate in the development of this new cinema-chapter in our small, beautiful part of Adjara and bring our value and approach to it on an 
            international level, based on both Georgian and foreign smart-films and also develop cinematographic opportunities and popularize cinema in our small mountainous region.
          </p>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;
