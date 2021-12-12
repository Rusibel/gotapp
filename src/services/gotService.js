class GotService {
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
    getCharacters(id){
        return this.getResources(`/characters/${id}`)
    }
}

const got = new GotService;

got.getAllCharacters()
    .then(res => console.log(res));

got.getCharacters(130)
    .then(res => console.log(res));

got.getAllCharacters()
    .then(res => {
        res.forEach( item => console.log(item.name));
    });
