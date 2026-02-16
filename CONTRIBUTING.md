# Contributing Guide

Thank you for considering contributing to this LeetCode solutions repository!

## 📝 Adding a New Solution

### 1. Choose the Right Directory
Place your solution in the appropriate difficulty folder:
- `src/easy/` for Easy problems
- `src/medium/` for Medium problems  
- `src/hard/` for Hard problems

### 2. File Naming Convention
- Use kebab-case matching the LeetCode problem title
- Example: `two-sum.ts`, `longest-substring-without-repeating-characters.ts`

### 3. Solution Template

```typescript
/**
 * Problem: [Number]. [Problem Title] ([Difficulty])
 * 
 * [Brief problem description]
 * 
 * Approach: [Algorithm/Data Structure name]
 * - [Step 1]
 * - [Step 2]
 * - [Step 3]
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 * 
 * Example:
 * Input: [example input]
 * Output: [example output]
 * Explanation: [brief explanation]
 */

export function problemName(params): returnType {
    // Implementation
}
```

### 4. Add Tests

Create a corresponding test file in `tests/[difficulty]/`:

```typescript
import { problemName } from '../../src/[difficulty]/problem-name';

describe('Problem Name', () => {
    test('Example 1', () => {
        // Test case
        expect(problemName(input)).toBe(expected);
    });

    test('Edge case: empty input', () => {
        // Edge case test
    });

    test('Edge case: large input', () => {
        // Large input test
    });
});
```

### 5. Run Tests

Before committing, ensure all tests pass:

```bash
npm test
```

## 🎯 Code Quality Standards

### Clean Code
- Write readable, self-documenting code
- Use meaningful variable names
- Add comments only when necessary for complex logic

### Performance
- Always analyze time and space complexity
- Optimize solutions when possible
- Consider trade-offs between time and space

### Test Coverage
- Include at least 3 test cases
- Cover edge cases (empty, null, large inputs)
- Test boundary conditions

## 📚 Documentation

### Update Topics List
If solving a new problem, add it to `docs/topics.md` under the appropriate category.

### Share Insights
If you discover a new pattern or approach, consider adding it to `docs/patterns.md`.

## 🔍 Review Checklist

Before submitting:
- [ ] Solution is in the correct difficulty folder
- [ ] File name follows kebab-case convention
- [ ] Code includes problem description and approach
- [ ] Time and space complexity are documented
- [ ] Comprehensive tests are included
- [ ] All tests pass (`npm test`)
- [ ] Code compiles without errors (`npm run build`)

## 💡 Tips

1. **Start Simple**: Write a brute force solution first, then optimize
2. **Test Edge Cases**: Empty arrays, single elements, duplicates, negatives
3. **Explain Your Thinking**: Document why you chose this approach
4. **Learn Patterns**: Connect solutions to common algorithmic patterns
5. **Iterate**: Come back to problems and try alternative solutions

## 🤝 Collaboration

Feel free to:
- Suggest alternative solutions in comments
- Improve existing solutions for better performance
- Add more comprehensive test cases
- Fix bugs or typos
- Enhance documentation

## 📖 Resources

- [LeetCode](https://leetcode.com/) - Practice platform
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/) - Complexity reference
- [patterns.md](./docs/patterns.md) - Common algorithmic patterns
- [topics.md](./docs/topics.md) - Problems by topic

---

*Happy Coding! 🚀*
