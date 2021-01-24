import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetailsForm: FormGroup;
  submitted: boolean;
  jsonRequest: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-z ]*$")]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(99), Validators.pattern("^[0-9]*$")]],
      panNo: ['', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]],
      passportNo: ['', [Validators.required, Validators.pattern("^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$")]],
      currency: ['', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{2})?$")]]
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'User Details is Successful',
    });

    let jsonReq = this.userDetailsForm.value;

    console.log("JSON REQUEST: " + JSON.stringify(jsonReq));
    this.jsonRequest = JSON.stringify(jsonReq);
  }
  
}
