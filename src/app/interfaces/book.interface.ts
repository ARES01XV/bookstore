export class Books {
  _id: String;
  categoryID: String;
  book_name: String;
  image_url: String;
  author: String;
  price: Number;

  constructor(
    _id?: String,
    categoryID?: String,
    book_name?: String,
    image_url?: String,
    author?: String,
    price?: Number
  ) {
    (this._id = _id!),
      (this.categoryID = categoryID!),
      (this.book_name = book_name!),
      (this.image_url = image_url!),
      (this.author = author!),
      (this.price = price!);
  }
}
