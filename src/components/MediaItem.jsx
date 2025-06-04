// import React from 'react';
import '../styles/mediaItem.css'; // Import the external CSS

function MediaItem({ url, alt, type }) {
  return (
    <div className="media-container">
      {type === 'image' && <img src={url} alt={alt} className="media-item" />}
      {type === 'video' && (
        <video controls className="media-item">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {type === 'audio' && (
        <audio controls className="media-item">
          <source src={url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default MediaItem;
