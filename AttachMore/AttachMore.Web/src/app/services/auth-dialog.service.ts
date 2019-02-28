import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SigninComponent, SignupComponent, PasswordComponent, ForgetPasswordComponent } from '../shared/dialogs';
import { DialogService } from './dialog.service';

@Injectable({
    providedIn: 'root'
})
export class AuthDialogService {

    whenSignInDialogClosed = new Subject();
    whenRegisterDialogClosed = new Subject();

    constructor(private dialog: MatDialog, private dialogService: DialogService) {
    }

    /**
     * opens signin form
     */
    openSigninForm() {
        const dialogRef = this.dialog.open(SigninComponent);

        dialogRef.afterClosed().subscribe(result => {
            // this.whenSignInDialogClosed.next(result);
            this.dialogService.planAndPricingDialog().subscribe(res => {
                this.dialogService.welcomeDialog().subscribe(welcomeRes => {
                });
            });
        });
    }

    /**
     * open register form
     * @param email
     */
    openRegisterForm(email?: string) {
        const dialogRef = this.dialog.open(SignupComponent, {
            data: email
        });

        return dialogRef.afterClosed().pipe(tap((result) => {
            if (result) {
                this.dialogService.welcomeDialog();
            }
        }));
    }

    /**
     * Password Dialog
     * @param email
     */
    passwordDialog(email: string) {
        const dialogRef = this.dialog.open(PasswordComponent, {
            data: email
        });
        return dialogRef.afterClosed().pipe(tap((result) => {
            if (result) {
                this.dialogService.planAndPricingDialog().subscribe(res => {
                    this.dialogService.welcomeDialog().subscribe(welcomeRes => {
                    });
                });
            }
        }));
    }

    /**
  * password reset Dialog
  * @param data
  */
    forgetPasswordDialog(data: any) {
        const dialogRef = this.dialog.open(ForgetPasswordComponent, {
            data: data
        });
        return dialogRef.afterClosed();
    }
}
