# Mindfulness
[![CodeFactor](https://www.codefactor.io/repository/github/noelcv/mindfulness/badge)](https://www.codefactor.io/repository/github/noelcv/mindfulness)

<a href="https://mindfulness-ochre.vercel.app/" target="_blank" rel="noreferrer">Mindfulness</a> promotes safe spaces for gathering Wellness professionals and their clients.

<img src="../mindfulness/screenshots/Screenshot_VideoCall_p2p.png">

Using WebRTC technology, users can communicate directly with their favorite therapist in Real-Time, peer-to-peer (p2p), without having the content of their communications intercepted and stored in a server.

## How does it work?

When a Professional creates an Event (Private Yoga Class, Therapy session, Holistic Consultation), an unique RoomID is generated.

When both Professional and Client join the Video Call Room, they emit a signal to communicate their intention to initiate a p2p connection.

This intention consists of a Session Description Protocol (SDP) which contains the metadata to allow the direct exchange between the participants.

Once the exchange takes place, both participants can communicate directly and the server no longer listens for the content of the meeting.

## Tech-Stack

#### Front-end

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>

#### Back-end

<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB"/></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg" width="36" height="36" alt="Express" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>

#### Real-Time Communication

<a href="https://socket.io/" target="_blank" rel="noreferrer"><img src="https://socket.io/images/logo-dark.svg" width="100" height="36" alt="SocketIO" /></a>
<a href="https://webrtc.org/" target="_blank" rel="noreferrer"><img src="https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-dist.svg" width="36" height="36" alt="WebRTC"/></a>


#### Authentication
<a href="https://socket.io/" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1200px-Firebase_Logo.svg.png" width="100" height="36" alt="Firebase" /></a>

#### Deployment

<a href="https://herokuapp.com" target="_blank" rel="noreferrer"><img src="./screenshots/../client/src/assets/Heroku_logo.svg.png" width="100" height="50" alt="Heroku" /></a>     <a href="https://vercel.com" target="_blank" rel="noreferrer"><img src="./screenshots/vercel.svg" width="100" height="50" alt="Vercel"/></a>

### Protected Routes
Some pages are only available for authenticated users. We protect those routes and provide feedback to the user.
<img src="../mindfulness/screenshots/Screenshot_Protected_Routes.png">


### Authentication
For this Proof-of-Concept we opted to allow for authentication with Google Account via Firebase
<img src="../mindfulness/screenshots/Screenshot_Authentication_Google.png">


<img src="../mindfulness/screenshots/Screenshot_Authentication_Firebase.png">


### Profile
The Profile Picture, Name, and Email are fetched upon authentication with Firebase.
<img src="../mindfulness/screenshots/Screenshot_Profile.png">

### Events
Authenticated users can create Events.
<img src="../mindfulness/screenshots/Screenshot_Events_Auth.png">

Unauthenticated users can only view and join existing events.

<img src="../mindfulness/screenshots/Screenshot_Events_Protected.png">


### Video Call 
Each event has an unique RoomID that is used to establish a peer-to-peer connection between teacher and student.
<img src="../mindfulness/screenshots/Screenshot_VideoCall_p2p.png">