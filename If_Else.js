let arr = new Array();
for (let i = 0; i < 5; i++) {
    let number = Math.floor(99 + Math.random() * 900);
    arr.push(number);
}
min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if ((min > arr[i])) {
        min = arr[i]
    }
}
max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if ((max < arr[i])) {
        max = arr[i]
    }
}
console.log(arr)
console.log(max)
console.log(min)