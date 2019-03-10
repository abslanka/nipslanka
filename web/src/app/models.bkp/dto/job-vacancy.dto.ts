import { ICompany, IJobVacancy } from "../interfaces"
import { JobOrderDto } from "."
import { JobOrderVacancyDto } from "./job-order-vacancy.dto"

export class JobVacancyDto implements IJobVacancy {
  position: string
  description: string
  type: string
  location: string
  skills?: string
  experience?: string
  qualifications?: string
  education?: string
  //jobOrders: JobOrderDto[];
  jobOrderVacancies?: JobOrderVacancyDto[]
  company: ICompany
  id: number
}
