import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../../../../services/auth.service';
import { Signin } from 'src/app/models';

@Component({
  selector: 'am-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private authService: AuthService,
    private dialogRef: MatDialogRef<PasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public email: string) { }

  ngOnInit() {
    this.initalizeForm();
  }

  /**
  * @description Intialize Form
  */
  initalizeForm(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required
      ])
    });
  }

  /**
   * @description Fire When form is submitted
   */
  onSubmit(): void {
    if (this.passwordForm.invalid) {
      return;
    }
    const JSON_DATA: Signin = {
      ...this.passwordForm.value,
      email: this.email,
      rememberMe: false
    };

    this.authService.signinUser(JSON_DATA).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
