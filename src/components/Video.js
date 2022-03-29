import { Link } from "react-router-dom";
import "./css/Video.css"

function Video({ video }) { 
    return(        
        <div className="video-container">
            <img className="video-thumbnail" src={video.video_thumbnail} alt="Error Loading"/>
            <div className="video-details">
                <p className="name">
                    <Link to={`/videos/${video.id}`}>{video.title}</Link>
                </p>
                <p className="stats">{video.date_posted}</p>
                <p className="creator">
                    <img src={video.profile_photo} className="creator-profile-photo" alt="Error Loading"/>                    
                    <span>{video.author}</span>
                </p>                    
                <p className="desc">{video.description}</p>
            </div>                
        </div>
    );
}
export default Video;