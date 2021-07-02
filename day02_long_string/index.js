/**
 * num.1239
 * 给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，
 * 如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。请返回所有可行解 s 中最长长度。
 *
 * 输入：arr = ["un","iq","ue"]
 * 输出：4
 * 解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
 *
 * 输入：arr = ["cha","r","act","ers"]
 * 输出：6
 * 解释：可能的解答有 "chaers" 和 "acters"。
 */

/**
 * @param {string[]} arr
 * @return {number}
 * TO DO
 */
const maxLength = function (arr) {
  let len = 0;
  const backtracing = function (i, setIn) {
    let set = new Set(setIn);
    if (i === arr.length) {
      len = Math.max(len, Array.from(set).length);
      return;
    }
    backtracing(i + 1, set);
    for (const s of arr[i]) {
      if (set.has(s)) {
        return;
      }
      set.add(s);
    }
    backtracing(i + 1, set);
  };
  backtracing(0, new Set());
  return len;
};

console.log(maxLength(['un', 'iq', 'ue']));
console.log(maxLength(['cha', 'r', 'actb', 'ers']));
console.log(maxLength('abcdefg'));

console.log('----------------------');
