export default class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    async getAllCharacters(){
        const res = await this.getResources('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }
    async getCharacter(id){
        const char = await this.getResources(`/characters/${id}`);
        return this._transformCharacter(char)
    }
    async getAllHouses(){
        const res = await this.getResources('/houses?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }
    async getHouse(id){
        const house = await this.getResources(`/houses/${id}`);
        return this._transformCharacter(house)
    }
    async getAllBooks(){
        const res = await this.getResources('/books?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }
    async getBook(id){
        const book = await this.getResources(`/books/${id}`);
        return this._transformCharacter(book)
    }

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

    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapon: house.ancestralWeapon
        }
    }

    _transformBook(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}

