import { AbstractControl, FormGroup } from '@angular/forms';
// Simple password Validation
export function passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {


        const regex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }

    }
    return null;
}

// password and cnf password match validation
export function passwordValidator(control: AbstractControl) {


    if (control && (control.value !== null || control.value !== undefined)) {

        const cnfpassValue = control.value;

        const passControl = control.root.get('password');
        if (passControl) {
            const passValue = passControl.value;
            if ((passValue !== cnfpassValue) || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}

