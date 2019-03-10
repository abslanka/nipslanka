import { IJobOrder, IBaseEntity, IJobPosition, IStatusType } from "./"

export interface IVacancy extends IBaseEntity {
  noOfOpenings: number
  status?: IStatusType // 0-pending, 1-part-filled, 2-filled ,
  jobsOffered?: number
  jobsAvailable?: number

  //remuneration:
  salary: number
  benefits?: string
  location?: string

  jobOrder?: IJobOrder
  jobPosition?: IJobPosition
}
