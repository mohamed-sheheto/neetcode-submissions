class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSort = s.split("").sort((a, b) => a.localeCompare(b)).join("");
        const tSort = t.split("").sort((a, b) => a.localeCompare(b)).join("");

        if (s.length !== t.length) {
            return false;
        }

        return sSort === tSort;
    }
}
