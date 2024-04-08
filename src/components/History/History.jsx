import React, { useState } from "react";
import year2022 from "../../assets/HistoryPage/HistoryYearPhotos/history-2022.jpg";
import year2023 from "../../assets/HistoryPage/HistoryYearPhotos/history-2023.jpg";
import "./History.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const History = () => {
  const [isYear2022Collapsed, setIsYear2022Collapsed] = useState(false);
  const [isYear2023Collapsed, setIsYear2023Collapsed] = useState(false);

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
          We founded our festival in 2022 and it was held only locally. The name
          was simply "Adjarian News", which targeted the audience of mostly the
          children from our region. It proved its success, we got support from
          other regions and this year we decided to take a bold step and make it
          international. Even though we are almost newbies and the festival has
          existed for three years, we are ready to take the challenges and offer
          our original vision of Georgian Smart-Film Festival to the world.
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
              className={`collapse ${isYear2022Collapsed ? "collapsed" : ""}`}
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
                {isYear2022Collapsed ? (
                  <FontAwesomeIcon icon={faChevronLeft} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            <div
              className={`collapse ${isYear2023Collapsed ? "collapsed" : ""}`}
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
          <h2 className="history_year">2024</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default History;
