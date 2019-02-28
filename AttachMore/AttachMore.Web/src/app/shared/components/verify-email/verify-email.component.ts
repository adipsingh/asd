import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { AuthDialogService } from 'src/app/services/auth-dialog.service';

@Component({
  selector: 'am-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  userEmail: FormControl;

  constructor(
    public authService: AuthService,
    private authDialogService: AuthDialogService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.userEmail = new FormControl(null, Validators.email);
  }

  /**
  * Verify Email
  */
  verifyEmail() {
    if (this.userEmail.invalid || !this.userEmail.value) {
      return;
    }
    this.authService.verifyEmail(this.userEmail.value).subscribe(res => {      
      if (res.id > 0) {        
        this.authDialogService.passwordDialog(this.userEmail.value).subscribe(result => {
          console.log(result);
        });
      } else {
        this.authDialogService.openRegisterForm(this.userEmail.value).subscribe(result => {
          console.log(result);
        });
      }
    });
  }

}
