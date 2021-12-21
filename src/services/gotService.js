export default class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getResources =async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResources('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const char = await this.getResources(`/characters/${id}`);
        return this._transformCharacter(char)
    }
    getAllHouses = async () => {
        const res = await this.getResources('/houses?page=1&pageSize=10');
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResources(`/houses/${id}`);
        return this._transformHouse(house)
    }
    getAllBooks = async () => {
        const res = await this.getResources('/books?page=1&pageSize=10');
        return res.map(this._transformBook)
    }
    getBook = async (id) => {
        const book = await this.getResources(`/books/${id}`);
        return this._transformBook(book)
    }

    // isSet = (data) => {
    //     for (let value in data) {
    //         if (data[value] === ''){
    //             data[value] = 'no data'
    //         }
    //     }

    // }

    _transformCharacter(char){       
        for (let value in char) {
            if (char[value] === ''){
                char[value] = 'no data'
            }
        }
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            id: char.url.replace(/[\D]/g, '')
        }
    }

    _transformHouse(house) {
        for (let value in house) {
            if (house[value] === ''){
                house[value] = 'no data'
            }
        }
        // this.isSet(house)
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapon: house.ancestralWeapon,
            id: house.url.replace(/[\D]/g, '') 
        }
    }

    _transformBook(book){
        for (let value in book) {
            if (book[value] === ''){
                book[value] = 'no data'
            }
        };
        // this.isSet(book)
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,
            id: book.url.replace(/[\D]/g, '')
        }
    }
}

