import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="container" style={{ display: "flex", padding: "0 20px" }}>
        <div className="box" style={{ margin: "0 10px", flex: 1 }}>
          <h3 style={{ flexBasis: "40px" }}>University of Southampton</h3>
          <p className="small">
            BSc Computer Science
            <br />
            September 2024 - June 2027 (In Progress)
          </p>
        </div>
        <div className="box" style={{ margin: "0 10px", flex: 1 }}>
          <h3 style={{ flexBasis: "40px" }}>Didcot Sixth Form College</h3>
          <p className="small">
            A-Levels in Computer Science, Mathematics and Sociology
            <br />
            September 2022 - June 2024
          </p>
        </div>
        <div className="box" style={{ margin: "0 10px", flex: 1 }}>
          <h3 style={{ flexBasis: "40px" }}>St Birinus School</h3>
          <p className="small">
            GCSEs
            <br />
            September 2017 - June 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;