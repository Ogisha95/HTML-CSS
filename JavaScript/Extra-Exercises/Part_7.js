function addArrayTogether(arr) {
    let string = ""
for (let i = 0; i < arr.length; i++ ) {
    string += arr[i]
        if (i < arr.length - 1) {
    string += " + "
}
    }

return string
}
console.log(addArrayTogether(["Oleg", "Marko", "Bojan", "Angel", "Marko", "Ivan"]))