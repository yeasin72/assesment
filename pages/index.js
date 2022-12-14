import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import AddBookmark from './common/component/AddBookmark/AddBookmark'
import AddCat from './common/component/AddCat/AddCat'
import Category from './common/component/Category/Category'
import Container from './common/component/Container/Container'

export default function Home() {
  const [error, seterror] = useState(false)
  const [isAdding, setisAdding] = useState(false)
  const [isAddingCategory, setisAddingCategory] = useState(false)



  const onSubmitHandler = (bookMark) => {
    if(bookMark.title.length < 1 || bookMark.URL.length == 0 || bookMark.title.length > 30 || bookMark.category.length === 0 || bookMark.category === 'Select'){
      seterror(true)
      return
    }else{
      seterror(false)
    }
    let oldData = localStorage.getItem('bookmark')
    const parsedOlddata = JSON.parse(oldData)
    if (parsedOlddata === null) {
      parsedOlddata = []
    }
    parsedOlddata.push(bookMark)
    localStorage.setItem('bookmark', JSON.stringify(parsedOlddata))
    setisAdding(false)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Container>
          <button onClick={() => setisAdding(true)}>Add Bookmark</button>
          <button className='category-button' onClick={() => setisAddingCategory(true)}>+</button>
          {isAdding && <AddBookmark setisAdding={setisAdding} onSubmitHandler={onSubmitHandler} error={error} />}
          {isAddingCategory && <AddCat setisCategoryAdding={setisAddingCategory} />}
          <Category />
        </Container>


    </div>
  )
}
