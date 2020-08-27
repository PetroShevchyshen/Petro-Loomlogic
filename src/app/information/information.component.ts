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
  togglePage = {
    toggleName: true,
    toggleEmail: false,
    togglePhone: false,
    toggleImage: false,
    toggleSubmit: false
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private user: UserServiceService
  ) { }

  goToResultsPage(): void {
    this.router.navigate(['/results']);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+([a-zA-Z]*)*$/), Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/), Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[+][1][1-9]\d{2}[-][1-9]\d{2}[-]\d{4}$/)]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  public changeFormInput(value): void{
    switch (value) {
      case 'name':
        this.togglePage.toggleName = false;
        this.user.person.name = this.form.value.name;
        break;
      case 'email':
        this.togglePage.toggleEmail = true;
        this.user.person.email = this.form.value.email;
        break;
      case 'phone':
        this.togglePage.togglePhone = true;
        this.user.person.phone = this.form.value.phone;
        break;
      case 'image':
        this.togglePage.toggleImage = true;
        break;
      default:
        console.log('Error');
        break;
    }
  }
}
