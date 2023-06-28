import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Apps,
  FacebookRounded,
  Home,
  Search,
  OndemandVideo,
  Storefront,
  Groups2Rounded,
  SportsEsportsRounded,
  Message,
  Notifications,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#000",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* logo */}
        <Stack direction="row" spacing={2}>
          <Typography variant="h6">
            <FacebookRounded sx={{ color: "#4267B2", fontSize: "50px" }} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search Facebook"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>
        </Stack>
        {/* icons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Typography padding="12px 40px">
            <Home sx={{ fontSize: "2rem" }} />
          </Typography>
          <Typography padding="12px 40px">
            <OndemandVideo sx={{ fontSize: "2rem" }} />
          </Typography>
          <Typography padding="12px 40px">
            <Storefront sx={{ fontSize: "2rem" }} />
          </Typography>
          <Typography padding="12px 40px">
            <Groups2Rounded sx={{ fontSize: "2rem" }} />
          </Typography>
          <Typography padding="12px 40px">
            <SportsEsportsRounded sx={{ fontSize: "2rem" }} />
          </Typography>
        </Stack>
        {/* notifs */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography
            padding="8px"
            borderRadius="50%"
            bgcolor="#eee"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Apps sx={{ fontSize: "1.5rem" }} />
          </Typography>
          <Typography
            padding="8px"
            borderRadius="50%"
            bgcolor="#eee"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Message sx={{ fontSize: "1.5rem" }} />
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" /> */}
          </Typography>
          <Typography
            padding="8px"
            borderRadius="50%"
            bgcolor="#eee"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Notifications sx={{ fontSize: "1.5rem" }} />
          </Typography>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
