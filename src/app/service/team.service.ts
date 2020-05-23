import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../interface/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public fetchTeamData(): Observable<Team[]> {
    return this.http.get<Team[]>('../../assets/team/teamData.json');
  }
}
