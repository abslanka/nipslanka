import { Company } from "./company.model"
import { Contact } from "./contact.model"
import { JobPosition } from "./job-position.model"
import { JobRemuneration } from "./job-remuneration "

export class JobOrder {
  constructor(
    public company: Company,
    public providerType: string,
    public noOfOpenings: number,
    public jobPosition: JobPosition,
    public remuneration: JobRemuneration,
    public closingDate: Date
  ) //public workHours?: number,
  //public workDays?: number
  {}
}
