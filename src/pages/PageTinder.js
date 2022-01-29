import ComToilet from "../components/ComToilet";
import useLocation from "../hooks/useLocation";
import useNearestToilet from "../hooks/useNearestToilet";
import Compass from "../components/Compass";
import { Container } from "@mui/material";

function PageTinder() {
  const { error: errorLocation, location } = useLocation();
  const { appendToIgnoredToilets, error: toiletError, toilet } = useNearestToilet(location);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Compass
        currentLocation={location}
        toiletLocation={toilet?.location}
      />
      <ComToilet
        appendToIgnoredToilets={appendToIgnoredToilets}
        toilet={toilet}
      />
    </Container>
  );
}

export default PageTinder;
