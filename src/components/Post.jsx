import {
  ChatBubble,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Post = ({ user, date, avatar, imagePost, postBody }) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar src={avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={user}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="400"
        image={imagePost}
        // image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        // alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postBody}
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ flex: 1, borderRadius: 0 }}>
          <Checkbox
            icon={<ThumbUpOffAlt />}
            checkedIcon={<ThumbUp color="primary" />}
          />
          <Typography>Like</Typography>
        </IconButton>
        <IconButton sx={{ flex: 1, borderRadius: 0 }}>
          {/* <Checkbox
            icon={<ChatBubble />}
            // checkedIcon={<ThumbUp color="primary" />}
          /> */}
          <ChatBubble />
          <Typography>Comment</Typography>
        </IconButton>
        <IconButton sx={{ flex: 1, borderRadius: 0 }}>
          <Share />
          <Typography>Share</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
