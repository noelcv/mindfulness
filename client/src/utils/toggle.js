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