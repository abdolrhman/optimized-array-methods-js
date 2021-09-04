## Problem
We have a list that gets so many insertions and deletions at a small amount of time
to obtain good preformance for our software we use a fine tuned data sturcture with a combination of algorithms to get the best performance when sorting, inserting, removing, finding items in the list.

<br/>
<hr/>
<br/>

## Solutions

> Find, I am using binary search

```angular2html
it beats middle and end, but not start, its expected
```

> Insert and delete i am using linklist

```angular2html 
it beats middle end also, in benchmark you will not notice it, as in the naive soltion there is no handlation for insert in the middle or end
```

> Sort i am using insertSort, yet it doesnt beat sort method in javscript,
```
as sort method already has similar implementation with insertion and merge sort depend on the engine <br>
i would say its better to use <b>sort</b> built in method
```

## Better solution

> this one i didn't implement, but I would say it would do much better,

- start by creating a function to know if the incoming value is near middle or start or end 'mathmetically' 
- and by the position we can implement specific solution

## Contents
- index.js: where you should add your implementation.
- index.test.js: you should start by adding unit tests to cover the rest of the required methods.
- index.naive.js: that file contains a naive poorly performing implmentation you can look at and optimize.

<br/>
<hr/>
<br/>

## Don't forget, run the tests and the banchmark using:
- `npm run test`
- `npm run benchmark`
