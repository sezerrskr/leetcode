# Common DSA Patterns

This document outlines common algorithmic patterns frequently encountered in LeetCode problems.

## 🎯 Array Patterns

### Two Pointers
**When to use**: Working with sorted arrays, finding pairs, palindromes
**Time**: O(n) | **Space**: O(1)
```
- Two Sum (sorted array)
- Container With Most Water
- Valid Palindrome
```

### Sliding Window
**When to use**: Contiguous subarrays/substrings, optimization problems
**Time**: O(n) | **Space**: O(k) where k is window size
```
- Maximum Sum Subarray of Size K
- Longest Substring Without Repeating Characters
- Minimum Window Substring
```

### Fast & Slow Pointers
**When to use**: Linked lists, cycle detection
**Time**: O(n) | **Space**: O(1)
```
- Linked List Cycle
- Find Middle of Linked List
- Happy Number
```

## 🌳 Tree Patterns

### DFS (Depth-First Search)
**When to use**: Tree traversal, path problems
**Time**: O(n) | **Space**: O(h) where h is height
```
- Binary Tree Inorder Traversal
- Path Sum
- Maximum Depth of Binary Tree
```

### BFS (Breadth-First Search)
**When to use**: Level-order traversal, shortest path
**Time**: O(n) | **Space**: O(w) where w is max width
```
- Binary Tree Level Order Traversal
- Minimum Depth of Binary Tree
- Zigzag Level Order Traversal
```

## 📊 Dynamic Programming

### 1D DP
**When to use**: Linear sequences, optimization
**Time**: O(n) | **Space**: O(n) or O(1) optimized
```
- Climbing Stairs
- House Robber
- Maximum Subarray
```

### 2D DP
**When to use**: Grid problems, subsequence problems
**Time**: O(n*m) | **Space**: O(n*m)
```
- Unique Paths
- Longest Common Subsequence
- Edit Distance
```

## 🔍 Search Patterns

### Binary Search
**When to use**: Sorted arrays, search space reduction
**Time**: O(log n) | **Space**: O(1)
```
- Binary Search
- Search in Rotated Sorted Array
- Find First and Last Position
```

### Backtracking
**When to use**: Combinations, permutations, subsets
**Time**: O(2^n) or O(n!) | **Space**: O(n)
```
- Permutations
- Subsets
- N-Queens
```

## 🔗 Graph Patterns

### DFS/BFS on Graphs
**When to use**: Connected components, shortest path
**Time**: O(V+E) | **Space**: O(V)
```
- Number of Islands
- Clone Graph
- Course Schedule
```

## 🏃 Greedy

### Greedy Approach
**When to use**: Local optimal choices lead to global optimal
**Time**: Varies | **Space**: O(1) typically
```
- Jump Game
- Gas Station
- Meeting Rooms
```

## 🔢 Math Patterns

### Bit Manipulation
**When to use**: Powers of 2, XOR properties
**Time**: O(1) or O(n) | **Space**: O(1)
```
- Single Number
- Number of 1 Bits
- Reverse Bits
```

## 💡 Tips for Pattern Recognition

1. **Read the problem carefully** - Identify keywords (sorted, contiguous, path, etc.)
2. **Look for constraints** - Size limits often hint at acceptable time complexity
3. **Consider data structures** - Hash tables for O(1) lookup, heaps for min/max operations
4. **Start simple** - Brute force first, then optimize
5. **Draw examples** - Visualize to understand the pattern

---

*Master these patterns to solve 80% of LeetCode problems efficiently*
