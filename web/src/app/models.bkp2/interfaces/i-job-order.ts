import { IBaseEntity, ICompany, IVacancy, IStatusType } from "."

export interface IJobOrder extends IBaseEntity {
  closingDate: Date
  status?: IStatusType // n-New, h-Halt, c-Cancel, 0-pending, 1-part-filled, 2-filled , r-Reject
  standardEmploymentContract?: string // e.g. provision of housing accommodation, food, Residence permit( optional), overtime/holiday/rest day rate/payment

  company: ICompany
  vacancies?: IVacancy[]
}
