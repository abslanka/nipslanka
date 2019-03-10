import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../layout/dyna-form/dyna-form-elements"

export const JobOrderFormFields = () => {
  let formFields: ITdDynamicElementConfig[] = []

  // 1. Select Company
  // 1.

  let noOfOpenings = DynaFormElementTypesObject(
    "noOfOpenings",
    "# No. Of Openings",
    undefined,
    DynaFormElementTypes.NumberRange,
    true
  )
  formFields.push(noOfOpenings)

  let closingDate = DynaFormElementTypesObject(
    "closingDate",
    "Closing Date",
    undefined,
    DynaFormElementTypes.DateType
  )
  formFields.push(closingDate)

  /*  //remuneration: JobRemuneration,
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
  formFields.push(benefits) */

  return formFields
}
