import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  favoriteColor = '';

  constructor() { }

  ngOnInit(): void {
  }


}
