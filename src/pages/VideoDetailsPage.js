import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavMenu from "../components/NavMenu.js"
import "./css/VideoDetailsPage.css";

// import icons
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

function VideoDetailsPage({ list, setList }) {
  const [video, setVideo] = useState({});
  const [rating, setRating] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const { id } = useParams("id");

  useEffect(() => {
    fetch(`http://localhost:3000/videos/${id}`)
      .then(response => response.json())
      .then(response => {
        setVideo(response);
        setLike(response.likes);
        setDisLike(response.dislikes);
      });
  }, [id]);

  const buttonPressed = (isLike = false) => {
    if (isLike) {
      if (rating !== "like" ) {
        if (rating !== "") {
          setDisLike(dislike - 1);
        }
        setRating("like");
        setLike(like + 1);
      }
    } else {
      if (rating !== "dislike") {
        if (rating !== "") {
          setLike(like - 1);
        }
        setRating("dislike");
        setDisLike(dislike + 1);
      }
    }
  };

  const addToPlaylist = () => {
    if (video.id && !list.map(evt => evt.id).includes(video.id)) {
      setList([...list, video]);
      window.alert("Saved!");
    }
  };

  return (
    <div>
      <NavMenu/>  
      <section className="video-player-container">
        <iframe
          width="800"
          height="450"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="title">{video.title}</p>
        <div className="stats">
          <p>
            <span>{video.views}</span>
            &nbsp;&bull;&nbsp;
            <span>{video.date_posted}</span>
          </p>
          <ul className="links">
            <li
              className={rating === "like" ? "pressed" : ""}
              onClick={() => buttonPressed(true)}
            >
              <GoThumbsup />
              &nbsp;&nbsp;
              <span>{like}</span>
            </li>
            <li
              className={rating === "dislike" ? "pressed" : ""}
              onClick={() => buttonPressed()}
            >
              <GoThumbsdown />
              &nbsp;&nbsp;
              <span>{dislike}</span>
            </li>
          </ul>
        </div>
        <div className="video-details">
          <div>
            <p className="creator">
              <img
                src={`/${video.profile_photo}`}
                className="creator-profile-photo"
                alt="creator"
              />
              <span>{video.author}</span>
            </p>
            <p className="desc">{video.description}</p>
          </div>
          <div className="col-right">
            <button className="btn btn-secondary" onClick={addToPlaylist}>
              ADD TO PLAYLIST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default VideoDetailsPage;