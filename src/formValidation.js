export function checkEmail(data) {
    let err = null;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const trimmedData = data.trim();

    if (trimmedData.length === 0) {
        err = "This field cannot be empty";
    } else if (!pattern.test(trimmedData)) {
        err = "Invalid email format";
    } else {
        err = null;
    }

    return err;
};

export function checkName(data) {
    let err = null;
    const pattern = /[^A-Za-z\s]/g;
    const trimmedData = data.trim();

    if (trimmedData.length === 0) {
        err = "This field cannot be empty";
    } else if (pattern.test(trimmedData)) {
        err = "Name cannot contain special characters or numbers";
    } else err = null;

    return err;
}


export function checkPassword(data) {
    let err = null;
    const trimmedData = data.trim();
    if (trimmedData.length === 0) {
        err = "This field cannot be empty";
    } else if (!/[A-Z]/.test(trimmedData)) {
        err = "Atleast One Capital Letter";
    } else if (!/[a-z]/.test(trimmedData)) {
        err = "Atleast One Small Letter";
    } else if (!/\d/.test(trimmedData)) {
        err = "Atleast One Digit";
    } else if (!/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(trimmedData)) {
        err = "Atleast One Special Character";
    } else if (trimmedData.length < 6 || trimmedData.length > 20) {
        err = "Length should be 6 - 20 characters";
    } else err = null;

    return err;
}

export function checkConfirmPswd(data1, data2) {
    let err = null;
    const trimmedData = data1.trim();

    if (trimmedData.length === 0) {
        err = "This field cannot be empty";
    } else if (trimmedData !== data2) {
        err = "Passwords must be same";
    } else err = null;

    return err;
}
export function isEmpty (data) {
    let err = null;
    const trimmedData = data.trim();

    if (trimmedData.length === 0) {
        err = "This field cannot be empty";
    } else err = null;

    return err;
};

