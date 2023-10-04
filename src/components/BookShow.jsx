import React from 'react'
import './styles.css'

// pass the book array as a prop and display each category
function BooShow({book}){
//   console.log(book.author)
  return(
    <div data-testid="book" className="title">

      <span className="author">author:</span>
        <label className="label">{book.author}</label><br/>
      <span className="span">country:</span>
        <label className="label">{book.country}</label><br/>
      <span className="span">language:</span>
        <label className="label">{book.language}</label><br/>
      <span className="span">pages:</span>
        <label className="label">{book.pages}</label><br/>
      <span className="span">title:</span>
        <label className="label">{book.title}</label><br/>
      <span className="span">year:</span>
        <label>{book.year}</label><br/>
      
    </div>
  )
}

export default BooShow