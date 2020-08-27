import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public userCard: Array<Text>;
  public randomNumber = (Math.random() * 100).toFixed(0);
  buttonStatus = true;
  showImage = false;
  person = {
    name: '',
    email: '',
    phone: '',
    image: {},
  };

  public getUser(): Array<Text> {
    return this.userCard = JSON.parse(localStorage.getItem('user'));
  }

  public setUser(): void {
    const user = JSON.stringify(this.person);
    localStorage.setItem('user', user);
  }

  public addImage(target: HTMLInputElement): void {
    if (target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        this.person.image = event.target.result;
        this.showImage = true;
      };
      reader.readAsDataURL(file);
      if (this.person.image) {
        this.buttonStatus = false;
      }
    }
  }
}
