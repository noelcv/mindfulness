import React from 'react';
import './SettingsBtn.css';
import SettingsFlower from '../../../../assets/svg/settings.svg';

const SettingsBtn = () => {
  return ( <div className="settings-btn btn-section-sidebar">
  <img src={SettingsFlower} width="22em" height="22em" alt="button-to-go-to-settings"/>
  <h2 className="btn-text-sidebar">Settings</h2>
</div>
)
}

export default SettingsBtn