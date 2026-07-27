class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort()

    for (let i:number = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        return true;
      }
    }
    return false;
  }
}
