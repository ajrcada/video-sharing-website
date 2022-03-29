import "./css/PlaylistPage.css"
import VideoListing from "../components/VideoListing";
import NavMenu from "../components/NavMenu.js"

function PlaylistPage({list}) 
 {  
    return(      
        <div className="Playlist">
        <NavMenu/>
        {   
            (list !== "") ? 
            <h1>My Playlist</h1> : <h1>“You don’t
            have any videos in your playlist.</h1>
        }
        <VideoListing videoFromApi={list} />                                    
        </div>      
    )
}
export default PlaylistPage;