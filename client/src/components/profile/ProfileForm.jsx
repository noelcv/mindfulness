import React from "react";
import { editProfile } from "../../Services/profile";



const ProfileForm = ({isEditMode, setIsEditMode }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
      uid: e.uid,
      name: e.target.name.value,
      email: e.target.email.value,
      location: e.target.location.value,
      job: e.target.job.value,
      expertise: e.target.expertise.value,
    }
    
    editProfile(user);
    setIsEditMode(!isEditMode)
  }
  return (
    <div className="profile-form">
      <div className="profile-form_header">
        <h2>Profile</h2>
        <button
          className="profile-form-edit-button"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? "Cancel" : "Edit"}
        </button>
        <button
          className="profile-form-submit-button"
          onClick={handleSubmit}
        >
          {isEditMode ? "Submit" : <></>}
        </button>
      </div>
      <div className="profile-form-body">
        <div className="profile-form-input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="What is your name?"/>
        </div>
        <div className="profile-form-input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
    
        <div className="profile-form-input-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Where are you based?"/>
        </div>
    
        <div className="profile-form-input-group">
          <label htmlFor="job">I am a </label>
          <input type="text" id="job" placeholder="What is your job?" />
        </div>
        <div className="profile-form-input-group">
          <label htmlFor="expertise">Expertise</label>
          <input type="text" id="expertise" placeholder="List your expertise"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;