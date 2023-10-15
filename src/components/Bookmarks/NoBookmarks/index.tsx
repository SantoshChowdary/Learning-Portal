import React from 'react'
import './index.css'

const NoBookmarksPage = () => {
  return (
    <div className="no-bookmarks-section">
        <img src="https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia-content.ccbp.in%2Fwebsite%2Fstatic-images%2Fno_bookmark_illustration.png" alt="no bookmarks" className='no-bookmarks-image' />
        <p className="no-bookmarks-string">You have no bookmarks saved</p>
    </div>
  )
}

export default NoBookmarksPage