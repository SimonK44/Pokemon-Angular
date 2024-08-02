import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _base_url: string = 'https://akabab.github.io/superhero-api/api'

  constructor(@Inject(HttpClient) private _httpClient: HttpClient) { }

  public recupererLesPokemons(): Observable<Super[]> {
    return this._httpClient.get<Super[]>(this._base_url + '/all.json');
  }

  public recupererUnPokemon(id:number): Observable<Super>  {
    return this._httpClient.get<Super>(this._base_url + '/id/' + id + '.json');    
  }
}
