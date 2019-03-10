import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { FlexLayoutModule } from "@angular/flex-layout"

//import { MaterialComponent } from './material.component';

import { DragDropModule } from "@angular/cdk/drag-drop"
import { CdkTableModule } from "@angular/cdk/table"
import { CdkTreeModule } from "@angular/cdk/tree"
import { PlatformModule } from "@angular/cdk/platform"
import { ObserversModule } from "@angular/cdk/observers"

import { CovalentLayoutModule } from "@covalent/core/layout"
import { CovalentStepsModule } from "@covalent/core/steps"
/* any other core modules */
// (optional) Additional Covalent Modules imports
//import { CovalentHttpModule } from "@covalent/http"
import { CovalentHighlightModule } from "@covalent/highlight"
import { CovalentMarkdownModule } from "@covalent/markdown"
import { CovalentDynamicFormsModule } from "@covalent/dynamic-forms"

import {
  CovalentCommonModule,
  CovalentMediaModule,
  CovalentExpansionPanelModule,
  CovalentDialogsModule,
  CovalentLoadingModule,
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentNotificationsModule,
  CovalentMenuModule,
  CovalentDataTableModule,
  CovalentMessageModule,
  CovalentChipsModule,
  CovalentVirtualScrollModule,
  CovalentFileModule,
} from "@covalent/core"

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  ///MatIconRegistry,
} from "@angular/material"

@NgModule({
  //declarations: [MaterialComponent],
  imports: [CommonModule],
  exports: [
    FlexLayoutModule,

    /** Material Modules */
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ObserversModule,
    PlatformModule,
    //MatIconRegistry,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,

    // 3rd party

    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports

    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,

    CovalentCommonModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    CovalentChipsModule,
    CovalentVirtualScrollModule,
    CovalentFileModule,
  ],
})
export class MaterialModule {}
