export const validateFormFields = (email, password) => {
    if(email){
        const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        if(!isEmailValid) return "Email is invalid!";
    }
    if(password){
        const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        if(!isPassValid) return "Password is invalid!";
    }
    return 'OK';
}