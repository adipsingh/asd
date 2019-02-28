import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { AttachmentService } from '../../../services/attachment.service';
import { AttachmentPreview } from '../../../models';
import { ICONS_MAPPER } from '../../../untility';

@Component({
  selector: 'am-download-preview',
  templateUrl: './download-preview.component.html',
  styleUrls: ['./download-preview.component.scss']
})
export class DownloadPreviewComponent implements OnInit, OnChanges {

  attachment: AttachmentPreview;
  icons = ICONS_MAPPER;

  @Input() attachmentId: number;

  get fileSizeInfo(): string {
    if (!this.attachment) {
      return '';
    }
    return `Size: ${this.attachment.attachmentSize}MB/${this.attachment.fileDetails.length}`;
  }
  constructor(private attachmentService: AttachmentService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.attachmentId.currentValue) {
      this.getAttachmentPreview(changes.attachmentId.currentValue);
    }
  }

  ngOnInit() {
  }

  /**
   * Get preview of attachment
   * @param attachmentId
   */
  getAttachmentPreview(attachmentId: number) {
    this.attachmentService.getAttachmentPreviewById(attachmentId).subscribe(res => {
      this.getFilesExtension(res);
    });
  }

  /**
   * Get files extension
   * @param res
   */
  getFilesExtension(attachmentPreview: AttachmentPreview): void {
    if (attachmentPreview) {
      attachmentPreview.fileDetails.forEach((file) => {
        file.extension = file.fileName.split('.').pop().toLowerCase();
        file.isImage = file.fileType.includes('image');
      });
      this.attachment = attachmentPreview;
    }
  }
}
