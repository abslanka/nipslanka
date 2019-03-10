import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../layout/dyna-form/dyna-form-elements"

export const JobOrderVacancyFormFields = () => {
  let formFields: ITdDynamicElementConfig[] = []

  let noOfOpenings = DynaFormElementTypesObject(
    "noOfOpenings",
    "# No. Of Openings",
    undefined,
    DynaFormElementTypes.NumberRange,
    true
  )
  formFields.push(noOfOpenings)

  //remuneration: JobRemuneration,
  let salary = DynaFormElementTypesObject(
    "salary",
    "Salary",
    undefined,
    DynaFormElementTypes.Text,
    true
  )
  formFields.push(salary)

  let benefits = DynaFormElementTypesObject(
    "benefits",
    "Other Benefits",
    undefined,
    DynaFormElementTypes.Textarea
  )
  formFields.push(benefits)

  return formFields
}
