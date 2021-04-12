function getfullname(fname,lname){
    return `${fname} ${lname}`
}

function isPalindrome(name){
    
        // find the length of a string
        const len = name.length;
        // loop through half of the string
        for (let i = 0; i < len / 2; i++) {
            // check if first and last string are same
            if (name[i] !== name[len - 1 - i]) {
                return false;
            }
        }
        return true;
}
function getCircumfrence(rad){
    return 2*Math.PI*rad;
}
function getArea(rad){
    return Math.PI*rad*rad;
}
module.exports={
    getfullname,
    isPalindrome,
    getCircumfrence,
    getArea,
}