//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

    let cops = 0, cona = 0, cozero = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] > 0) {
            cops++;
        } else if (arr[i] < 0) {
            cona++;
        } else {
            cozero++;
        }
        i++;
    }

    const total = arr.length;
    console.log((cops / total).toFixed(6));
    console.log((cona / total).toFixed(6));
    console.log((cozero / total).toFixed(6));