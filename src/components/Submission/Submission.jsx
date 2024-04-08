import React from "react";
import "./Submission.scss";
import filmFreeWayImg from "../../assets/SubmissionsPage/Picture1.png";
import googleDriveFolderImg from "../../assets/SubmissionsPage/Picture2.png";

const Submission = () => {
  return (
    <div className="submissions_wrapper">
      <h1>SUBMISSIONS - HOW TO PARTICIPATE</h1>
      <div className="submission_content">
        <div className="submission_imgs">
          <div>
            <img src={filmFreeWayImg} alt="" />
          </div>
          <div>
            <img src={googleDriveFolderImg} alt="" />
          </div>
        </div>
        <div className="submission_text">
          <ul>
            <li>
              <p>THE FILMS MUST BE ENTIRELY MADE BY SMARTPHONES! (any brand)</p>
            </li>
            <li>
              <p>
                Applicants (Independent film-makers or Youth Film Studio/Student
                Film Studios) may submit as many films as they like.
              </p>
            </li>
            <li>
              <p>Duration of the films - maximum 10 minutes, any genre.</p>
            </li>
            <li>
              <p>
                Age limit: 13-27. (The participants will be divided into two
                categories - 13-19 (teens) and students (20-27) )
              </p>
            </li>
            <li>
              <p>
                Applicants must send and register films at filmfreeway.com (our
                link is:
              </p>
              <a href="https://filmfreeway.com/nternationalYouthSmart-FilmFestivalCine-PhoneAdjara">
                filmfreeway.com
              </a>
              <p>fill and sign the following form:</p>
              <a href="">NEWEST GOOGLE FORM SHOULD BE ADDED HERE</a>
            </li>
            <li>
              <p>
                The works with the signed Entry Form must be sent to our address
                – cinephoneadjaraff@gmail.com
              </p>
            </li>
            <li className="keep-in-mind-text">
              <p>
                Keep in mind: You can edit your film on PC/Laptop, the main
                point is that you MUST film in on your SMARTPHONE, not ordinary
                photo/video camera!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submission;
