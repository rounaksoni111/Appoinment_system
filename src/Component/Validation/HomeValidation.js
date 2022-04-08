import { validString, validNumber, validDecimalNumber, validFullLengthDecimalNumber, validEmail, validAlpha } from './Regex';


export default function validate(values) {
    let errors = {};
   
    if(!values.locVal){
      errors.locVal = 'please select franchise';
    }
  
    if(!values.roleVal){
      errors.roleVal = 'please select role';
    }
  
    return errors;
  };