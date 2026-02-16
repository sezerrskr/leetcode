/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let solMax = 0;
    let sol = 0;
    let sag = height.length - 1;
    let sagMax = 0;
    let total = 0;

    while (sol < sag) {

        if (height[sag] > height[sol]) {

            if (height[sol] >= solMax) {

                solMax = height[sol];

            } else {

                total += solMax - height[sol];
            }
            sol++;
        } else {
            if (height[sag] >= sagMax) {
                sagMax = height[sag];
            } else {
                total += sagMax - height[sag];
            }
            sag--;

        }
    }
    return total;
};