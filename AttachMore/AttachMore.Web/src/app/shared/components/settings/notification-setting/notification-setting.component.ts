import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SettingsService } from '../../../../services/settings.service';
import { NotificationSettings } from '../../../../models';
import { UploadService } from '../../../../services/upload.service';
import { NotificationService } from '../../../../services/notification.service';
import { MESSAGES } from '../../../../configuration/success.msg';

@Component({
  selector: 'am-notification-setting',
  templateUrl: './notification-setting.component.html',
  styleUrls: ['./notification-setting.component.scss']
})
export class NotificationSettingComponent implements OnInit, AfterViewInit {

  notificationSettingForm: FormGroup;
  @Input() settings: NotificationSettings;

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
    if (!this.notificationSettingForm) {
      return;
    }
    this.notificationSettingForm.setValue({
      whenDownload: this.settings.whenDownload,
      whenExpired: this.settings.whenExpired,
      byEmail: this.settings.byEmail,
      byText: this.settings.byText
    });
  }

  /**
  * @description Intialize Form
  */
  initalizeForm(): void {
    this.notificationSettingForm = new FormGroup({
      whenDownload: new FormControl(),
      whenExpired: new FormControl(),
      byEmail: new FormControl(),
      byText: new FormControl()
    });
  }

  onSubmit() {
    const JSON_DATA: NotificationSettings = {
      ...this.notificationSettingForm.value,
      attachmentId: this.uploadService.attachmentId
    };

    this.settingsService.notificationSettings(JSON_DATA).subscribe(res => {
      this.notificationService.notify(MESSAGES.notificationSettings);
    });
  }

}
