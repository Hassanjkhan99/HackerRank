/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {

    let points = {
        alice: 0,
        bob: 0
    }
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points.alice++
        }
        if (a[i] < b[i]) {
            points.bob++
        }
    }

    return [points.alice, points.bob]
}

function main() {

    let a = [3,2,1];
    let b = [1,2,3]

    const result = compareTriplets(a, b);

    console.log(result);

}

main();