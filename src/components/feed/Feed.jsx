import React, { useState, useEffect } from "react";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import InputOption from "../inputOption/InputOption";
import Post from "../post/Post";
import "./Feed.css";
import { db } from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { Avatar } from "@material-ui/core";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_inputHolder">
          <Avatar src={user.photoUrl}>
            {user.displayName[0].toUpperCase()}
          </Avatar>
          <div className="feed_input">
            <form>
              <input
                type="text"
                placeholder="Start a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDay}
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
