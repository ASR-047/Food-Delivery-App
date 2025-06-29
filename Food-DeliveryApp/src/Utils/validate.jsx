export const validateForm=(email,password)=>{

    const isEmailValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   // const isPhoneNumberValid = /^(\+91|\+91\-|0)?[789]\d{9}$/.test(phn) 

    if(!isEmailValid) return "Invalid Email Id";

    if(!isPasswordValid) return "Password does not match";

    return null;
}

//need to do conditional redering for signup feilds