import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../book.model';
import { BookService } from 'src/app/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  private bookSub: Subscription;
  constructor(private bookService: BookService) { }
  ngOnInit() {

    this.bookService.getBooks();
    this.bookSub = this.bookService.getBookUpdateListener().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
  onBookDetail(bookId: string) {
    this.bookService.getBook(bookId).subscribe(book => {
      console.log(book);
    });

  }
  ngOnDestroy() {
    this.bookSub.unsubscribe();
  }
}
