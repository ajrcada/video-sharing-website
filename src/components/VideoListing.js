import "./css/VideoListing.css"
import Video from "./Video";

function VideoListing({videoFromApi}) {     
    return (                
        <section className="listing-container">
        {videoFromApi.map(video => (
          <Video key={video.id} video={video} />
        ))}
      </section>
    );
}
export default VideoListing;
