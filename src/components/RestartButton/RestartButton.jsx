import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

import './RestartButton.css';

const RestartButton = ({ score }) => {
  return (
      <div className="restart" id="restart">
        <FontAwesomeIcon id="restartIcon" icon={faUndo} />
      </div>
  );
};

export default RestartButton;
