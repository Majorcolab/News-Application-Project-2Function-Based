import React from 'react';

const NewsItem =(props)=> {

    const { title, description, imageUrl, newsUrl, date, source} = props;

    // Check if imageUrl is falsy (undefined, empty string, etc.) and use a fallback image
    const imageSource = imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rrOaiu8f0_10UUMbtrj67N51mOoqmOFtE30XuuN6DW8FTWfTGhMiQ5dI&s=10";

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageSource}
            className="card-img-top"
            alt="..."
            onError={(e) => {
              e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rrOaiu8f0_10UUMbtrj67N51mOoqmOFtE30XuuN6DW8FTWfTGhMiQ5dI&s=10";
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title || "No Title Available"}</h5>
            <p className="card-text">{description || "No Description Available"}</p>
            <p className="card-text">
              <span className="badge text-bg-danger">{source}</span>
<br/>
              <small className="text-muted">On {date ? new Date(date).toGMTString() : "Date Unavailable"}</small>
            </p>
            {newsUrl ? (
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
                Read More
              </a>
            ) : (
              <span className="text-danger">Read More Link Unavailable</span>
            )}
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem
