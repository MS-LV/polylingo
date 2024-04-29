import { FormControl, ValidationErrors } from '@angular/forms';

export function requiredFileType(type: string): ValidationErrors | null {
  return function (control: FormControl) {
    const file: File = control.value;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if (type.toLowerCase() !== extension.toLowerCase()) {
        return {
          requiredFileType: true,
        };
      }
      return null;
    }

    return null;
  };
}
