import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../layout/dyna-form/dyna-form-elements"

export const VacancySkillsFormFields = () => {
  let formFields: ITdDynamicElementConfig[] = []

  let skills = DynaFormElementTypesObject(
    "skills",
    "Skills",
    undefined,
    DynaFormElementTypes.Textarea
  )
  formFields.push(skills)

  let experience = DynaFormElementTypesObject(
    "experience",
    "Experience",
    undefined,
    DynaFormElementTypes.Textarea
  )
  formFields.push(experience)

  let qualifications = DynaFormElementTypesObject(
    "qualifications",
    "Preferred Qualifications",
    undefined,
    DynaFormElementTypes.Textarea
  )
  formFields.push(qualifications)

  let education = DynaFormElementTypesObject(
    "education",
    "Preferred Education",
    undefined,
    DynaFormElementTypes.Textarea
  )

  formFields.push(education)

  return formFields
}
