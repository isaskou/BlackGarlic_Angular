import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { Command } from 'src/app/Models/Caddie/command';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private url = environment.apiUrl + 'Command/api/Command/';

  constructor(private _http: HttpClient) { }
  
  sendCommandToApi(cmd: Command): Subscribable<any>{
    return this._http.post(this.url, cmd);
  }

  getDetailsByCommandId(id: number): Subscribable<any>{
    return this._http.get(this.url + id);
  }
}
