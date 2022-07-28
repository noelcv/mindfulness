import React, {useEffect, useRef} from 'react';

export const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => {
      if (ref.current) {
      ref.current.srcObject = stream;
      }
    });
  }, []); //eslint-disable-line

  return (
    <>
      <video
        playsInline
        autoPlay
        ref={ref}
        className="videoplayer-container"
      />
    </>
  );
};