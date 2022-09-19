/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */
function simpleArraySum(ar) {
    // Write your code here
     return ar.reduce((prev,curr) =>  prev + curr)
}

function main() {

    const ar = [1,2,3,4,5,9,8]

    const result = simpleArraySum(ar);

    console.log(result);
}

main();