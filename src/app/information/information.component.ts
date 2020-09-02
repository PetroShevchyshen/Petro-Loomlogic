import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.sass']
})
export class InformationComponent implements OnInit {
  form: FormGroup;
  state: 'nameState' | 'emailState' | 'phoneState' | 'imageSate' | 'previewState' = 'nameState';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private user: UserServiceService
  ) { }

  goToResultsPage(): void {
    this.router.navigate(['/results']);
    this.user.setUser();
    this.user.checkStorage();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+([a-zA-Z]*)*$/), Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/), Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[+][1][1-9]\d{2}[-][1-9]\d{2}[-]\d{4}$/)]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  changeFormInput(value: string): void {
    switch (value) {
      case 'name':
        this.state = 'emailState';
        this.user.person.name = this.form.value.name;
        break;
      case 'email':
        this.state = 'phoneState';
        this.user.person.email = this.form.value.email;
        break;
      case 'phone':
        this.state = 'imageSate';
        this.user.person.phone = this.form.value.phone;
        break;
      case 'image':
        this.state = 'previewState';
        break;
      default:
        console.error('Error. Method \'changeFormInput\' accepted value is not a string');
        break;
    }
  }
}
