import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SettingsService } from '../../../../services/settings.service';
import { ExpirySettings } from '../../../../models';
import { UploadService } from '../../../../services/upload.service';
import { NotificationService } from '../../../../services/notification.service';
import { MESSAGES } from '../../../../configuration/success.msg';

import * as moment from 'moment';

@Component({
  selector: 'am-expiry-setting',
  templateUrl: './expiry-setting.component.html',
  styleUrls: ['./expiry-setting.component.scss']
})
export class ExpirySettingComponent implements OnInit, AfterViewInit {

  minDate = moment();
  expirySettingForm: FormGroup;
  @Input() settings: ExpirySettings;

  constructor(private settingsService: SettingsService,
    private uploadService: UploadService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.initalizeForm();
  }

  ngAfterViewInit() {
    this.intializeFormValue();
  }

  intializeFormValue() {
    if (!this.expirySettingForm) {
      return;
    }
    this.expirySettingForm.setValue({
      downloadsLimit: this.settings.downloadsLimit.toString(),
      expiryDate: this.settings.expiryDate,
      deletionDate: this.settings.deletionDate,
    });
  }

  /**
  * @description Intialize Form
  */
  initalizeForm(): void {
    this.expirySettingForm = new FormGroup({
      downloadsLimit: new FormControl(),
      expiryDate: new FormControl(),
      deletionDate: new FormControl()
    });
  }

  onSubmit() {

    const JSON_DATA: ExpirySettings = {
      ...this.expirySettingForm.value,
      attachmentId: this.uploadService.attachmentId
    };

    this.settingsService.expirySettings(JSON_DATA).subscribe(res => {
      this.notificationService.notify(MESSAGES.expirySettings);
    });
  }
}
