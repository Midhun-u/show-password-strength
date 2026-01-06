/**
    @param {string} password - The password which is for checking if the password is strong
    @param {number} minLength - The minimum length of the password should be
    @returns {{level: "weak" | "medium" | "strong", score: number}}
 */

// Function for checking password is strong
const showPasswordStrength = (password = "", minLength = 0) => {

    if(!password || !minLength){
        return {level: "weak", score: 0}
    }

    const hasLower = /[a-z]/.test(password) // For checking if password contains lower characters 
    const hasUpper = /[A-Z]/.test(password) // For checking if password contains upper characters
    const hasNumber = /[0-9]/.test(password) // For checking if password contains numbers
    const hasSpecialCharacters = /[^A-Za-z0-9]/.test(password) // For checking if password contains special characters

    if (password.length < minLength) {
        return { level: "weak", score: 100 / 4 }
    }

    if(
        (password.length >= minLength + minLength) &&
        hasLower &&
        hasNumber &&
        hasUpper &&
        hasSpecialCharacters
    ){
        return {level: "strong", score: 100}
    }

    if(
        password.length >= minLength &&
        hasLower &&
        hasNumber &&
        hasUpper &&
        hasSpecialCharacters
    ){
        return {level: "strong", score: 75}
    }

    if (
        password.length >= minLength &&
        hasLower &&
        hasUpper &&
        hasNumber
    ) {
        return { level: "strong", score: 50 }
    }

    if (
        (password.length >= minLength) &&
        hasLower ||
        hasUpper ||
        hasNumber ||
        hasSpecialCharacters
    ) {

        return { level: "medium", score: Math.round(100 / 3) }

    }
}

export default showPasswordStrength