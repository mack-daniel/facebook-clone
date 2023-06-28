import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
