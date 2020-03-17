import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../book.model';
import { BookService } from 'src/app/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  categories = [];

  private bookSub: Subscription;
  constructor(private bookService: BookService, public route: ActivatedRoute,
    private router: Router, private titleService: Title) {

  }
  ngOnInit() {
    this.bookService.getCategories().subscribe(categoryData => {
      this.categories = categoryData.categories;
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const category = paramMap.get('category');
      if (category) {
        this.bookService.getBooks(category);
        this.titleService.setTitle(category);
      }
      else
        this.router.navigate(['/product/Tất cả']);
    })


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
