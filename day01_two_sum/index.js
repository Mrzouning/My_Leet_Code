/**
 * num.01
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，
 * 并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

const twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(target - nums[i]);
    if (index > -1 && index !== i) {
      result.push([index, i]);
    }
  }
  return result;
};

console.log(twoSum([1, 5, 7, 9], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 3, 5, 7, 9], 8));
console.log(twoSum([2, 7, 11, 15], 9));

console.log('----------------------');
const twoSum1 = function (nums, target) {
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (result.has(another)) {
      return [result.get(another), i];
    } else {
      result.set(another, i);
    }
  }
};
console.log(twoSum([1, 5, 7, 9], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 3, 5, 7, 9], 8));
console.log(twoSum([2, 7, 11, 15], 9));
