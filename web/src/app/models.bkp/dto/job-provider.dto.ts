import { IJobProvider } from "../interfaces"
import { CompanyDto } from "."

export class JobProviderDto implements IJobProvider {
  providerType: string
  company?: CompanyDto[]
  email: string
  phone?: string
  address?: string
  name: string
  id: number
}
