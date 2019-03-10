import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../layout/dyna-form/dyna-form-elements"

export const ContactFormFields = () => {
  let formFields: ITdDynamicElementConfig[] = []

  let name = DynaFormElementTypesObject(
    "name",
    "Contact Name",
    45,
    DynaFormElementTypes.Text,
    true
  )
  let email = DynaFormElementTypesObject(
    "email",
    "Email",
    45,
    DynaFormElementTypes.TextCustom,
    true
  )
  let phone = DynaFormElementTypesObject(
    "phone",
    "Phone",
    45,
    DynaFormElementTypes.TextCustom
  )
  let address = DynaFormElementTypesObject(
    "address",
    "Contact Address",
    45,
    DynaFormElementTypes.Textarea
  )

  /*  let button = DynaFormElementTypesObject(
    "buttonContinue",
    "Continue",
    40,
    DynaFormElementTypes.Button
  )

  let spacer = DynaFormElementTypesObject(
    "spacer",
    "Spacer",
    undefined,
    DynaFormElementTypes.Spacer
  ) */

  formFields.push(name)
  formFields.push(email)

  formFields.push(address)
  //formFields.push(spacer)
  formFields.push(phone)
  // formFields.push(button)

  return formFields
}
