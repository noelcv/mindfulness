import Peer from 'simple-peer';


export const generateNewPeer = (userToSignal, callerId, stream, socketRef) => {
  const peer = new Peer({
    initiator: true, //so that I can inform the others that I joined
    trickle: false,
    stream,
  });
  
  peer.on('signal', (signal) => {
    socketRef.current.emit('sendingSignalToBackEnd', {
      userToSignal,
      callerId,
      signal,
    });
  });
  
  return peer;
};

export const addNewPeer = (newSignalIncoming, callerId, stream, socketRef) => {
  const peer = new Peer({
    initiator: false,
    trickle: false,
    stream,
  });
  
  //we signal upon the newly incoming signal
  //so when we receive an offer we send our signal back to the callerID
  peer.on('signal', (signal) => {
    socketRef.current.emit('returningSignalToTheBackEnd', {
      signal,
      callerId,
    });
  });
  
  //we are accepting the signal and fire the socket event above
  peer.signal(newSignalIncoming);
  
  return peer;
};

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