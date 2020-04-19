

const isEmpty = (string) => {
    if (string.trim() === '') return true;
    else return false;
  };

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
exports.validateSignupData = (data)=>{
    //SERVER VALIDATION
    let errors = {}

    if(isEmpty(data.email)){
        console.log("empty")
        errors.email = "Must not be empty"
    }
    else if (!isEmail(data.email)){
        console.log("empty1")
        errors.email = 'Must be a valid email address'
    }
    if (isEmpty(data.password)) errors.password = "Must not be empty"
    if(data.password !== data.confirmPassword) errors.confirmPassword = 'Password must match'
    if (isEmpty(data.handle)) errors.handle = "Must not be empty"

    return {
        errors,
        valid:Object.keys(errors).length  == 0 ? true:false
    }
}


exports.validateSignInData = (data)=>{
    
    let errors = {}
    if (isEmpty(data.email)) errors.email = "must not be empty"
    if (isEmpty(data.password)) errors.password = "must not be empty"
    return {
        errors,
        valid:Object.keys(errors).length  == 0 ? true:false
    }

}