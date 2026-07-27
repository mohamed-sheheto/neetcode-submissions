class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums:number[], target:number):number[] {
    if (!nums.length) return [];

    for (let i:number = 0; i < nums.length - 1; i++) {
      let num:number = target - nums[i];
      if (nums.includes(num) && nums.lastIndexOf(num) !== i)
        return [i, nums.lastIndexOf(num)];
    }
  }
}