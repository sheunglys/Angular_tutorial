import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IronmanService } from '../ironman.service';
import { IronmanUser } from '../ironmanuser';

@Component({
  selector: 'app-ironman-list',
  templateUrl: './ironman-list.component.html',
  styleUrls: ['./ironman-list.component.css']
})
export class IronmanListComponent implements OnInit {

  constructor(private ironmanService: IronmanService) { }

  userListFromApi: IronmanUser[] = [];

  @Input()
  userList: IronmanUser[] = [];

  ngOnInit(): void {
    this.ironmanService
    .getUserList()
    .subscribe(data => {
      this.userListFromApi = data;
    });
  }

}
