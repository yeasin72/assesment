import React, { useEffect, useState } from 'react'




const AddBookmark = ({onSubmitHandler, error, setisAdding}) => {

    const [title, settitle] = useState('')
    const [URL, setURL] = useState('')
    const [categpry, setcategpry] = useState('')
    const [options, setoptions] = useState([])
    const [bookmark, setbookmark] = useState({
        title: '',
        URL: '',
        category: ''
    })
    const onSubmit = () => {
        setbookmark({ title, URL, category: categpry})
        return onSubmitHandler(bookmark)
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
        initCategory()
    }, [])
    
  return (
    <div className='add-bookmark'>
            <h2>Add Bookmark</h2>
            <span className="error">{error && 'Invalid Form Data!'}</span>
            <input type='text' onChange={e=> settitle(e.target.value)} name='Title' placeholder='Title' />
            <input type='text' name='URL' onChange={e=> setURL(e.target.value)} placeholder='URL' />
            <select onChange={e=> setcategpry(e.target.value)}>
                <option>
                    Select
                </option>
                {options.map((option, idx) => (
                    <option key={`option${idx}`}>{option}</option>
                ))}
            </select>
            <div className="group">
                <button onClick={() => setisAdding(false)} >Cancel</button>
                <button onClick={onSubmit} >Save</button>
            </div>
        
    </div>
  )
}

export default AddBookmark