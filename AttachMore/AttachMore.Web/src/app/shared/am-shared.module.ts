import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {  FileUploadModule} from 'ng2-file-upload';

import { AmMaterialModule } from './am-material.module';
import { AM_SHARED_COMPONENTS } from './components';
import { AM_SHARED_DIRECTIVES } from './directives';
import { AM_SHARED_PIPES } from './pipes';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MAT_DIALOG_CONFIG } from '../configuration/mat-dialog.config';
import { SHARED_DIALOG_COMPONENTS } from './dialogs';

@NgModule({
    declarations: [
        ...AM_SHARED_COMPONENTS,
        ...AM_SHARED_DIRECTIVES,
        ...AM_SHARED_PIPES,
        ...SHARED_DIALOG_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AmMaterialModule,
        FlexLayoutModule,
        FileUploadModule
    ],
    entryComponents: [
        ...SHARED_DIALOG_COMPONENTS
    ],
    providers: [
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: MAT_DIALOG_CONFIG
        }],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AmMaterialModule,
        FileUploadModule,
        ...AM_SHARED_COMPONENTS,
        ...AM_SHARED_DIRECTIVES,
        ...AM_SHARED_PIPES
    ]
})
export class AmSharedModule { }
