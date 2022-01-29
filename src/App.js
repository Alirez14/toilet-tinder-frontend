import logo from "./logo.svg";
import "./App.css";
import {Box} from "@mui/material";
import ComToilet from "./components/ComToilet";
import StyleConst from "./style/StyleConst";
import useLocation from "./hooks/useLocation";
import useNearestToilets from "./hooks/useNearestToilets";
import Compass from "./components/Compass";

function App() {
  const {error: errorLocation, location} = useLocation();
  const {error: toiletError, nearestToilets} = useNearestToilets(location);

  // TODO: Take closest toilet
  const toilet = nearestToilets[0];

  return (
    <Box
      className="App"
      sx={{
        backgroundColor: StyleConst.Colors.background,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Compass
        currentLocation={location}
        toiletLocation={toilet?.location}
      />
      <ComToilet
        toilet={toilet}
      />
    </Box>
  );
}

export default App;
