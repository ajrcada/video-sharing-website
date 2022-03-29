
import {useState, useEffect} from "react"

import NavMenu from "../components/NavMenu.js"
import VideoListing from "../components/VideoListing.js"

function HomePage() {

    //import Video Details API
    const [videoFromApi, setVideoFromApi] = useState([])

    useEffect( () => {
        fetch("http://localhost:3000/videos")
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (jsonData) => {
                    console.log(jsonData)
                    setVideoFromApi(jsonData)
                }
            )
            .catch(
                (err) => {console.log(err)}
            )
    }, [])
        
    return(
        <div>
            <NavMenu/>        
            <VideoListing videoFromApi={videoFromApi}/>                
        </div>
    );
}

export default HomePage;