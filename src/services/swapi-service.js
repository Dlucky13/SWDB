
export default class SwapiService {

   _apiBaseUrl = 'https://swapi.dev/api'
   _imgBaseUrl = 'https://starwars-visualguide.com/assets/img/'

   async getResource(url) {
      const response = await fetch(this._apiBaseUrl + url);

      if (!response.ok) {
         throw new Error(`Could not show absent data from ${url} because ${response.status}`)
      }

      return await response.json()
   }

    getAllPeople = async () => {
      const res = await this.getResource(`/people/`)
      return res.results.map(this._transformPersonData);
   }

   getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`)
      return this._transformPersonData(person)
   }

   getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanetData)
   }

   getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}`)
      return this._transformPlanetData(planet)
   }

   getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarshipData)
   }

   getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}`)
      return this._transformStarshipData(starship)
   }

   getPersonImage = (itemId) => {
      return `${this._imgBaseUrl}characters/${itemId}.jpg`
   }
   getStarshipImage = (itemId) => {
      return `${this._imgBaseUrl}starships/${itemId}.jpg`
   }
   getPlanetImage = (itemId) => {
      return `${this._imgBaseUrl}planets/${itemId}.jpg`
   }

   _extractId (item){
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
   }


   _transformPlanetData = (planet) => {
      return {
         id: this._extractId(planet),
         name: planet.name,
            Population: planet.population,
            'Rotation Period': planet.rotation_period,
            Diameter: planet.diameter
      }
   }

   _transformStarshipData = (starship) => {
      return {
         id: this._extractId(starship),
         name: starship.name,
         model: starship.model,
         manufacturer: starship.manufacturer,
         costInCredits: starship.cost_in_credits,
         length: starship.length,
         crew: starship.crew,
         passengers: starship.passengers,
         cargoCapacity: starship.cargoCapacity
      }
   }

   _transformPersonData = (person) => {
      return {
         id: this._extractId(person),
         name: person.name,
         gender: person.gender,
         birthYear: person.birth_year,
         eyeColor: person.eye_color
      }
   }

}
