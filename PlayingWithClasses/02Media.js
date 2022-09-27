class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    const ratingsLength = this.ratings.length;
    let initialValue = 0;
    let averageRatings = this.ratings.reduce(
      (previousValue, rating) => previousValue + rating,
      initialValue
    );
    let average = Math.round(averageRatings / ratingsLength);
    return average;
  }

  addRating(newRating) {
    if (newRating > 5 || newRating < 1) {
      console.log("Error ~ Please input rating between 1 and 5");
      return;
    }
    this.ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get pages() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

const book1 = new Book("How To Cook", "Mike Jones", 404);
book1.addRating(1);
book1.addRating(10);
book1.addRating(0);
book1.toggleCheckOutStatus();
console.log(book1);
console.log(book1.getAverageRating());
console.log(book1.ratings);
console.log(book1.title);
console.log(book1.isCheckedOut);
console.log("- - -");

const movie1 = new Movie("Need for Feed", "Percy Bacon", 101);
movie1.toggleCheckOutStatus();
movie1.addRating(8);
movie1.addRating(8);
movie1.addRating(5);
console.log(movie1);
console.log(movie1.getAverageRating());
console.log(movie1.ratings);
console.log(movie1.title);
console.log(movie1.isCheckedOut);
console.log("- - -");

const cd1 = new CD("Bangin' Tunes", "DJ Debbie", ["I Like that", "Track 42"]);
cd1.toggleCheckOutStatus();
cd1.addRating(3);
cd1.addRating(2);
console.log(cd1);
console.log(cd1.getAverageRating());
console.log(cd1.ratings);
console.log(cd1.title);
console.log(cd1.isCheckedOut);
console.log("- - -");
cd1.isCheckedOut = false;

console.log(cd1.isCheckedOut);
