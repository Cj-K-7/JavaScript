# **What is Recursion?**

In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function

# **Recursion vs Iteration**

the **difference** between the two

## **Time Complexity**:
Finding the Time complexity of Recursion is more difficult than that of Iteration. 

- **Recursion**:
 Time complexity of recursion can be found by finding the value of the nth recursive call in terms of the previous calls. Thus, finding the destination case in terms of the base case, and solving in terms of the base case gives us an idea of the time complexity of recursive equations. Please see Solving Recurrences for more details. 
 
- **Iteration**: 
Time complexity of iteration can be found by finding the number of cycles being repeated inside the loop. 

## **Usage**: 
Usage of either of these techniques is a trade-off between time complexity and size of code. If time complexity is the point of focus, and number of recursive calls would be large, it is better to use iteration. However, if time complexity is not an issue and shortness of code is, recursion would be the way to go.

- **Recursion**:
 Recursion involves calling the same function again, and hence, has a very small length of code. However, as we saw in the analysis, the time complexity of recursion can get to be exponential when there are a considerable number of recursive calls. Hence, usage of recursion is advantageous in shorter code, but higher time complexity. 
 
- **Iteration**: 
Iteration is repetition of a block of code. This involves a larger size of code, but the time complexity is generally lesser than it is for recursion. 

## **Overhead**:
 Recursion has a large amount of Overhead as compared to Iteration. 

- **Recursion**: Recursion has the overhead of repeated function calls, that is due to repetitive calling of the same function, the time complexity of the code increases manyfold. 
 
- **Iteration**: Iteration does not involve any such overhead. 

## **Infinite Repetition**:
 Infinite Repetition in recursion can lead to CPU crash but in iteration, it will stop when memory is exhausted. 

- **Recursion**: In Recursion, Infinite recursive calls may occur due to some mistake in specifying the base condition, which on never becoming false, keeps calling the function, which may lead to system CPU crash. 
 
- **Iteration**: Infinite iteration due to mistake in iterator assignment or increment, or in the terminating condition, will lead to infinite loops, which may or may not lead to system errors, but will surely stop program execution any further. 

***
**source from
[Geeks for Geeks](https://www.geeksforgeeks.org/difference-between-recursion-and-iteration/)**