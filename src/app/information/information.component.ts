import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.sass']
})
export class InformationComponent implements OnInit {
  form: FormGroup;
  showImage = false;
  toggleName = true;
  toggleEmail = false;
  togglePhone = false;
  toggleImage = false;
  toggleSubmit = false;
  buttonStatus = true;
  person = {
    name: '',
    email: '',
    phone: '',
    image: {},
  };

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  goToResultsPage() {
    const user = JSON.stringify(this.person);
    localStorage.setItem('user', user);
    this.router.navigate(['/results']);
  }

  inputName() {
    this.toggleName = !this.toggleName;
    this.person.name = this.form.value.name;
  }

  inputEmail() {
    this.toggleEmail = !this.toggleEmail;
    this.person.email = this.form.value.email;
  }

  inputPhone() {
    this.togglePhone = !this.togglePhone;
    this.person.phone = this.form.value.phone;
  }

  addImage(target: HTMLInputElement): void {
    if (target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        this.person.image = event.target.result;
        this.showImage = true;
      }
      reader.readAsDataURL(file);
      if (this.person.image) {
        this.buttonStatus = false;
      }
    }
  }
  sendImage() {
    this.toggleImage = !this.toggleImage;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+([a-zA-Z]*)*$/), Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/), Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[+][1][1-9]\d{2}[-][1-9]\d{2}[-]\d{4}$/)]]
    })
  }

  isControlInvalid(controlName: string): boolean{
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

}
