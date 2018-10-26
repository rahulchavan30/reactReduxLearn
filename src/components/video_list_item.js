import React from 'react';



const VideoListItem = ({video,onVideoClick}) =>{
  const imgURl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() =>onVideoClick(video)} className="list-group-item">
        <div className="video-list-media">
            <div>
                <img className="media-object" src={imgURl} />
            </div>

        <div className="media-body" >
            <div className = "media-heading">{video.snippet.title}</div>
          </div>

        </div>

    </li>
)
}

export default VideoListItem;
