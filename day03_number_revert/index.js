/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 输入：x = 123
 * 输出：321
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 输入：x = 120
 * 输出：21
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const border = 2**31;
    const max = border - 1;
    const min = -border;
    let y = parseInt(x.toString().split('').reverse().join(''));
    if(x < 0) y = -y;
    return y > max || y < min ? 0 : y 
};

console.log(reverse(1534236469));
console.log(reverse(-1234));

console.log('----------------------')
