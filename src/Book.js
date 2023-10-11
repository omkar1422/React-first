import books from './books.js'

const Book = (props) => {
    const {img, title, author, id} = props;

    const findID = (id) => {

        books.find((book) => {

            if(book.id === id)
            console.log(id);
        });
    }

    const findOneBook = () => {
        findID(id);
    }

    return(
        <section className="book">
            <div className='number'>#{id}</div>
            <img className="book-img" src = {img} alt = "book" />
            <button onClick={findOneBook}>Book btn</button>
            <h2 className = "book h2" > {title} </h2>
            <p className="book h2"> {author} </p>
        </section>
    );
}

export default Book;