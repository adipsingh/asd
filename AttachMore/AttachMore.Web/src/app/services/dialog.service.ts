import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { WelcomeComponent, AmConfirmationComponent, DownloadAttachmentComponent } from '../shared/dialogs';
import { Confirmation } from '../shared/dialogs/am-confirmation/confirmation';
import { SecuritySettings } from '../models';
import { PlanPricingComponent } from '../shared/dialogs/plan-pricing/plan-pricing.component';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) {
    }

    /**
     * Welcome Dialog
     */
    welcomeDialog(): Observable<any> {
        const dialogRef = this.dialog.open(WelcomeComponent);

        return dialogRef.afterClosed();
    }

    /**
     * Plan and Pricing dialog
     */
    planAndPricingDialog(): Observable<any> {
        const dialogRef = this.dialog.open(PlanPricingComponent);

        return dialogRef.afterClosed();
    }

    /**
     * Confirmation Dialog
     * @param data
     */
    confirmationDialog(data: Confirmation) {
        const dialogRef = this.dialog.open(AmConfirmationComponent, {
            data: data
        });
        return dialogRef.afterClosed();
    }

     /**
     * Download attachment Dialog
     * @param data
     */
    downloadAttachmentDialog(data: SecuritySettings) {
        const dialogRef = this.dialog.open(DownloadAttachmentComponent, {
            data: data
        });
        return dialogRef.afterClosed();
    }
}
