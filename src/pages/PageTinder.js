import ComToilet from "../components/ComToilet";
import useLocation from "../hooks/useLocation";
import useNearestToilets from "../hooks/useNearestToilets";
import Compass from "../components/Compass";
import { Container } from "@mui/material";

function PageTinder() {
  const { error: errorLocation, location } = useLocation();
  const { error: toiletError, nearestToilets } = useNearestToilets(location);

  // TODO: Take closest toilet
  const toilet = nearestToilets[0];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Compass currentLocation={location} toiletLocation={toilet?.location} />
      <ComToilet toilet={toilet} />
    </Container>
  );
}

export default PageTinder;
