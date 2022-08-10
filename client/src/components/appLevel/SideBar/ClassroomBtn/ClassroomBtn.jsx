import React from 'react';
import './ClassroomBtn.css';
import YogaClass from '../../../../assets/svg/classroom.svg';

const ClassroomBtn = () => {
  return ( <div className="settings-btn btn-section-sidebar">
  <img className="btn-img-sidebar" src={YogaClass} width="22em" height="22em" alt="button-to-go-to-settings"/>
  <h2 className="btn-text-sidebar">Classroom</h2>
</div>
)
}

export default ClassroomBtn