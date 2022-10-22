import React, { useEffect, useState } from 'react'
import BookmarkRow from '../BookmarkRow/BookmarkRow'


const Category = () => {
    const [bookmarks, setbookmarks] = useState([])
    const [options, setoptions] = useState([])
    const initBookmarks = () => {
        const bookmarks = localStorage.getItem('bookmark')
        const parsedBookmarks = JSON.parse(bookmarks)
        if (parsedBookmarks === null) {
            return
        }
        setbookmarks(parsedBookmarks)
        console.log("init",parsedBookmarks);
    }

    const initCategory = () => {
        if(!localStorage.getItem('category')){
            localStorage.setItem('category', JSON.stringify([]))
        }
        let categories = localStorage.getItem('category')
        const parsedCategories = JSON.parse(categories)
        
        console.log("cat",parsedCategories)
        setoptions(parsedCategories)
    }
    useEffect(() => {
        initBookmarks()
        initCategory()
    }, [])
  return (
    
                <div className='category'>
                    {
                    bookmarks.map((bookmark, idx) => (
                        <BookmarkRow key={`bookmark${idx}`} title={bookmark.title} link={idx}  />
                    ))
                }
                
                </div>
  )

}


// Category.propType = {
//     bookmarks: PropTypes.object
// }
export default Category