class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort()
        let temp:number;

    for (let i:number = 0; i < nums.length; i++) {
      temp = nums[i];
      if (temp === nums[i + 1]) {
        return true;
      }
    }
    return false;
  }
}
