import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';
import { Team } from '../interface/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team: Team[] = [];

  constructor(private teamService: TeamService) {

    this.teamService.fetchTeamData().subscribe(response => {
      this.team = response;
    });
  }

  ngOnInit(): void {
  }
}
