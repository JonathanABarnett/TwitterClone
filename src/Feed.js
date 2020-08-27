import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweetbox */}
      <Tweetbox />

      {/* Post */}
      <Post
        displayName="JonathanBarnett"
        username="ProgrammingDad"
        verified={true}
        text="I am working on Twitter!"
        avatar="https://static.turbosquid.com/Preview/2019/09/10__05_01_58/TrexPainted.jpg2A8522FA-1D06-4B75-8BFE-DCCC1862DCB6Zoom.jpg"
        image="https://media.giphy.com/media/3o7ZeObEUcfLbktUkg/giphy.gif"
      />
    </div>
  );
}

export default Feed;
