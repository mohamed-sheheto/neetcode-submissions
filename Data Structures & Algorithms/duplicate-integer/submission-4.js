class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
  hasDuplicate(nums) {
    nums.sort();
    let temp;

    for (let i = 0; i < nums.length; i++) {
      temp = nums[i];
      if (temp === nums[i + 1]) {
        return true;
      }
    }
    return false;
  }
}
