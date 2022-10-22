import React, { useState } from 'react'

const AddCat = ({setisCategoryAdding}) => {
const [category, setcategory] = useState('')
const [error, seterror] = useState(false)

    const onSubmit = () => {
        if (category.length === 0) {
            seterror(true)
            return
        }
        if (!localStorage.getItem('category')) {
            localStorage.setItem('category', JSON.stringify('[]'))
        }
        const oldCategory = localStorage.getItem('category')
        console.log(oldCategory);
        let parsedOldCategory = JSON.parse(oldCategory)
        
        parsedOldCategory.push(category)
        localStorage.setItem('category', JSON.stringify(parsedOldCategory))
        setisCategoryAdding(false)
    }

  return (
    <div className='add-cat-popup'>
        <h2>Add new category</h2>
        <span className='error'>{error&& 'Category name invalid!'}</span>
        <input type="text" placeholder='Category' onChange={e => setcategory(e.target.value)} />
        <div className="group">
        <button onClick={() => setisCategoryAdding(false)}>Cancle</button>
        <button onClick={onSubmit}>Add</button>
        </div>
    </div>
  )
}

export default AddCat