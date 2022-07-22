import React, {useEffect, useState} from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './ProfilePage.css';
import buymeacoffee from '../../assets/buymeacoffee.svg'
import { UserAuth } from '../../AuthContext/AuthContext';
import { createProfile, getProfileById, editProfile } from '../../Services/profile'


const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [job, setJob] = useState('');
  const [expertise, setExpertise] = useState('');
  const [paymentLink, setPaymentLink] = useState('');
  const { user } = UserAuth();
  
  const uidDb = user.uid;
  console.log(uidDb, 'uidDb')
 
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  }
  
  const simpleFetch = async (userId) => {
    try {
      if (userId) {
      console.log(userId, 'userId inside simple Fetch')
      let profile = await getProfileById(userId);
      if (profile.length === 0) {
        const newProfile = {
          id: userId,
          name: user?.displayName,
          email: user?.email
        }
        console.log(newProfile, 'creating new Profile inside simple fetch');
        return await createProfile(newProfile);
      } else {
      console.log(profile, 'profile inside simple fetch');
          if (profile.length > 0) {
            setName(profile[0].name);
            setEmail(profile[0].email);
            setLocation(profile[0].location);
            setJob(profile[0].job);
            setExpertise(profile[0].expertise);
            setPaymentLink(profile[0].paymentLink);
          }
        }
      }
    } catch (err) {
      console.log('Error at simple fetch: ', err);
    }
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userProfile = {
      id: uidDb,
      name: name || user?.displayName,
      email: email || user?.email,
      location: location,
      job: job,
      expertise: expertise,
      paymentLink: paymentLink,
    }
    console.log(userProfile, 'user before editProfile');
    toggleEditMode();
    return await editProfile(userProfile);
  }
  

  useEffect(() => {
    if (uidDb) {
      try {
        simpleFetch(uidDb);
      } catch (err) {
        console.log('Error at simpleFetch inside useEffect: ', err);
      }
    }
  }, []) // eslint-disable-line
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        
      { user?.displayName && user?.photoURL ? 
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
        
          <div className='profile-detail name-card'>
          { !isEditMode ?
            <>
              <img src={user?.photoURL} className="profile-pic" referrerPolicy="no-referrer"  alt="profilePic" />
              <h2 className="display-name">{user?.displayName || name}</h2>
            </>
            : 
            <>
              <img src={user?.photoURL} className="profile-pic" referrerPolicy="no-referrer"  alt="profilePic" />
              <label htmlFor="name" className="display-name">Name</label>
              <input type="text" id="name" className="display-name" placeholder="What is your name?" defaultValue={user?.displayName || name}  onChange={(e) => {
                  setName(e.target.value);
                }}/>
            </>
          }
          </div>
          
          <div className='profile-detail email-card'>
          { !isEditMode ? 
            <>
              <h4>Email</h4>
              <p className="display-email">{user?.email || email}</p>
            </>
            : 
            <>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="What is your email address?" defaultValue={email}   onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
            </>}
          </div>
      
          <div className='profile-detail location-card'>
            { !isEditMode ? 
              <>
                <h4>I am based in</h4>
                <p  className="display-location" placeholder="Where are you?">{location}</p>
              </> : 
              <>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="Where are you based?" defaultValue={location} onChange={(e) => {
                  setLocation(e.target.value);
                }}/>
              </>
            }
          </div>
        
          <div className='profile-detail job-card'>
            { !isEditMode ? 
              <>
                <h4>I am a </h4>
                <p className="display-job">{job}</p>
              </>
            :
              <>
                <label htmlFor="job">I am a</label>
                <input type="text" id="job" placeholder="What is your job?" defaultValue={job} onChange={(e) => {
                  setJob(e.target.value);
                }}/>
              </> 
            }
          </div>
          
          <div className='profile-detail expertise-card'>
            { !isEditMode ? 
            <>
            <h4>With an Expertise in</h4>
            <ul className="expertise-list">
              <p placeholder="List your expertise">{expertise}</p>
            </ul>
            </> : 
            <>
              <label htmlFor="expertise">With an Expertise in</label>
              <input type="text" id="expertise" placeholder="What do you love to do the most?" defaultValue={expertise} onChange={(e) => {
                  setExpertise(e.target.value);
                }}/>
            </>
            }
          </div>
          
          <div className='profile-detail payment-card'>
            { !isEditMode ? 
              <>
                <img src={buymeacoffee} alt="buy-me-a-coffee" width="180px" height="75px"></img>
                <p className="buy-me-a-coffee-link" placeholder="Set a payment link">{paymentLink}</p>
              </> :
              <>
                <label htmlFor="paymentLink">Buy me a coffee</label>
                <input type="text" id="paymentLink" placeholder="Set up a payment link"  onChange={(e) => {
                  setPaymentLink(e.target.value);
                }}/>
              </>
            }
          </div>
          
          <div className="profile-edit-btn-container">
            <button className="profile-edit-btn" onClick={toggleEditMode}> { isEditMode ? "Cancel" : "Edit" }</button>
            { isEditMode ? <button className="profile-edit-btn submit" onClick={handleSubmit}>Submit</button> : <></> }
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