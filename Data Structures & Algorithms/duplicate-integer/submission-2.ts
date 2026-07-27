class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set();

        for(let number of nums) {
            if(numSet.has(number)) return true
            numSet.add(number)
        }
        
        return false
    }
}
