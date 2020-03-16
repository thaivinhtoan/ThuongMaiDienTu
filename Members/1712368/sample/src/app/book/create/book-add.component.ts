import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from 'src/app/book.service';

@Component({
  selector: "add-book",
  templateUrl: "./book-add.component.html",
  styleUrls: ["./book-add.component.css"]
})
export class AddingBookComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;

  constructor(public bookService: BookService) { }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators: [Validators.required]
      }),
      author: new FormControl(null, {
        validators: [Validators.required]
      }),
      translator: new FormControl(null, {
        validators: [Validators.required]
      }),
      price: new FormControl(null, {
        validators: [Validators.required]
      }),
      publicationDate: new FormControl(null, {
        validators: [Validators.required]
      }),
      height: new FormControl(null, {
        validators: [Validators.required]
      }),
      width: new FormControl(null, {
        validators: [Validators.required]
      }),
      coverType: new FormControl(null, {
        validators: [Validators.required]
      }),
      totalPages: new FormControl(null, {
        validators: [Validators.required]
      }),
      introduction: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }
  onAddBook() {
    if (this.form.invalid) return;
    this.bookService.addBook(this.form.value.image,
      this.form.value.name,
      this.form.value.author,
      this.form.value.price,
      this.form.value.publicationDate,
      this.form.value.height,
      this.form.value.width,
      this.form.value.translator,
      this.form.value.coverType,
      this.form.value.totalPages,
      this.form.value.introduction
    );
  }
}
