import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  value: string;
  value2: string;

  loading: boolean = false;

  imgSrc: any;
  uploadedFiles: any[] = [];

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {
    console.log(this.imgSrc);
  }
  constructor(
    private _messageService: MessageService,
    private _authService: AuthService
  ) {
    console.log();
  }

  //prime ng upload img
  files: File[] = [];

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit(data: FormGroup) {
    console.log(data.value);
    let myFormData = new FormData();
    myFormData.append('email', data.value.email);
    myFormData.append('password', data.value.password);
    myFormData.append('confirmPassword', data.value.confirmPassword);
    myFormData.append('userName', data.value.userName);
    myFormData.append('phoneNumber', data.value.phoneNumber);
    myFormData.append('country', data.value.country);
    myFormData.append('profileImage', this.imgSrc);
    myFormData.append('role', 'user');

    this._authService.onRegister(myFormData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');

      },
    });
  }
}

