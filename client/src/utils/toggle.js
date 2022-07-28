export const toggle = (setState, stateToToggle) => {
  setState(!stateToToggle);
}

export const toggleMic = (ref) => {
  const audioTrack = ref.current
        .getTracks()
        .find((track) => track.kind === 'audio');
          if (audioTrack.enabled) {
            audioTrack.enabled = false;
        } else {
            audioTrack.enabled = true;
        }
        if (audioTrack) console.log(audioTrack, 'myMic');
  
}

export const toggleCam = (ref) => {
  const videoTrack = ref.current
    .getVideoTracks()
    .find((track) => track.kind === 'video');
  if (videoTrack.enabled) {
    videoTrack.enabled = !videoTrack.enabled;
  } else {
    videoTrack.enabled = true;
  }
  console.log(videoTrack, 'myCam');
};

export const exitCall = (ref, socketRef) => {
  ref.current.getVideoTracks()[0].enabled = false;
  if(socketRef.current) socketRef.current.disconnect();
  window.location.replace('/events');
};