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
    getAllCharacters(){
        return this.getResources('/characters?page=5&pageSize=10')
    }
    getCharacter(id){
        return this.getResources(`/characters/${id}`)
    }
    getAllHouses(){
        return this.getResources('/houses?page=5&pageSize=10')
    }
    getHouse(id){
        return this.getResources(`/houses/${id}`)
    }
    getAllBooks(){
        return this.getResources('/books?page=5&pageSize=10')
    }
    getBook(id){
        return this.getResources(`/books/${id}`)
    }
}


const got = new GotService();

got.getAllCharacters()
    .then(res => console.log(res));

got.getCharacter(130)
    .then(res => console.log(res));

got.getAllCharacters()
    .then(res => {
        res.forEach( item => console.log(item.name));
    });
