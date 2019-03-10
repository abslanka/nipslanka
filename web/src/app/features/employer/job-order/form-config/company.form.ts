import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../layout/dyna-form/dyna-form-elements"

export const CompanyFormFields = () => {
  let formFields: ITdDynamicElementConfig[] = []

  let name = DynaFormElementTypesObject(
    "name",
    "Company Name",
    45,
    DynaFormElementTypes.Text,
    true
  )

  let industryType = DynaFormElementTypesObject(
    "industryType",
    "Company Industry",
    45,
    DynaFormElementTypes.TextCustom
  )

  let profileDesc = DynaFormElementTypesObject(
    "profileDesc",
    "Profile Description",
    45,
    DynaFormElementTypes.Textarea
  )

  let websiteUrl = DynaFormElementTypesObject(
    "websiteUrl",
    "Website Url",
    45,
    DynaFormElementTypes.TextCustom
  )

  formFields.push(name)
  formFields.push(industryType)
  formFields.push(profileDesc)
  formFields.push(websiteUrl)

  return formFields
}
