import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  BookmarkRounded,
  ExpandCircleDownOutlined,
  GroupsRounded,
  HistoryRounded,
  Home,
  OndemandVideo,
  People,
  Storefront,
  WorkHistory,
} from "@mui/icons-material";

const LeftBar = () => (
  <Box flex={1} p={2}>
    <Box position="fixed">
      <List>
        {/* profile list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        {/* friends list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <People color="primary" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        {/* Groups list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <GroupsRounded color="primary" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        {/* watch list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <OndemandVideo color="primary" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Watch" />
          </ListItemButton>
        </ListItem>
        {/* feeds list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <WorkHistory color="primary" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Feeds (Most Recent)" />
          </ListItemButton>
        </ListItem>
        {/* martketplace list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Storefront color="primary" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        {/* memories list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HistoryRounded color="primary" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Memories" />
          </ListItemButton>
        </ListItem>
        {/* saved list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <BookmarkRounded
                sx={{
                  color: "#aa00ff",
                  fontSize: "2rem",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItemButton>
        </ListItem>
        {/* more list-item */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ExpandCircleDownOutlined
                sx={{
                  fontSize: "2rem",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="See More" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Box>
);

export default LeftBar;
