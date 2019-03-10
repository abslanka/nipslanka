import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../layout/dyna-form/dyna-form-elements"

export const VacancyFormFields = () => {
  let formFields: ITdDynamicElementConfig[] = []

  let position = DynaFormElementTypesObject(
    "position",
    "Job Position",
    undefined,
    DynaFormElementTypes.Text,
    true
  )
  formFields.push(position)

  let description = DynaFormElementTypesObject(
    "description",
    "Job Description",
    undefined,
    DynaFormElementTypes.Textarea
  )
  formFields.push(description)

  let jobType = DynaFormElementTypesObject("type", "Job Type", undefined) // full/part time
  formFields.push(jobType)

  let location = DynaFormElementTypesObject(
    "location",
    "Job Location",
    undefined
  )
  formFields.push(location)

  return formFields
}
