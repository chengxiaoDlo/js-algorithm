//------------------------------------------------返回n个【2，32】的随机整数-----------------------------------------------
function random1 (n) {
    var arr = [], random;
    while (arr.length < n) {
        random = Math.round(Math.random() * 30 + 2);
        if (arr.indexOf(random) === -1) {
            arr.push(random);
        }
    }
    return arr.sort(function (a, b) {
        return a - b
    });
}
function random2 (n) {
    var arr = [];
    while (arr.length < n) {
        for (var i = 0; i < n - arr.length; i++) {
            arr.push(Math.round(Math.random() * 30 + 2));
        }
        arr = Array.from(new Set(arr))
    }
    return arr.sort(function (a, b) {
        return a - b;
    })
}
//----------------------------------------------------------整数数组去重--------------------------------------------------
function dup1 (arr) {
    return Array.from(new Set(arr))
}
function dup2 (arr) {
    return arr.sort(function (a, b) {
        return a - b;
    }).filter(function (item, index, Arr) {
        return Arr[index] !== Arr[index + 1]
    })
}
//-------------------------------------------------------获取query参数---------------------------------------------------
function getQueryParams1 () {
    var query = location.search.substr(1);
    var items = query.split('&');
    var args = {};
    items.forEach(function (item) {
        var param = item.split('=');
        var key = decodeURIComponent(param[0]);
        var value = decodeURIComponent(param[1]);
        if (key) {
            args[key] = value;
        }
    })
    return args;
}
function getQueryParams2 () {
    var query = location.search.substr(1);
    var args = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    query.replace(reg, function (rs, $1, $2) {
        var key = decodeURIComponent($1),
        value = decodeURIComponent($2);
        args[key] = value;
        return rs;
    })
    return args
}
//------------------------------------------------将数字转化成金额格式-----------------------------------------------------
function moneyFormat1 (num) {
    var str = num.toString();
    var money = '', count = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        count++
        money = str.charAt(i) + money
        if (count % 3 === 0 && i !== 0) {
            money = ',' + money
        }
    }
    return money
}
function moneyFormat2 (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, function (a) {
        return a + ','
    })
}
//------------------------------------------------找出现最多的字符-------------------------------------------------------
function findMax (str) {
    var charObj = {};
    for (var i = 0; i < str.length; i++) {
        if (!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1
        } else {
            charObj[str.charAt(i)] += 1
        }
    }
    var maxStr = '', maxLength = 1;
    for (var k in charObj) {
        if (charObj.hasOwnProperty(k)) {
            if (charObj[k] > maxLength) {
                maxLength = charObj[k];
                maxStr = k
            }
        }
    }
    return {maxStr, maxLength}
}