import React  from "react";
import {useReducer} from 'react'
import BookShow from "./BookShow"
import './styles.css'
import {bookReducer} from './Reducer'  


const BookSearchs = ({books}) => {

  const [bookState, bookDispatch] = useReducer(bookReducer,{
    searchAuthor:"",
    searchTitle:"",
    searchCountry:"",
    searchLanguage:"",
    searchYear:"",
  })
  

  const transformBooks = () =>{
    let sortedBooks = books
    if (bookState.searchAuthor){
      sortedBooks = sortedBooks.filter((book) => 
        book.author.toLowerCase().includes(bookState.searchAuthor)
      )}
    if(bookState.searchTitle){
        sortedBooks = sortedBooks.filter((book) =>
        book.title.toLowerCase().includes(bookState.searchTitle) 
      )}
     if (bookState.searchCountry){
      sortedBooks = sortedBooks.filter((book) =>
    book.country.toLowerCase().includes(bookState.searchCountry)    
                                 )}
    if (bookState.searchLanguage){
      sortedBooks = sortedBooks.filter((book) =>
    book.language.toLowerCase().includes(bookState.searchLanguage)    
                                 )}
    if (bookState.searchYear){
      sortedBooks = sortedBooks.filter((book) =>
    book.year.toString().includes(bookState.searchYear)    
                                 )}
    return sortedBooks
  }
  return (
      <div >
         <span className="label">author: </span>
          <input
                  data-testid="author"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_AUTHOR",
                  payload: e.target.value,
                  })
                  }}>
           </input><br/>
          <label className="label">title:  </label>
          <input 
                  data-testid="title"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_TITLE",
                  payload: e.target.value,
                  })
                  }}></input><br/>
          <label className="label">country: </label>
          <input 
                  
                  data-testid="country"
                  type="search"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_COUNTRY",
                  payload: e.target.value,
                  })
                  }}></input><br/>
          <label className="label">language: </label>
          <input 
                  data-testid="language"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_LANGUAGE",
                  payload: e.target.value,
                  })
                  }}></input><br/>
          <label className="label">year: </label>
          <input
                  data-testid="year"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_YEAR",
                  payload: e.target.value,
                  })
                  }}></input>
        <div > 
          {transformBooks().map((book)=>(
            <BookShow   key={book.key} book={book}/>     
          ))} 
        </div>
      </div>
  );
};

export default BookSearchs;
