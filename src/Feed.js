import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";

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
    </div>
  );
}

export default Feed;