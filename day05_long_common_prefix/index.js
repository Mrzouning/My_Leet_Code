/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function(strs) {
  //首先找出数组中，长度最小的字符串
  let minStr = strs.sort((a,b) => a.length-b.length)[0];
  let str = '';
  let prevStr = '';
  for (let i=0; i<minStr.length; i++) {
    str += minStr[i];
    const flag = strs.every(s => s.slice(0,i+1) === str);
    if(!flag) break;
    prevStr = str;
  }
  return prevStr;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));

console.log('----------------------');
