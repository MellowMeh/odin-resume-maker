import "./styles.css";
import { useState } from "react";

export default function App() {
  const [contactInformation, setContactInformation] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const updateName = (e) => {
    setContactInformation((previousState) => {
      return { ...previousState, name: e };
    });
  };
  const updateEmail = (e) => {
    setContactInformation((previousState) => {
      return { ...previousState, email: e };
    });
  };
  const updatePhone = (e) => {
    setContactInformation((previousState) => {
      return { ...previousState, phoneNumber: e };
    });
  };
  const updateAddress = (e) => {
    setContactInformation((previousState) => {
      return { ...previousState, address: e };
    });
  };

  const [educationInformation, setEducationInformation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const updateSchool = (e) => {
    setEducationInformation((previousState) => {
      return { ...previousState, school: e };
    });
  };
  const updateDegree = (e) => {
    setEducationInformation((previousState) => {
      return { ...previousState, degree: e };
    });
  };
  const updateStartDate = (e) => {
    setEducationInformation((previousState) => {
      return { ...previousState, startDate: e };
    });
  };
  const updateEndDate = (e) => {
    setEducationInformation((previousState) => {
      return { ...previousState, endDate: e };
    });
  };
  const updateLocation = (e) => {
    setEducationInformation((previousState) => {
      return { ...previousState, location: e };
    });
  };

  const [experienceInformation, setExperienceInformation] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    bulletOne: "",
    bulletTwo: "",
    bulletThree: "",
    bulletFour: "",
    bulletFive: "",
  });
  const updateCompany = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, company: e };
    });
  };
  const updatePosition = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, position: e };
    });
  };
  const updateExperienceStartDate = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, startDate: e };
    });
  };
  const updateExperienceEndDate = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, endDate: e };
    });
  };
  const updateExperienceLocation = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, location: e };
    });
  };
  const updateExperienceBulletOne = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, bulletOne: e };
    });
  };
  const updateExperienceBulletTwo = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, bulletTwo: e };
    });
  };
  const updateExperienceBulletThree = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, bulletThree: e };
    });
  };
  const updateExperienceBulletFour = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, bulletFour: e };
    });
  };
  const updateExperienceBulletFive = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, bulletFive: e };
    });
  };

  return (
    <>
      <div className="sidebar">
        <form className="contact-information-form">
          <div className="sidebar-container">
            <h1 className="header">Contact Information</h1>
            <label htmlFor="name-form">Full Name</label>
            <input
              value={contactInformation.name}
              onChange={(e) => updateName(e.target.value)}
              type="text"
              id="name-form"
            ></input>
            <label htmlFor="email-form">Email</label>
            <input
              value={contactInformation.email}
              onChange={(e) => updateEmail(e.target.value)}
              type="text"
              id="email-form"
            ></input>
            <label htmlFor="phone-number-form">Phone Number</label>
            <input
              value={contactInformation.phoneNumber}
              onChange={(e) => updatePhone(e.target.value)}
              type="text"
              id="phone-number-form"
            ></input>
            <label htmlFor="address-form">Address</label>
            <input
              value={contactInformation.address}
              onChange={(e) => updateAddress(e.target.value)}
              type="text"
              id="address-form"
            ></input>
          </div>
        </form>
        <form className="contact-information-form">
          <div className="sidebar-container">
            <h1 className="header">Education</h1>
            <label htmlFor="school-form">School</label>
            <input
              value={educationInformation.school}
              onChange={(e) => updateSchool(e.target.value)}
              type="text"
              id="school-form"
            ></input>
            <label htmlFor="degree-form">Degree</label>
            <input
              value={educationInformation.degree}
              onChange={(e) => updateDegree(e.target.value)}
              type="text"
              id="degree-form"
            ></input>
            <label htmlFor="start-date-form">Start Date</label>
            <input
              value={educationInformation.startDate}
              onChange={(e) => updateStartDate(e.target.value)}
              type="text"
              id="start-date-form"
            ></input>
            <label htmlFor="end-date-form">End Date</label>
            <input
              value={educationInformation.endDate}
              onChange={(e) => updateEndDate(e.target.value)}
              type="text"
              id="end-date-form"
            ></input>
            <label htmlFor="location-form">Location</label>
            <input
              value={educationInformation.location}
              onChange={(e) => updateLocation(e.target.value)}
              type="text"
              id="location-form"
            ></input>
          </div>
        </form>
        <form className="contact-information-form">
          <div className="sidebar-container">
            <h1 className="header">Work Experience</h1>
            <label htmlFor="school-form">Company</label>
            <input
              value={experienceInformation.company}
              onChange={(e) => updateCompany(e.target.value)}
              type="text"
              id="school-form"
            ></input>
            <label htmlFor="degree-form">Position</label>
            <input
              value={experienceInformation.position}
              onChange={(e) => updatePosition(e.target.value)}
              type="text"
              id="degree-form"
            ></input>
            <label htmlFor="start-date-form">Start Date</label>
            <input
              value={experienceInformation.startDate}
              onChange={(e) => updateExperienceStartDate(e.target.value)}
              type="text"
              id="start-date-form"
            ></input>
            <label htmlFor="end-date-form">End Date</label>
            <input
              value={experienceInformation.endDate}
              onChange={(e) => updateExperienceEndDate(e.target.value)}
              type="text"
              id="end-date-form"
            ></input>
            <label htmlFor="location-form">Location</label>
            <input
              value={experienceInformation.location}
              onChange={(e) => updateExperienceLocation(e.target.value)}
              type="text"
              id="location-form"
            ></input>
            <label htmlFor="description-form">Description</label>
            <input
              value={experienceInformation.bulletOne}
              onChange={(e) => updateExperienceBulletOne(e.target.value)}
              type="text"
              id="location-form"
            ></input>
            <input
              value={experienceInformation.bulletTwo}
              onChange={(e) => updateExperienceBulletTwo(e.target.value)}
              type="text"
              id="location-form"
            ></input>
            <input
              value={experienceInformation.bulletThree}
              onChange={(e) => updateExperienceBulletThree(e.target.value)}
              type="text"
              id="location-form"
            ></input>
            <input
              value={experienceInformation.bulletFour}
              onChange={(e) => updateExperienceBulletFour(e.target.value)}
              type="text"
              id="location-form"
            ></input>
            <input
              value={experienceInformation.bulletFive}
              onChange={(e) => updateExperienceBulletFive(e.target.value)}
              type="text"
              id="location-form"
            ></input>
          </div>
        </form>
      </div>

      <div className="resume">
        <div className="resume-header">
          <h1>{contactInformation.name}</h1>
          <div className="resume-contact-info">
            <p>{contactInformation.email}</p>
            <p>{contactInformation.phoneNumber}</p>
            <p>{contactInformation.address}</p>
          </div>
        </div>

        <div className="resume-subheader">
          <h2>Education</h2>
          <div className="space-between">
            <span>{educationInformation.degree}</span>
            <p>
              {educationInformation.startDate} -
              {educationInformation.endDate}
            </p>
          </div>
          <div className="space-between">
            <p>
              {educationInformation.school} -
              {educationInformation.location}
            </p>
          </div>
        </div>

        <div className="resume-subheader">
          <h2>Work Experience</h2>
          <div className="space-between">
            <span>{experienceInformation.position}</span>
            <p>
              {experienceInformation.startDate}
              {experienceInformation.endDate}
            </p>
          </div>
          <div className="left-justified">
            <p>{experienceInformation.location}</p>
          </div>
          <ul>
            <li>{experienceInformation.bulletOne}</li>
            <li>{experienceInformation.bulletTwo}</li>
            <li>{experienceInformation.bulletThree}</li>
            <li>{experienceInformation.bulletFour}</li>
            <li>{experienceInformation.bulletFive}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
