import { AbstractControl } from "@angular/forms";

export function statusValidator(control: AbstractControl): { [key: string]: any } | null {
    const stat = control.value;
    if (stat != "started" && stat != "Started") {
        return { 'forbiddenStatus': true };
    }
    return null;
}