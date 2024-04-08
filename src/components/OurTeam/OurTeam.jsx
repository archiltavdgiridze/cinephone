import React from "react";
import "./OurTeam.scss";
import staff_vakho from "../../assets/OurTeam/staff/staff-vakho.png";
import staff_eter from "../../assets/OurTeam/staff/staff-eter.png";
import jury_grisha from "../../assets/OurTeam/jury/jury_grisha.png";
import jury_natia from "../../assets/OurTeam/jury/jury_natia.jpg";
import jury_nino from "../../assets/OurTeam/jury/jury_nino.jpg";


const OurTeam = () => {
  return (
    <div className="our_team_wrapper">
      <div className="our_team_bg"></div>
      <div className="our_team_main_header">
        <h1>Our Team</h1>
        <p>
          The festival was founded by a journalist and film-aficionado Vakho
          Gograchadze, <br />
          who put his heart and soul into the project and is determined to bring
          smart-cinema to the youth in Adjara region and make a statement in the
          global smart-film industry.
        </p>
      </div>
      <section className="staff_section">
        <h2>Staff</h2>
        <div className="staff_wrapper">
          <div className="staff">
            <div className="staff_img">
              <img
                src={staff_vakho}
                alt="staff member of Adjarian Film Festival, Vakho Gograchadze."
              />
            </div>
            <div className="staff_info">
              <h2>Vakho Gograchadze</h2>
              <p>Director | Founder</p>
            </div>
          </div>
          <div className="staff">
            <div className="staff_img">
              <img
                src={staff_eter}
                alt="staff member of Adjarian Film Festival, Eter Parchukidze."
              />
            </div>
            <div className="staff_info">
              <h2>Eter Parchukidze</h2>
              <p>PR | International Relations</p>
            </div>
          </div>
          {/* <div className="staff">
            <div className="staff_img">
              <img src="" alt="" />
            </div>
            <div className="staff_info">
              <h2>Staff Name</h2>
              <p>Staff Position</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="jury_section">
        <h2>Jury</h2>
        <div className="jury_wrapper">
          <div className="jury">
            <div className="jury_img">
              <img
                src={jury_natia}
                alt="jury member of Adjarian Film Festival, Natia Tavdgiridze."
              />
            </div>
            <div className="jury_info">
              <h2>Natia Tavdgiridze</h2>
            </div>
          </div>
          <div className="jury">
            <div className="jury_img">
              <img
                src={jury_grisha}
                alt="jury member of Adjarian Film Festival, Grisha Chigogidze"
              />
            </div>
            <div className="jury_info">
              <h2>Grisha Chigogidze</h2>
            </div>
          </div>
          <div className="jury">
            <div className="jury_img">
              <img
                src={jury_nino}
                alt="jury member of Adjarian Film Festival, Nino Gelovani"
              />
            </div>
            <div className="jury_info">
              <h2>Nino Gelovani</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
