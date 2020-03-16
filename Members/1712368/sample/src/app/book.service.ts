import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class BookService {
  private books: Book[] = [];
  constructor(private http: HttpClient) { };
  private booksUpdated = new Subject<Book[]>();
  getBooks() {
    this.http.get<{ message: string, books: any }>("http://localhost:3000/api/books").pipe(map(bookData => {
      return bookData.books.map(book => {
        const date = new Date(+book.publicationDate);
        console.log(date);
        return {
          id: book._id,
          imagePath: book.imagePath,
          name: book.name,
          author: book.author,
          category: book.category,
          price: book.price,
          publisher: book.publisher,
          publicationDate: date,
          height: book.height,
          width: book.width,
          translator: book.translator,
          coverType: book.coverType,
          totalPages: book.totalPages,
          introduction: book.introduction
        }

      });
    })).subscribe(books => {
      this.books = [...books];
      console.log(this.books);
      this.booksUpdated.next([...this.books]);
    });

  }

  getBook(bookId: string) {
    return this.http.get<{
      _id: string,
      imagePath: string,
      name: string,
      author: string,
      category: string,
      price: number,
      publisher: string,
      publicationDate: Date,
      height: number,
      width: number,
      translator: string,
      coverType: string,
      totalPages: number,
      introduction: string
    }>("http://localhost:3000/api/books/" + bookId);
  }

  getBookUpdateListener() {
    return this.booksUpdated.asObservable();
  }

  addBook(image: File, name: string, author: string, category: string, price: number, publisher: string, publicationDate: string,
    height: number, width: number, translator: string, coverType: string, totalPages: number, introduction: string,
  ) {
    const bookData = new FormData();
    bookData.append("image", image, name);
    bookData.append("name", name);
    bookData.append("author", author);
    bookData.append("category", category);
    bookData.append("price", price.toString(10));
    bookData.append("publisher", publisher);
    const date = new Date(publicationDate);
    bookData.append("publicationDate", date.getTime().toString());
    bookData.append("height", height.toString(10));
    bookData.append("width", width.toString(10));
    bookData.append("translator", translator);
    bookData.append("coverType", coverType);
    bookData.append("totalPages", totalPages.toString(10));
    bookData.append("introduction", introduction);
    this.http.post<{ message: string, book: Book }>("http://localhost:3000/api/books", bookData).subscribe(responseData => {
      console.log(responseData);
      const date = new Date(responseData.book.publicationDate);
      console.log(responseData.book);
      const book: Book = {
        id: responseData.book.id,
        imagePath: responseData.book.imagePath,
        name: responseData.book.name,
        author: responseData.book.author,
        category: responseData.book.category,
        price: responseData.book.price,
        publisher: responseData.book.publisher,
        publicationDate: date,
        height: responseData.book.height,
        width: responseData.book.width,
        translator: responseData.book.translator,
        coverType: responseData.book.coverType,
        totalPages: responseData.book.totalPages,
        introduction: responseData.book.introduction
      };
      console.log(book);
      this.books.push(book);

    });
  }
}
