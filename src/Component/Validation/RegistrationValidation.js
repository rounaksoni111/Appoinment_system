import { validString, validNumber, validDecimalNumber, validFullLengthDecimalNumber, validEmail, validAlpha } from './Regex';


export default function validate(values) {
    let errors = {};
   
    if(!values.appointment_date){
      errors.date = 'Date is Required';
    }
}