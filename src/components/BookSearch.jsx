import React  from "react";
import {useReducer} from 'react'
import BookShow from "./BookShow"
import './styles.css'
import {bookReducer} from './Reducer'  //import the reducer function


const BookSearch = ({books}) => {
    // TODO your code here
    // Add a useReducer hook and dispatch actions to change the initial state to the current state 
  const [bookState, bookDispatch] = useReducer(bookReducer,{
    searchAuthor:"",
    searchTitle:"",
    searchCountry:"",
    searchLanguage:"",
    searchYear:"",
  })
  
  // add if statements and the filter array method to return books to display
  const transformBooks = () =>{
    let sortedBooks = books
    if (bookState.searchAuthor){
      sortedBooks = sortedBooks.filter((book) => // filter all the books and return only those that include the search query
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
      <div className="main" >
        <div className="main2">
         <span className="label">author: </span>
          <input
                  id="author"
                  className="input"
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
                  id="title"
                  className="input"
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
                  
                  id="country"
                  className="input"
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
                 id="language"
                  className="input"
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
                  id="year"
                  className="input"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_YEAR",
                  payload: e.target.value,
                  })
                  }}></input>

</div>
        <div className="title"> 
          {transformBooks().map((book)=>(
            <BookShow key={book.key} book={book}/>     
          ))} 
        </div>

      </div>
  );
};

export default BookSearch;
