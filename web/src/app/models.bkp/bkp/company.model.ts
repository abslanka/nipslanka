import { Address } from "./address.model"
import { Contact } from "./contact.model"

export class Company {
  constructor(
    public name: string,
    public industry?: string,
    public contact?: Contact
  ) {}
}
