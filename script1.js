// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #



for (let i = 1; i <= 4; i++) {
    let hashTag = "";
    for (let j = 1; j <= i; j++) {
    hashTag = hashTag + "#"
    }
    console.log(hashTag);
}
for (let i = 3; i >= 1; i--) {
    let hashTag = "";
    for (let j = 1; j <= i; j++) {
    hashTag = hashTag + "#"
    }
    console.log(hashTag); 
}

