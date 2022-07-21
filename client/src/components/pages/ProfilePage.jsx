import React, {useState} from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './ProfilePage.css';
import buymeacoffee from '../../assets/buymeacoffee.svg'
import { UserAuth } from '../../AuthContext/AuthContext';
import { createProfile, editProfile } from '../../Services/profile'


const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { user } = UserAuth();
  
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
      uid: e.uid,
      name: e.target.name.value,
      email: e.target.email,
      location: e.target.location,
      job: e.target.job,
      expertise: e.target.expertise,
      paymentLink: e.target.paymentLink,
    }
    
    createProfile(user);
    toggleEditMode();
  }
    
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        
      { user?.displayName && user?.photoURL ? 
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
         
          <div className='profile-detail name-card'>
          { isEditMode ?
            <>
              <img src={user?.photoURL} className="profile-pic" referrerPolicy="no-referrer"  alt="profilePic" />
              <h2 className="display-name">{user?.displayName}</h2>
            </>
            : 
            <>
              <img src={user?.photoURL} className="profile-pic" referrerPolicy="no-referrer"  alt="profilePic" />
              <label htmlFor="name" className="display-name">Name</label>
              <input type="text" id="name" className="display-name" placeholder="What is your name?" defaultValue={user?.displayName}/>
            </>
          }
          </div>
          
          <div className='profile-detail email-card'>
          { isEditMode ? 
            <>
              <h4>Email</h4>
              <p className="display-email">{user?.email}</p>
            </>
            : 
            <>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="What is your email address?"/>
            </>}
          </div>
      
          <div className='profile-detail location-card'>
            { isEditMode ? 
              <>
                <h4>I am based in</h4>
                <p  className="display-location" placeholder="Where are you?"></p>
              </> : 
              <>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="Where are you based?"/>
              </>
            }
          </div>
        
          <div className='profile-detail job-card'>
            { isEditMode ? 
              <>
                <h4>I am a </h4>
                <p className="display-job"></p>
              </>
            :
              <>
                <label htmlFor="job">I am a</label>
                <input type="text" id="job" placeholder="What is your job?"/>
              </> 
            }
          </div>
          
          <div className='profile-detail expertise-card'>
            { isEditMode ? 
            <>
            <h4>With an Expertise in</h4>
            <ul className="expertise-list">
              <p placeholder="List your expertise"></p>
            </ul>
            </> : 
            <>
              <label htmlFor="expertise">With an Expertise in</label>
              <input type="text" id="expertise" placeholder="What do you love to do the most?"/>
            </>
            }
          </div>
          
          <div className='profile-detail payment-card'>
            { isEditMode ? 
              <>
                <img src={buymeacoffee} alt="buy-me-a-coffee" width="180px" height="75px"></img>
                <p href="" className="buy-me-a-coffee-link" placeholder="Set a payment link"></p>
              </> :
              <>
                <label htmlFor="paymentLink">Buy me a coffee</label>
                <input type="text" id="paymentLink" placeholder="Set up a payment link"/>
              </>
            }
          </div>
          
          <div className="profile-edit-btn-container">
            <button className="profile-edit-btn" onClick={toggleEditMode}> { isEditMode ? "Edit Profile" : "Cancel" }</button>
            { !isEditMode ? <button className="profile-edit-btn submit" onClick={handleSubmit}>Submit</button> : <></> }
          </div>
          
          </div>
        </div>
        : 
          <h2 className="infoUser">This page is only available for authenticated users. Please sign in to continue or browse the Events section</h2>
          }
      </div>
    </div>
  );
};

export default ProfilePage;