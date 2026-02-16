/**
 * Problem: 1. Two Sum (Easy)
 * 
 * Given an array of integers nums and an integer target, return indices of the 
 * two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may 
 * not use the same element twice.
 * 
 * Approach: Hash Map (Single Pass)
 * - Iterate through the array once
 * - For each number, check if (target - current number) exists in hash map
 * - If found, return the indices
 * - Otherwise, store current number and index in hash map
 * 
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(n) - Hash map to store numbers
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 */

export function twoSum(nums: number[], target: number): number[] {
    // Map to store number -> index
    const numMap = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if complement exists in map
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        
        // Store current number and its index
        numMap.set(nums[i], i);
    }
    
    // No solution found (shouldn't happen based on problem constraints)
    return [];
}
