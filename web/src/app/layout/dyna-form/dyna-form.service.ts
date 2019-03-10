import { Injectable } from "@angular/core"
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  ITdDynamicElementValidator,
  TdDynamicType,
} from "@covalent/dynamic-forms"

import {
  DynaFormElementTypes,
  DynaFormElementInstances,
} from "./dyna-form-elements"

@Injectable({
  providedIn: "root",
})
export class DynaFormService {
  formFields: ITdDynamicElementConfig[] = []

  getFormFields(): ITdDynamicElementConfig[] {
    return this.formFields
  }

  /*
interface ITdDynamicElementConfig {
  label?: string;
  name: string;
  hint?: string;
  type: TdDynamicType | TdDynamicElement | Type<any>;
  required?: boolean;
  disabled?: boolean;
  min?: any;
  max?: any;
  minLength?: any;
  maxLength?: any;
  selections?: any[] | { value: any, label: string }[];
  multiple?: boolean;
  default?: any;
  flex?: number;
  validators?: ITdDynamicElementValidator[];
}
  */
  /* 
  static DynaFormElementInstances = {
    Text: TdDynamicElement.Input,
    Textarea: TdDynamicElement.Textarea,
    Checkbox: TdDynamicElement.Checkbox,
    Radio: TdDynamicElement.SlideToggle,
    Select: TdDynamicElement.Select,
    File: TdDynamicElement.FileInput,
    FileCustom: DynaCustomFileComponent,
    DateType: TdDynamicElement.Datepicker,
    Password: TdDynamicElement.Password,
    NumberRange: TdDynamicType.Number,
  } */

  /*
  getFieldType(fieldType: string): string {
    let fType: any

    switch (fieldType) {
      case "text":
        fType = TdDynamicElement.Input
        break

      case "textarea":
        fType = TdDynamicElement.Textarea
        break

      case "checkbox":
        fType = TdDynamicElement.Checkbox
        break

      case "select":
        fType = TdDynamicElement.Select
        break

      case "file-custom":
        fType = DynaCustomFileComponent
        break

      case "file":
        fType = TdDynamicElement.FileInput
        break

      case "date":
        fType = TdDynamicElement.Datepicker
        break

      case "password":
        fType = TdDynamicElement.Password
        break

      case "radio":
        fType = TdDynamicElement.SlideToggle
        break

      case "number":
        fType = TdDynamicType.Number
        break

      default:
        fType = TdDynamicElement.Input
        break
    }

    return fType
  }

  addText(
    name: string,
    label?: string,
    hint?: string,
    isRequired?: boolean,
    disabled?: boolean,
    minLength?: any,
    maxLength?: any,
    defaultValue?: any,
    flex?: number
  ) {}

  addTexArea(
    name: string,
    label?: string,
    hint?: string,
    isRequired?: boolean,
    disabled?: boolean,
    minLength?: any,
    maxLength?: any,
    defaultValue?: any,
    flex?: number
  ) {}

  addSelect(
    name: string,
    label?: string,
    hint?: string,
    isRequired?: boolean,
    disabled?: boolean,
    selections?: any[] | { value: any; label: string }[],
    multiple?: boolean,
    defaultValue?: any,
    flex?: number
  ) {}

  addFile(name: string, label?: string, flex?: number) {}

  addNumber(
    name: string,
    label?: string,
    hint?: string,
    isRequired?: boolean,
    min?: any,
    max?: any,
    defaultValue?: any,
    flex?: number
  ) {}

  addRadio(
    name: string,
    label?: string,
    hint?: string,
    isRequired?: boolean,
    defaultValue?: any,
    flex?: number
  ) {}

  */

  addFieldObj(fieldObj: ITdDynamicElementConfig) {
    this.formFields.push(fieldObj)
    return this
  }

  resetFormFields() {
    this.formFields = []
  }

  addField(
    name: string,
    fieldType: DynaFormElementTypes,
    label?: string,
    hint?: string,
    isRequired?: boolean,
    disabled?: boolean,
    min?: any,
    max?: any,
    minLength?: any,
    maxLength?: any,
    selections?: any[] | { value: any; label: string }[],
    multiple?: boolean,
    defaultValue?: any,
    flex?: number,
    validators?: ITdDynamicElementValidator[]
  ) {
    let fTypeInstance: any = DynaFormElementInstances[fieldType]

    this.formFields.push({
      label,
      name,
      hint,
      type: fTypeInstance,
      required: isRequired,
      disabled,
      min,
      max,
      minLength,
      maxLength,
      selections,
      multiple,
      default: defaultValue,
      flex: !!flex ? flex : 50,
    })
  }

  constructor() {}
}
