/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */

export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise(val) {
  return val && typeof val.then === 'function'
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}

/**
 * checkPhone
 */
export function isPhone(val) {
  return /^1[34578]\d{9}$/.test(val)

}

/**
 * check int 整数
 */
export function isInt(val) {
  return /^\+?[1-9]\d*$/.test(val)
}

/**
 * check intAnd Decimal 整数且默认两位小数
 * @param number default 2
 */
export function intAndDecimal(val, num = 2) {
  const re = new RegExp("^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1," + num + "})?$");
  return re.test(val)
}


/**
 * check Phone Or Landline
 * 要求只是检查第一位是不是1，有新号码不兼容
 */
export function isPhoneOrLandline(val) {
  return (/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/.test(val) || /^1[3-9]\d{9}$/.test(val))
}

/**
 * check Emply
 */
export function isEmply(val) {
  return !(val === '' || val === null || val === undefined)
}


/**
 * 将时间戳转换成日期
 */
export function changeDate(val) {

  var newDate = new Date();
  newDate.setTime(val * 1000);
// Wed Jun 18 2014
//   console.log(newDate.toDateString());
// Wed, 18 Jun 2014 02:33:24 GMT
//   console.log(newDate.toGMTString());
// 2014-06-18T02:33:24.000Z
//   console.log(newDate.toISOString());
// 2014-06-18T02:33:24.000Z
//   console.log(newDate.toJSON());
// 2014年6月18日
//   console.log(newDate.toLocaleDateString());
// 2014年6月18日 上午10:33:24
//   console.log(newDate.toLocaleString());
// 上午10:33:24
//   console.log(newDate.toLocaleTimeString());
// Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
//   console.log(newDate.toString());
// 10:33:24 GMT+0800 (中国标准时间)
//   console.log(newDate.toTimeString());
// Wed, 18 Jun 2014 02:33:24 GMT
//   console.log(newDate.toUTCString());

  Date.prototype.format = function(format) {
    var date = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1
          ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
      }
    }
    console.log(format)

    return format;
  }
  return newDate.format('yyyy-MM-dd h:m:s');



  // return new Date(parseInt(val) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
  // return new Date(parseInt(val) * 1000).toLocaleString().substr(0,17)
  // return new Date(parseInt(val) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");



}



/**
 * 将日期转换成时间戳
 */

export function toTimestamp(Time) {
  const timestamp = Math.round(Time.getTime() / 1000)
  return timestamp
}

/**
 * The workhorse; 下载excel表格
 * @param {Object} 需要传入的参数，header url data
 * @return 新开一个窗口下载
 */

export function downloadJson(parms) {

  var downParms = '';

  if (parms.url) {
    for (ke in parms.data) {
      downParms += '&' + ke + '=' + parms.data[ke]
    }

    downParms = '?' + downParms.substring(1);  // 去掉第一个&符号 得到拼接好的字符串参数
  }


  // 打开一个页面
  var domnExcls = window.open("", "_blank");

  setTimeout(replace, 500);

  function replace() {
    var conParms = parms.url + downParms;
    domnExcls.location = conParms;
    console.log(conParms)
  }

}

// 支持到ie6

export function getScrollTop() {
  var scrollPos;
  if (window.pageYOffset) {
    scrollPos = window.pageYOffset; }
  else if (document.compatMode && document.compatMode != 'BackCompat')
  { scrollPos = document.documentElement.scrollTop; }
  else if (document.body) { scrollPos = document.body.scrollTop; }
  return scrollPos;
}


/* $ajax+layer 二次封装*/
export function ajax(obj) {
    if (obj.warning) {
      layer.open({
        content: obj.warning
        , btn: ['确定', '取消']
        , yes: function (index, layero) {
          layer.close(index);
          getData()
        }
        , btn2: function (index, layero) {
          //按钮【按钮二】的回调
          //return false 开启该代码可禁止点击该按钮关闭
        }
      });
    }
    else {
      getData()
    }


    function getData() {

      if (obj.loading) {
        var index = layer.load(2, {shift: -1, shade: .3, time: 0})
      }
      $.ajax({
        url: obj.url,
        data: obj.data,
        type: obj.type,
        timeout: obj.timeout,
        error: function (error) {
          layer.msg(error)
        },
        success: function (data) {
          obj.loading && (layer.close(index))
          if (data.code == 200) {
            obj.success && obj.success(data)
          }
          else {
            layer.msg(data.msg)
          }
        }
      })
    }
}




