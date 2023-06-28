import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import { posts } from "../data/post";

const Feed = () => {
  return (
    <Box flex={3} p={2}>
      {posts.map((post) => (
        <Post
          user={post.user}
          date={post.date}
          avatar={post.avatar}
          imagePost={post.imagePost}
          postBody={post.postBody}
        />
      ))}
    </Box>
  );
};

export default Feed;
