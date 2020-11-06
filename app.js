// return first word with the greatost number of repeated lettters
function countLetters(str) {
    let tempArr = str.split(" ");
    tempArr = tempArr.map(item => {
        let tempItem = item.toLowerCase().split("");
        return tempItem.reduce(
            (acc, curr) => {
                acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
                if (acc[curr] > acc.max) {
                    acc.max = acc[curr];
                }
                return acc;
            }, {
                max: 1,
                word: item
            });
    });

    let amount = 1;
    let word = '';
    for (let item of tempArr) {
        if (item.max > amount) {
            amount = item.max;
            word = item.word;
        }
    }

    if (amount > 1) {
        return word;
    }
    return -1;
}


console.log(countLetters("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"));