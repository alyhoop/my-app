import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent {
    userEmails = new FormGroup({
    	primaryEmail: new FormControl(''),
    	secondaryEmail: new FormControl('')
    });


  constructor() { }

  ngOnInit(): void {
  }

}
