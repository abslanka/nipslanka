import { Component, OnInit, HostBinding, ViewChild } from "@angular/core"
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MatBottomSheetConfig,
  MatDialogConfig,
  MatDialog,
} from "@angular/material"
import { IPageChangeEvent, TdPagingBarComponent } from "@covalent/core/paging"
import { TdDialogService } from "@covalent/core"
import {
  TdDataTableSortingOrder,
  TdDataTableService,
  TdDataTableComponent,
  ITdDataTableSortChangeEvent,
  ITdDataTableColumn,
} from "@covalent/core"
import * as moment from "moment"

import { slideInDownAnimation } from "./animation.util"

import { testData } from "./test-data"
import { JobSearchService } from "./job-search.service"
import { IRestResponse } from "src/app/models/interfaces"
import { VacancyDto } from "src/app/models/dto"
import { JobDetailComponent } from "../job-detail/job-detail.component"

const NUMBER_FORMAT: (v: any) => any = (v: number) => v
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2)
const DATE_FORMAT: (v: any) => any = (v: number) =>
  moment(v).format("DD/MM/YYYY")

const JOB_POSITION_FORMAT: (v: any) => any = (v: any) => v.name

@Component({
  selector: "app-job-search",
  templateUrl: "./job-search.component.html",
  styleUrls: ["./job-search.component.scss"],
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class JobSearchComponent implements OnInit {
  @HostBinding("@routeAnimation") routeAnimation: boolean = true
  @HostBinding("class.td-route-animation") classAnimation: boolean = true

  @ViewChild(TdPagingBarComponent) pagingBar: TdPagingBarComponent

  /* basicData: any[]
  dateSortData: any[]
  selectable: boolean = false
  multiple: boolean = true
  filterColumn: boolean = true

  sortBy: string = "first_name"
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending
  dateSortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending
 */

  jobListing: IRestResponse<VacancyDto[]>
  data: any[]
  filteredData: any[]
  filteredTotal: number
  selectedRows: any[] = []
  clickable: boolean = true
  resizableColumns: boolean = false

  fromRow: number = 1
  currentPage: number = 1
  pageSize: number = 3

  searchTerm: string = ""

  columns: ITdDataTableColumn[] = [
    { name: "id", label: "Id", hidden: true },
    { name: "noOfOpenings", label: "noOfOpenings", hidden: true },
    { name: "status", label: "Status", hidden: true },
    { name: "jobsOffered", label: "jobsOffered", hidden: true },
    { name: "benefits", label: "benefits", hidden: true },
    { name: "jobOrder", label: "jobOrder", hidden: true },

    {
      name: "createAt",
      label: "Posted Date",
      width: 100,
      sortable: true,
      format: DATE_FORMAT,
    },

    {
      name: "jobPosition",
      label: "Job Position",
      filter: true,
      sortable: false,
      width: 300,
      format: JOB_POSITION_FORMAT,
    },
    {
      name: "jobsAvailable",
      label: "No. Of Openings",
      numeric: true,
      width: 100,
      format: NUMBER_FORMAT,
    },
    {
      name: "salary",
      label: "Basic Salary",
      numeric: true,
      width: 150,
      format: DECIMAL_FORMAT,
    },
    {
      name: "location",
      label: "Location",
      sortable: true,
      width: 200,
    },
  ]

  columns2: ITdDataTableColumn[] = [
    { name: "first_name", label: "First Name", sortable: true, width: 150 },
    { name: "last_name", label: "Last Name", filter: true, sortable: false },
    { name: "gender", label: "Gender", hidden: false },
    { name: "email", label: "Email", sortable: true, width: 250 },
    {
      name: "balance",
      label: "Balance",
      numeric: true,
      format: DECIMAL_FORMAT,
    },
  ]

  /*   dateColumns: ITdDataTableColumn[] = [
    { name: "date", label: "Date", sortable: true, width: 275 },
    { name: "first_name", label: "First Name", sortable: false, width: 150 },
    { name: "last_name", label: "Last Name", filter: true, sortable: false },
  ]
 */

  bottomSheetRef: MatBottomSheetRef

  constructor(
    private dataTableService: TdDataTableService,
    private dialogService: TdDialogService,
    private service: JobSearchService,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this.jobListing = await this.service.getJobListing("").toPromise() // testData //
    this.filter()

    /* this.basic
    Data = this.data.slice(0, 10)
    this.filter()

    this.dateSortData = this.data.slice(0, 5)
    this.dateSortData = this.dateSortData.map((row: any) => {
      let randomDate: Date = new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime())
      )
      row.date = randomDate
      return row
    })
    this.filterDateData() */
  }

  async filter(): Promise<void> {
    console.log("filter data", this.jobListing.data)
    let newData: VacancyDto[] = this.jobListing.data
    let excludedColumns: string[] = await this.columns
      .filter((column: ITdDataTableColumn) => {
        return (
          (column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false)
        )
      })
      .map((column: ITdDataTableColumn) => {
        return column.name
      })

    console.log("filter newData", newData)
    newData = await this.dataTableService.filterData(
      newData,
      this.searchTerm,
      true,
      excludedColumns
    )
    this.filteredTotal = newData.length

    newData = await this.dataTableService.pageData(
      newData,
      this.fromRow,
      this.currentPage * this.pageSize
    )
    this.filteredData = newData
  }

  sortDates(sortEvent: ITdDataTableSortChangeEvent): void {
    //this.dateSortOrder = sortEvent.order
    //this.shortByJobPostedDate(sortEvent.order)
  }

  shortByJobPostedDate(sortEvent: ITdDataTableSortChangeEvent): void {
    let dir: string = sortEvent.order
    this.jobListing.data = Array.from(this.jobListing.data) // Change the array reference to trigger OnPush
    this.jobListing.data = this.jobListing.data.sort((a: any, b: any) => {
      let direction: number = 0
      if (dir === TdDataTableSortingOrder.Descending) {
        direction = 1
      } else if (dir === TdDataTableSortingOrder.Ascending) {
        direction = -1
      }
      if (a.createAt < b.createAt) {
        return direction
      } else if (a.createAt > b.createAt) {
        return -direction
      } else {
        return direction
      }
    })
  }

  displayColumnValue(row, column) {
    console.log("column:", column)
    console.log("value:", row[column.name])
    let columnValue = row[column.name]
    if (column.name == "jobPosition") {
      columnValue = columnValue.name
    }
    columnValue = column.format ? column.format(columnValue) : columnValue
    return columnValue
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm
    this.pagingBar.navigateToPage(1)
    this.filter()
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow
    this.currentPage = pagingEvent.page
    this.pageSize = pagingEvent.pageSize
    this.filter()
  }

  openPrompt(row: any, name: string): void {
    this.dialogService
      .openPrompt({
        message: "Enter comment?",
        value: row[name],
      })
      .afterClosed()
      .subscribe((value: any) => {
        if (value !== undefined) {
          row[name] = value
        }
      })
  }

  showAlert(event: any): void {
    let data: VacancyDto = event.row
    console.log("selectedRows:", this.selectedRows)
    console.log("event.row:", event.row)
    this.dialogService.open(JobDetailComponent, {
      data,
      width: "400px",
    })
  }

  openJobDetailsWindow(event: any): void {
    let data: VacancyDto = event.row

    console.log(
      " openning dialog for displaying job detail...selected Vacancy :",
      data
    )

    const dialogConfig = new MatDialogConfig()
    //dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = data
    dialogConfig.width = "90%"
    //dialogConfig.height = "90%"

    //dialogConfig.position = { bottom: "100px", top: "100px" }

    const dialogRef = this.dialog.open(JobDetailComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(data => {
      //console.log("Dialog output:", data)
      this.onJobDetailsWindowClose(data)
      dialogRef.close()
    })
  }

  onJobDetailsWindowClose(data: any) {
    if (data && data.vacancyDto) {
      console.log("Dialog closed - data :", data.vacancyDto)
    }
  }

  openJobDetailsBottomSheet(event: any): void {
    this.bottomSheetRef && this.bottomSheetRef.dismiss()
    const config: MatBottomSheetConfig = {
      data: event.row as VacancyDto,
      hasBackdrop: false,
      disableClose: false,
      panelClass: "bottom-sheet-container",
      direction: "ltr",
    }

    this.bottomSheetRef = this.bottomSheet.open(JobDetailComponent, config)
    console.log("bottomSheetRef", this.bottomSheetRef)
  }
}

/* import { Component, OnInit, HostBinding, ViewChild } from "@angular/core"

//import { slideInDownAnimation } from "@covalent/core/common"

import {
  TdDataTableSortingOrder,
  TdDataTableService,
  TdDataTableComponent,
  ITdDataTableSortChangeEvent,
  ITdDataTableColumn,
  //TdPagingBarComponent,
} from "@covalent/core"
import { IPageChangeEvent, TdPagingBarComponent } from "@covalent/core/paging"
import { TdDialogService } from "@covalent/core"
import { slideInDownAnimation } from "./animation.util"
import { testData } from "./test-data"

// import { InternalDocsService } from "../../../services"

const NUMBER_FORMAT: (v: any) => any = (v: number) => v
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2)

@Component({
  selector: "app-job-search",
  templateUrl: "./job-search.component.html",
  styleUrls: ["./job-search.component.scss"],
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class JobSearchComponent implements OnInit {
  @HostBinding("@routeAnimation") routeAnimation: boolean = true
  @HostBinding("class.td-route-animation") classAnimation: boolean = true

  @ViewChild(TdPagingBarComponent) pagingBar: TdPagingBarComponent

  cellAttrs: Object[] = [
    {
      description: `Makes cell follow the numeric data-table specs. Defaults to 'false'`,
      name: "numeric",
      type: `boolean`,
    },
  ]

  columnAttrs: Object[] = [
    {
      description: `Sets unique column [name] for [sortable] events.`,
      name: "name",
      type: `string`,
    },
    {
      description: `Enables sorting events, sort icons and active column states. Defaults to 'false'`,
      name: "sortable",
      type: `boolean`,
    },
    {
      description: `Sets the sort order of column. Defaults to 'ASC' or TdDataTableSortingOrder.Ascending`,
      name: "sortOrder",
      type: `['ASC' | 'DESC'] or TdDataTableSortingOrder`,
    },
    {
      description: `Whether the column should be hidden or not. Defaults to 'false'`,
      name: "hidden",
      type: `boolean`,
    },
    {
      description: `When set to false this column will be excluded from searches using the filterData method.`,
      name: "filter?",
      type: "boolean",
    },
    {
      description: `Sets column to active state when 'true'. Defaults to 'false'`,
      name: "active",
      type: `boolean`,
    },
    {
      description: `Makes cell follow the numeric data-table specs. Defaults to 'false'`,
      name: "numeric",
      type: `boolean`,
    },
    {
      description: `Event emitted when the column headers are clicked. [sortable] needs to be enabled.
                  Emits an [ITdDataTableSortChangeEvent] implemented object.`,
      name: "sortChange",
      type: `function`,
    },
  ]

  serviceAttrs: Object[] = [
    {
      description: `Searches [data] parameter for [searchTerm] matches and returns a new array with them.
                  Any column names passed in with [nonSearchAbleColumns] will be excluded in the search.`,
      name: "filterData",
      type: `function(data: any[], searchTerm: string, ignoreCase: boolean, nonSearchAbleColumns: string[])`,
    },
    {
      description: `Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.`,
      name: "sortData",
      type: `function(data: any[], sortBy: string, sortOrder: TdDataTableSortingOrder): any[]`,
    },
    {
      description: `Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].`,
      name: "pageData",
      type: `function(data: any[], fromRow: number, toRow: number): any[]`,
    },
  ]

  configWidthColumns: ITdDataTableColumn[] = [
    { name: "first_name", label: "First name", width: 150 },
    { name: "last_name", label: "Last name", width: { min: 150, max: 250 } },
    { name: "gender", label: "Gender" },
    { name: "email", label: "Email", width: 250 },
    { name: "img", label: "", width: 100 },
  ]

  columns: ITdDataTableColumn[] = [
    { name: "first_name", label: "First Name", sortable: true, width: 150 },
    { name: "last_name", label: "Last Name", filter: true, sortable: false },
    { name: "gender", label: "Gender", hidden: false },
    { name: "email", label: "Email", sortable: true, width: 250 },
    {
      name: "balance",
      label: "Balance",
      numeric: true,
      format: DECIMAL_FORMAT,
    },
  ]

  dateColumns: ITdDataTableColumn[] = [
    { name: "date", label: "Date", sortable: true, width: 275 },
    { name: "first_name", label: "First Name", sortable: false, width: 150 },
    { name: "last_name", label: "Last Name", filter: true, sortable: false },
  ]

  data: any[]
  basicData: any[]
  dateSortData: any[]
  selectable: boolean = false
  clickable: boolean = false
  multiple: boolean = true
  resizableColumns: boolean = false
  filterColumn: boolean = true

  filteredData: any[]
  filteredTotal: number
  selectedRows: any[] = []

  searchTerm: string = ""
  fromRow: number = 1
  currentPage: number = 1
  pageSize: number = 50
  sortBy: string = "first_name"
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending
  dateSortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending

  constructor(
    private _dataTableService: TdDataTableService,
    //private _internalDocsService: InternalDocsService,
    private _dialogService: TdDialogService
  ) {}

  openPrompt(row: any, name: string): void {
    this._dialogService
      .openPrompt({
        message: "Enter comment?",
        value: row[name],
      })
      .afterClosed()
      .subscribe((value: any) => {
        if (value !== undefined) {
          row[name] = value
        }
      })
  }

  async ngOnInit(): Promise<void> {
    this.data = testData // await this._internalDocsService.queryData().toPromise()
    this.basicData = this.data.slice(0, 10)
    this.filter()

    this.dateSortData = this.data.slice(0, 5)
    this.dateSortData = this.dateSortData.map((row: any) => {
      let randomDate: Date = new Date(
        new Date(2012, 0, 1).getTime() +
          Math.random() *
            (new Date().getTime() - new Date(2012, 0, 1).getTime())
      )
      row.date = randomDate
      return row
    })
    this.filterDateData()
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name
    this.sortOrder = sortEvent.order
    this.filter()
  }

  sortDates(sortEvent: ITdDataTableSortChangeEvent): void {
    this.dateSortOrder = sortEvent.order
    this.filterDateData()
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm
    this.pagingBar.navigateToPage(1)
    this.filter()
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow
    this.currentPage = pagingEvent.page
    this.pageSize = pagingEvent.pageSize
    this.filter()
  }

  async filter(): Promise<void> {
    console.log("filter data", this.data)
    let newData: any[] = this.data
    let excludedColumns: string[] = await this.columns
      .filter((column: ITdDataTableColumn) => {
        return (
          (column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false)
        )
      })
      .map((column: ITdDataTableColumn) => {
        return column.name
      })

    console.log("filter newData", newData)
    newData = await this._dataTableService.filterData(
      newData,
      this.searchTerm,
      true,
      excludedColumns
    )
    this.filteredTotal = newData.length
    newData = await this._dataTableService.sortData(
      newData,
      this.sortBy,
      this.sortOrder
    )
    newData = await this._dataTableService.pageData(
      newData,
      this.fromRow,
      this.currentPage * this.pageSize
    )
    this.filteredData = newData
  }

  filterDateData(): void {
    this.dateSortData = Array.from(this.dateSortData) // Change the array reference to trigger OnPush
    this.dateSortData = this.dateSortData.sort((a: any, b: any) => {
      let direction: number = 0
      if (this.dateSortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1
      } else if (this.dateSortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1
      }
      if (a.date < b.date) {
        return direction
      } else if (a.date > b.date) {
        return -direction
      } else {
        return direction
      }
    })
  }

  toggleTooltips(): void {
    if (this.columns[0].tooltip) {
      this.columns.forEach((c: any) => delete c.tooltip)
    } else {
      this.columns.forEach((c: any) => (c.tooltip = `This is ${c.label}!`))
    }
  }

  showAlert(event: any): void {
    this._dialogService.openAlert({
      message:
        "You clicked on row: " +
        event.row.first_name +
        " " +
        event.row.last_name,
    })
  }
}
 */

/* import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core"

import { finalize } from "rxjs/operators"

import { InfiniteService } from "./infinite.service"
import { tdCollapseAnimation } from "@covalent/core/common"
import { TdLoadingService } from "@covalent/core"
import { slideInDownAnimation } from "./animation.util"

@Component({
  selector: "app-job-search",
  templateUrl: "./job-search.component.html",
  styleUrls: ["./job-search.component.scss"],
  animations: [slideInDownAnimation, tdCollapseAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  providers: [InfiniteService],
})
export class JobSearchComponent implements OnInit {
  @HostBinding("@routeAnimation") routeAnimation: boolean = true
  @HostBinding("class.td-route-animation") classAnimation: boolean = true

  toggleDemoCode: boolean = false
  data: any[] = []

  infiniteData: any[] = []
  page: number = 0
  perPage: number = 10

  constructor(
    private _infiniteService: InfiniteService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _loadingService: TdLoadingService
  ) {}

  ngOnInit(): void {
    for (let index: number = 1; index <= 1200; index++) {
      this.data.push({ index: index, name: "element-" + index })
    }

    this.fetch()
  }

  fetchMore(): void {
    console.log("fetching more ...")
    this.page++
    this.fetch()
  }

  private fetch(): void {
    this._loadingService.register("loading")
    this._infiniteService
      .get({ page: this.page, perPage: this.perPage })
      .pipe(finalize(() => this._loadingService.resolve("loading")))
      .subscribe((results: any[]) => {
        this.infiniteData = this.infiniteData.concat(results)
      })
  }
} */
