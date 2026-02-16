import { twoSum } from '../../src/easy/two-sum';

describe('Two Sum', () => {
    test('Example 1: [2,7,11,15], target 9', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
        expect(result).toEqual([0, 1]);
    });

    test('Example 2: [3,2,4], target 6', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
        expect(result).toEqual([1, 2]);
    });

    test('Example 3: [3,3], target 6', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);
        
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
        expect(result).toEqual([0, 1]);
    });

    test('Negative numbers: [-1,-2,-3,-4,-5], target -8', () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const result = twoSum(nums, target);
        
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
        expect(result).toEqual([2, 4]);
    });

    test('Mixed positive and negative: [-3,4,3,90], target 0', () => {
        const nums = [-3, 4, 3, 90];
        const target = 0;
        const result = twoSum(nums, target);
        
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
        expect(result).toEqual([0, 2]);
    });

    test('Large numbers', () => {
        const nums = [0, 4, 3, 0];
        const target = 0;
        const result = twoSum(nums, target);
        
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
        expect(result).toEqual([0, 3]);
    });
});
