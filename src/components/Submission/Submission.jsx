import React from "react";
import "./Submission.scss";
// import filmFreeWayImg from "../../assets/SubmissionsPage/Picture1.png";
import googleDriveFolderImg from "../../assets/SubmissionsPage/Picture2.png";

const Submission = () => {
  return (
    <div className="submissions_wrapper">
      <h1>SUBMISSIONS - HOW TO PARTICIPATE</h1>
      <div className="submission_content">
        <div className="submission_imgs">
          {/* <div>
            <img src={filmFreeWayImg} alt="" />
          </div> */}
          <div>
            <img src={googleDriveFolderImg} alt="" />
          </div>
        </div>
        <div className="submission_text">
          <ul>
            {/* 

- Applicants (Independent film-makers or Youth Film Studio/Student Film Studios) may submit as many films as they like.


- Age limit: 13-29. (The participants will be divided into two categories - 13-19 (teens) and students (20-29) )

- Applicants must fill out the google form here:

https://docs.google.com/document/d/1_Wbv635JRhd87VcjrFArw6ycTfFQPJH8/edit

and send the filled and signed form along with the High-quality MP4 
version of the films to our mail: cinephoneadjaraff@gmail.com

- Keep in mind: You can edit your film on PC/Laptop, the main point is 
that you MUST film in on your SMARTPHONE, not ordinary photo/video 
camera! */}
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
                Age limit: 13-29. (The participants will be divided into two
                categories - 13-19 (teens) and students (20-29) )
              </p>
            </li>
            <li>
              <p>Applicants must fill out the google form here:</p>
              <a href="https://docs.google.com/document/d/1_Wbv635JRhd87VcjrFArw6ycTfFQPJH8/edit">
                Google Forms
              </a>
              <p>
                and send the filled and signed form along with the High-quality
                MP4 version of the films to our mail:
                cinephoneadjaraff@gmail.com
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
