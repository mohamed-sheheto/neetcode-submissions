class Solution {
  removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          nums.splice(j, 1);
          i = -1;
          break;
        }
      }
    }
    return nums.length;
  }
}
