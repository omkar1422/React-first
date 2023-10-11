import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

import books from './books';
import Book from './Book';

const BookList = () => {
    return (
        <>
        <h1>amazon bestseller books</h1>
        <section className="booklist">
            {/* <FormElement/> */}
            {
                books.map((book) => {
                    // const {img, title, author} = book;
                    return(
                        // <Book img = {img} title = {title} author = {author} />
                        // <Book book = {book} key = {book.id} />
                        <Book {...book} key = {book.id} />
                    );
                })
            }
        </section>
        </>
    );
}

const FormElement = () => {

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        console.log('change detected');
    }

    const handleClick = (e) => {
        
        alert('Clicked on btn');
    }

    const handleFormSubmission = (e) => {
        // e.preventDefault();
        console.log('form submitted');
    }

    return(
        <section>
            <form onSubmit={handleFormSubmission}>
                <input onChange={handleChange} name="email" type="text"></input>
                
            </form>
            <button type="submit">Submit</button>
            {/* <button onClick={handleClick} type="button" style={{margin: '1rem'}} >Click me</button>
             */}
            <button onClick={handleClick} type="button" style={{margin: '1rem'}} >Click me</button>
                    
        </section>
    );
}

// const Title = (props) => {
//     return <h2 className="book h2"> {props.title} </h2>;
// }

// const Image = (props) => {
//     return (
//         <section  className="book-img">
//             <img src = {props.img}
//             alt="book"
//             />
//         </section>
//     );
// }

// const Author = (props) => {
//     return <p className="book h2"> {props.author} </p>;
// }


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList className="booklist"/>);