import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    book: Book;

    constructor(
        public booksService: BookService,
        public route: ActivatedRoute,
        private titleService: Title) { }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            const bookId = paramMap.get("id");
            this.booksService.getBook(bookId).subscribe(book => {
                const date = new Date(+book.publicationDate);
                this.book = {
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
                };

                this.titleService.setTitle(book.name);
            });
        })
    }
}