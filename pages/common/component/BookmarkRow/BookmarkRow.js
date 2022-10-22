import React from 'react'

const BookmarkRow = ({title, link}) => {

  console.log(title);
  return (
    <div className='bookmark-row'>
      <h4>{title}</h4>
      <a target="_blank" href={`/${link}`}>Details</a>
    </div>
  )
}

export default BookmarkRow