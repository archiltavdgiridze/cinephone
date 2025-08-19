import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import year2022 from "../../assets/HistoryPage/HistoryYearPhotos/history-2022.jpg";
import year2023 from "../../assets/HistoryPage/HistoryYearPhotos/history-2023.jpg";
import "./History.scss";

const History = () => {
  const [isYear2022Collapsed, setIsYear2022Collapsed] = useState(true);
  const [isYear2023Collapsed, setIsYear2023Collapsed] = useState(true);

  const toggleYear2022Collapse = () => {
    setIsYear2022Collapsed(!isYear2022Collapsed);
  };

  const toggleYear2023Collapse = () => {
    setIsYear2023Collapsed(!isYear2023Collapsed);
  };

  return (
    <div className="history_wrapper">
      <div className="festival_history">
        <h1>History of the festival</h1>
        <p>
          Inspired by the revolutionary possibilities of ever-advancing
          smartphones, we founded the celebration of smartphone-made films back
          in 2022, hoping to unite the youth who express their cinematographic
          ideas with the simplest gadgets.
        </p>
        <p>
          We founded our festival in 2022. It was held only locally, focusing on
          local talents. The name was simply "Adjarian News", which targeted the
          audience of mostly the children from our region. It immediately proved
          its success, we got support from other regions and the following year
          we decided to take a bold step and reach our voice to a broader
          audience by making the festival international and attracting foreign
          audiences and talents.
        </p>
        <p>
          2023 edition attracted youth from more than 15 other countries,
          including Ukraine, Iran, France, India etc. The number of submissions
          also grew by 300%. We got more support from local and national
          sponsors, more attention from national media and audiences.
        </p>
        <p>
          In 2025, we are aiming to go broader and include even more talents and
          international audiences, by including international jury members and
          more workshop/masterclasses.
        </p>
        <p>
          Even though we are almost newbies and the festival has existed for
          three years, we are ready to take the challenges and offer our
          original vision of Georgian Smart-Film Festival to the world!
        </p>
        <p>
          So grab your phone, click ,,Record", create your smart-magic and share
          it with us!
        </p>
      </div>
      <div className="history_by_years">
        <div className="year2022">
          <div className="year_texts">
            <div className="num_n_btn">
              <h2 className="history_year">2022</h2>
              <button onClick={toggleYear2022Collapse}>
                {isYear2022Collapsed ? (
                  <FontAwesomeIcon icon={faChevronLeft} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            <div
              className={`collapse-content ${
                isYear2022Collapsed ? "collapsed" : ""
              }`}
            >
              <p>
                THE FIRST FESTIVAL WAS HELD LOCALLY . IT WAS CALLED "ADJARIAN
                NEWS" AND THERE WERE 19 FILMS IN THE FINALE. THE AUTHORS OF THE
                FILM RECEIVED VARIOUS NOMINATIONS, THE FESTIVAL EXCEEDED ALL
                EXPECTATIONS AND DREW A HUGE ATTENTION IN THE REGION. THE
                FESTIVAL WON THE GRANT COMPETITION OF THE MINISTRY OF EDUCATION,
                CULTURE AND SPORT OF ADJARA. SINCE THEN, THE FESTIVAL HAS THE
                SUPPORT OF LOCAL AND NATIONAL MINISTRIES AND ORGANIZATIONS. THE
                MAIN FINANCIAL SUPPORTER IS SHUAKHEVI CITY HALL.
              </p>
            </div>
          </div>
          <img src={year2022} alt="photo from the festival from 2022" />
        </div>
        <div className="year2023">
          <div className="year_texts">
            <div className="num_n_btn">
              <h2 className="history_year">2023</h2>
              <button onClick={toggleYear2023Collapse}>
                {isYear2023Collapsed ? (
                  <FontAwesomeIcon icon={faChevronLeft} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            <div
              className={`collapse-content ${
                isYear2023Collapsed ? "collapsed" : ""
              }`}
            >
              <p>
                THE SECOND FESTIVAL STEPPED UP TO AN INTERNATIONAL LEVEL . OUT
                OF DOZENS FILMS, 19 YOUNG FILMMAKERS FROM 6 COUNTRIES MADE IT
                INTO THE FINALE. (GEORGIA, UKRAINE, IRAN, JAPAN, FRANCE, INDIA).
                THE AUTHORS OF THE FILM RECEIVED VARIOUS NOMINATIONS. DUE TO AN
                EXCEPTION, BOTH OF THE GRAN-PRIX WENT TO FICTION FILMS. THE
                FESTIVAL STARTED TO ATTRACT INTEREST FROM OTHER COUNTRIES AND
                GAINED EVEN MORE SUPPORT NATIONALLY. THE FESTIVAL, THIS YEAR
                AGAIN, WON THE GRANT COMPETITION OF THE MINISTRY OF EDUCATION,
                CULTURE AND SPORT OF ADJARA.
              </p>
            </div>
          </div>
          <img src={year2023} alt="photo from the festival from 2023" />
        </div>
        <div className="year2024">
          <h2 className="history_year">2025</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default History;
