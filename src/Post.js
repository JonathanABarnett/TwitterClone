import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://miro.medium.com/max/280/1*MccriYX-ciBniUzRKAUsAw.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              JB{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> fromanjon
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Make the twitter clone!</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/Kd03ofSatuwMXgJcuz/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontsize="small" />
          <RepeatIcon fontsize="small" />
          <FavoriteBorderIcon fontsize="small" />
          <PublishIcon fontsize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
