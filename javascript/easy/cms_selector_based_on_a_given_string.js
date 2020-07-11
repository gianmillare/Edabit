// CMS Selector Based on a Given String
// https://edabit.com/challenge/9wL6dXj2tKNCe5pFz

function cmsSelector(arr, str) {
    var ans = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            ans.push(arr[i]);
        }
    }

    return ans.sort();
}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));