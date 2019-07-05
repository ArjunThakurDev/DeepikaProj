/*import { AbstractControl, AsyncValidatorFn,ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { ChargerService } from "./charger.service";

export function statusValidator(private chargerService : ChargerService) :AsyncValidatorFn
{
   return (control: AbstractControl ) : Observable<ValidationErrors | null > =>
   {
               return this.chargerService.getChargers
   };
}
(control: AbstractControl): { [key: string]: any } | null {
    const stat = control.value;
    if (stat != "started" && stat != "Started") {
        return { 'forbiddenStatus': true };
    }
    return null;
}*/