import React from 'react';
import MirrorVideoComponent from './MirrorVideoComponent';
import LoopSegmentsComponent from './LoopSegmentsComponent';
import SpeedControlComponent from './SpeedControlComponent';

function Popup() {
  return (
    <div>
      <h1>Dance Remote</h1>
      <MirrorVideoComponent />
      <LoopSegmentsComponent />
      <SpeedControlComponent />
    </div>
  );
}

export default Popup;
