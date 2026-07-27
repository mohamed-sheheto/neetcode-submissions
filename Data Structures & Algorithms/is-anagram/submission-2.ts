class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const word1 = [...s].sort().toString();
        const word2 = [...t].sort().toString();
        if (word1 === word2) {
            return true;
        }
        return false;
    }
}
