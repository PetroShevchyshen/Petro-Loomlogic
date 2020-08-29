import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userCard: Array<Text>;
  randomNumber = (Math.random() * 100).toFixed(0);
  buttonStatus = true;
  showImage = false;
  showInformBlock = true;
  parsedStorage = JSON.parse(localStorage.getItem('user'));
  person = {
    name: '',
    email: '',
    phone: '',
    image: {},
  };

  getUser(): Array<Text> {
    return this.userCard = this.parsedStorage;
  }

  setUser(): void {
    const user = JSON.stringify(this.person);
    localStorage.setItem('user', user);
  }

  addImage(target: HTMLInputElement): void {
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

  clearLocalStorage(): void {
    localStorage.clear();
    window.location.reload();
  }

  checkStorage(): void {
    if (this.parsedStorage !== null) {
      this.showInformBlock = false;
      this.getUser();
    }else{
      this.showInformBlock = true;
    }
  }
}
