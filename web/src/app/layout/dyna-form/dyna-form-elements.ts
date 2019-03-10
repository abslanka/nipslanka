import {
  TdDynamicElement,
  TdDynamicType,
  ITdDynamicElementConfig,
  ITdDynamicElementValidator,
} from "@covalent/dynamic-forms"

import { Type } from "@angular/core"

import { DynaButtonComponent } from "./custom/dynamic-button/dynamic-button.component"
import { DynaTextareaComponent } from "./custom/dynamic-textarea/dynamic-textarea.component"
import { DynaInputComponent } from "./custom/dynamic-input/dynamic-input.component"
import { DynaFileInputComponent } from "./custom/dynamic-file-input/dynamic-file-input.component"
import { DynaSelectComponent } from "./custom/dynamic-select/dynamic-select.component"
import { DynaSpacerComponent } from "./custom/dynamic-spacer/dynamic-button.component"

export enum DynaFormElementTypes {
  Text = "Text",
  TextCustom = "TextCustom",
  Textarea = "Textarea",
  Checkbox = "Checkbox",
  Radio = "Radio",
  Select = "Select",
  File = "File",
  //FileCustom = "FileCustom",
  DateType = "DateType",
  Password = "Password",
  NumberRange = "NumberRange",
  Button = "Button",
  Spacer = "Spacer",
}

export const DynaFormElementInstances = {
  TextCustom: DynaInputComponent,
  Text: TdDynamicElement.Input,
  Textarea: DynaTextareaComponent,
  Checkbox: TdDynamicElement.Checkbox,
  Radio: TdDynamicElement.SlideToggle,
  Select: DynaSelectComponent,
  //Select: TdDynamicElement.Select,
  File: DynaFileInputComponent,
  //File: TdDynamicElement.FileInput,
  //FileCustom: DynaCustomFileComponent,
  DateType: TdDynamicElement.Datepicker,
  Password: TdDynamicElement.Password,
  NumberRange: TdDynamicType.Number,

  Button: DynaButtonComponent,
  Spacer: DynaSpacerComponent,
}

export const DynaFormElementTypesObject = (
  name,
  label,
  flex?,
  type?,
  required?: boolean,
  defaultValue?,
  validators?: any
) => {
  return {
    label,
    name,
    hint: "",
    type: !!type
      ? DynaFormElementInstances[type]
      : DynaFormElementInstances[DynaFormElementTypes.Text],
    required: !!required,
    disabled: false,
    min: undefined,
    max: undefined,
    minLength: undefined,
    maxLength: undefined,
    selections: [],
    multiple: false,
    default: defaultValue,
    flex: !!flex ? flex : 50,
    validators: !!validators ? validators : [],
    fillRight: true,
  }
}
