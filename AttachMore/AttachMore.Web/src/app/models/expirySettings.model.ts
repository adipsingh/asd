import { Moment } from 'moment';

export interface ExpirySettings {
    attachmentId: number;
    downloadsLimit: number;
    expiryDate: Moment;
    deletionDate: Moment;

}
