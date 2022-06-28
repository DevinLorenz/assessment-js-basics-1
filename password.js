//In all honesty I completely forgot about this part of the assessment until DJ mentioned it first thing monday morning... I'm not expecting to get any points for this but I did want to attempt while we reviewed this on Tuesday morning.

let password = 'D04L1nc0ln'

let passwordSplit = password.split('')

// console.log(passwordSplit)

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let nums = [0,1,2,3,4,5,6,7,8,9]

if(password.length >= 10) {
    for(let i = 0 ; i < passwordSplit.length ; i++) {
        if(alphabet.includes(passwordSplit[i])){
            for(let j = i + 1 ; j < passwordSplit.length ; j++) {
                if(nums.includes(+passwordSplit[j])){
                    return console.log(`password meets requirements`)
                }
            }
        }   return console.log(`password does not meet requirements`)
    }
} else {
    console.log(`did not meet length requirements, try again with 10 characters`)
}
