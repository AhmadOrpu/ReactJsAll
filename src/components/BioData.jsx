import React from "react";

const BioData = ({ name, age, occupation, skills, interests, mobile }) => {
  return (
    <div className="bioData">
      <h2>BioData Of {name} </h2>
      <div className="personal-info" style={{ border: "2px solid red" }}>
        <p>name: {name}</p>
        <p>age: {age}</p>
        {mobile && <p>mobile: {mobile}</p>}

        <p>occupation: {occupation}</p>
      </div>
      <div className="skills">
        <h3> Her Skills - </h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>Her Interests - </h2>
        <ul>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BioData;
