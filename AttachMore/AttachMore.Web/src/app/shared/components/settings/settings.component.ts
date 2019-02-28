import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';
import { SecuritySettings, NotificationSettings, ExpirySettings } from '../../../models';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'am-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  minDate = moment();
  @Input() expirySettings: ExpirySettings = <ExpirySettings>{};
  @Input() notificationSettings: NotificationSettings = <NotificationSettings>{};
  @Input() securitySettings: SecuritySettings = <SecuritySettings>{};

  constructor(private uploadService: UploadService) { }

  ngOnInit() {

    this.expirySettings = {
      attachmentId: this.uploadService.attachmentId,
      downloadsLimit: 5,
      expiryDate: this.minDate.add(5, 'days'),
      deletionDate: this.minDate.add(5, 'days')
    };



    this.notificationSettings = {
      attachmentId: this.uploadService.attachmentId,
      whenExpired: false,
      whenDownload: false,
      byEmail: false,
      byText: false
    };



    this.securitySettings = {
      attachmentId: this.uploadService.attachmentId,
      accessPassword: '',
      accessEmail: '',
      accessName: '',
      accessCompany: '',
      accessContactNumber: '',
      accessPayment: 0
    };

  }

}
