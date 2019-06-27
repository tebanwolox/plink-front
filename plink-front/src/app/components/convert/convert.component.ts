import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  rForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.rForm = this.fb.group({
      amount: ['', Validators.compose([Validators.required])],
      from: ['', Validators.compose([Validators.required])],
      to: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

}
