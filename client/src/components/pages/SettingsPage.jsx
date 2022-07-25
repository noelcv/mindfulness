import React, {useState} from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import { UserAuth } from '../../AuthContext/AuthContext';
import { createProfile, getProfileById, editProfile } from '../../Services/profile'

import linkedin from '../../assets/linkedin.svg'
import './SettingsPage.css';

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [extLink, setExtLink] = useState('');
  
  const { user } = UserAuth();
  
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  }
  
  const simpleFetch = async (userId) => {
    try {
      if (userId) {
      let profile = await getProfileById(userId);
      if (profile.length === 0) {
        const newProfile = {
          id: userId,
          name: user?.displayName,
          email: user?.email
        }
        return await createProfile(newProfile);
      } else {
          if (profile.length > 0) {
            setEmail(profile[0].email);
            setPhoneNumber(profile[0].phoneNumber);
            setBillingAddress(profile[0].billingAddress);
            setVatNumber(profile[0].vatNumber);
            setExtLink(profile[0].extLink);
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
      id: user?.uid,
      email: email || user?.email,
      phoneNumber: phoneNumber,
      billingAddress: billingAddress,
      vatNumber: vatNumber,
      extLink: extLink,
    }
    console.log(userProfile, 'user before editProfile');
    toggleEditMode();
    return await editProfile(userProfile);
  }
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        { user?.displayName ? 
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
          
          <div className='profile-detail email-card'>
            { !isEditing ? 
            <>
              <h4>Email</h4> 
              <p className="display-email">{user?.email || email}</p>
            </>
            : <>
            <label htmlFor="email" className="display-name">Email</label>
              <input type="text" id="email" className="display-name" placeholder="What is your email?" defaultValue={user?.email || email} onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
            </>
          }
            </div>
          
          <div className='profile-detail phone-card'>
            { !isEditing ?
            <>
              <h4>Phone Number</h4>
              <p>{user?.phoneNumber || phoneNumber}</p>
            </> : 
            <>
            <label htmlFor="vatNumber" className="display-name">Phone Number</label>
              <input type="text" id="vatNumber" className="display-name" placeholder="What is your phone number?" defaultValue={vatNumber} onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}/>
            </> }
          </div>
          
          <div className='profile-detail job-card'>
            { !isEditing ? 
            <>
            <h4>Billing Address</h4>
            <p className="display-job"></p>
            <p>{billingAddress}</p>
            </> : <>
            <label htmlFor="billingAddress" className="display-name">Billing Address</label>
              <input type="text" id="billingAddress" className="display-name" placeholder="What is your billing address?" defaultValue={billingAddress} onChange={(e) => {
                  setBillingAddress(e.target.value);
                }}/>
            </>
          }
          </div>
          
          <div className='profile-detail expertise-card'>
            { !isEditing ? 
            <>
              <h4>VAT</h4>
              <p>{vatNumber}</p>
            </> : <>
            <label htmlFor="vatNumber" className="display-name">VAT Number</label>
              <input type="text" id="vatNumber" className="display-name" placeholder="What is your VAT number?" defaultValue={vatNumber} onChange={(e) => {
                  setVatNumber(e.target.value);
                }}/>
            </>
          }
          </div>
          
          <div className='profile-detail payment-card'>
            { !isEditing ? 
            <>
            <img src={linkedin} alt="linkedin" width="100px" height="100px"/>
            <a href={extLink} target="_blank" rel="noreferrer" className="linkedin-link">{extLink}</a>
            </> : <>
            <label htmlFor="extLink" className="display-name">External Link</label>
              <input type="text" id="extLink" className="display-name" placeholder="What is your billing address?" defaultValue={extLink} onChange={(e) => {
                  setExtLink(e.target.value);
                }}/>
            </>
            }
          </div>
          <div className="profile-edit-btn-container">
            <button className="profile-edit-btn" onClick={toggleEditMode}> { isEditing ? "Cancel" : "Edit" }</button>
            { isEditing ? <button className="profile-edit-btn submit" onClick={handleSubmit}>Submit</button> : <></> }
          </div>
          
          </div>
        </div>
        : <h2 className="infoUser">This page is only available for authenticated users. Please sign in to continue or browse the Events section</h2>
      }
      </div>
    </div>
  );
};

export default SettingsPage;
