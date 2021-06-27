/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 *
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 */

/**
 * @param {string} x
 * @return {string []}
 */
const permutation = function (s) {
  const result = [];
  const path = [];
  const backtracing = function (used) {
    if (s.length === path.length) {
      result.push(path.join(''));
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (i > 0 && s[i] === s[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(s[i]);
        backtracing(used);
        path.pop();
        used[i] = false;
      }
    }
  };
  backtracing([]);
  return result;
};

console.log(permutation('abc'));

console.log('----------------------');
