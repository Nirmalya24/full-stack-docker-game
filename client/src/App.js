import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import JoinInstruction from "./PersonalDevice/JoinInstruction.js";
import Lounge from "./TV/Lounge.js";
import Introduction from "./TV/Introduction";
import SSDay from "./TV/Day.js";
import SSNight from "./TV/Night.js";
import "./App.css";
import PDLounge from "./PersonalDevice/PDLounge.js";
import PDDay from "./PersonalDevice/PDDay.js";
import PDNight from "./PersonalDevice/PDNight.js";
import Role from "./PersonalDevice/Role";
import Device from "./PersonalDevice/PersonalDevice.js";
import TV from "./TV/TV.js";
import Sunrise from "./TV/Sunrise.js";
import Sunset from "./TV/Sunset.js";
import End from "./TV/End.js";

function App() {
  const [state, setState] = useState("init");
  const [playerState, setPlayerState] = useState("join");

  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  //default home page is always just "/"

  // establish socket connection
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  // subscribe to the socket event
  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });
  }, [socket]);

  // manage socket connection
  const handleSocketConnection = () => {
    if (socketConnected) {
      socket.disconnect();
    } else {
      socket.connect();
    }
  };

  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={() => <WelcomePage />} />
        <Route path="/JoinInstruction" render={() => <JoinInstruction />} />
        <Route path="/Lounge" render={() => <Lounge />} />
        <Route path="/PDLounge" render={() => <PDLounge />} />
        <Route path="/Introduction" render={() => <Introduction />} />
        <Route path="/SSNight" render={() => <SSNight />} />
        <Route path="/SSDay" render={() => <SSDay />} />
        <Route path="/End" render={() => <End />} />
        <Route path="/Sunset" render={() => <Sunset />} />
        <Route path="/Role" render={() => <Role />} />
        <Route path="/PDNight" render={() => <PDNight />} />
        <Route path="/PDDay" render={() => <PDDay />} />
        <Route path="/Sunrise" render={() => <Sunrise />} />
        <Route path="/device" render={() => <Device super={playerState} />} />
        <Route path="/TV" render={() => <TV super={state} />} />
      </Router>

      <b style={{ color: "white" }}>
        Connection status: {socketConnected ? "Connected" : "Not connected"}
      </b>
      <input
        type="button"
        value={socketConnected ? "Disconnect" : "Connect"}
        onClick={handleSocketConnection}
      />
    </div>
  );
}

// function Button(props) {
//   const {onPress, tlte = 'Save'} = props;
//   return (
//     <Pressable style={styles.button} onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//       </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: 'black',
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },
// });

export default App;
