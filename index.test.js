import { List } from './index.js'
import {LinkedList} from './LinkedList';

describe('List', () => {
  it('should create list', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3, 4];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [4, 3, -1, 1, 2, 5, 0] })
    const expected = [-1, 0, 1, 2, 3, 4, 5];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300] })
    const expected = [-300, -100, 9, 10, 100, 200];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should insert b into list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3];
    const actual = list.remove(4).items

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = 2;
    const actual = list.findIndex(3)

    expect(actual).toEqual(expected)
  })

  // PLEASE cover the rest of the methods/scenarios with tests
})

describe('LinkedList', function() {

    describe('constructor', function() {
        it('should create an empty list', function() {
            const list = new LinkedList();
            expect(list.isEmpty()).toBeTruthy();
            expect(list.toArray().length).toEqual(0);
        });
    });

    describe('.isEmpty', function() {
        it('should return true for an empty list', function() {
            const list = new LinkedList();
            expect(list.isEmpty()).toBeTruthy();
        });

        it('should return false for a non-empty list', function() {
            const list = new LinkedList();
            list.add(1);
            expect(list.isEmpty()).toBeFalsy();
        });
    });

    describe('.isHead', function() {
        it('should return true if the given node is at the head of the list', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3);

            // Find 1
            const node = list.find(function(node) {
                return node.data === 1;
            });
            expect(list.isHead(node)).toBeTruthy();
        });

        it('should return false if the given node is not at the head of the list', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3);

            // Find 2
            const node = list.find(function(node) {
                return node.data === 2;
            });
            expect(list.isHead(node)).toBeFalsy();
        });

    });

    describe('.isTail', function() {
        it('should return true if the given node is at the tail of the list', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3);

            // Find 3
            const node = list.find(function(node) {
                return node.data === 3;
            });
            expect(list.isTail(node)).toBeTruthy();
        });

        it('should return false if the given node is not at the tail of the list', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3);

            // Find 1
            const node = list.find(function(node) {
                return node.data === 1;
            });
            expect(list.isTail(node)).toBeFalsy();
        });

    });

    describe('.add', function() {
        it('should add elements to the list', function() {
            const list = new LinkedList();

            // Test 1 element list
            list.add(1);
            expect(list.toArray()).toEqual([1]);

            // Test 2 element list
            list.add(2);
            expect(list.toArray()).toEqual([1, 2]);

            // Test 3 element list
            list.add(3);
            expect(list.toArray()).toEqual([1, 2, 3]);

            // Test 4 element list
            list.add(4);
            expect(list.toArray()).toEqual([1, 2, 3, 4]);
        });
    });

    describe('.addBefore', function() {
        it('should add an element before the specified element', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(4);
            // Insert 3 before 4
            const node = list.find(function(node) {
                return node.data === 4;
            });
            list.addBefore(node, 3);

            expect(list.toArray()).toEqual([1, 2, 3, 4]);
        });

        it('should allow adding an element before the head of the list', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3);

            // Insert 0 before 1
            const node = list.find(function(node) {
                return node.data === 1;
            });
            list.addBefore(node, 0);

            expect(list.toArray()).toEqual([0, 1, 2, 3]);
        });
    });

    describe('.addAfter', function() {
        it('should add an element after the specified element', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(4);

            // Insert 3 after 2
            const node = list.find(function(node) {
                return node.data === 2;
            });
            list.addAfter(node, 3);

            expect(list.toArray()).toEqual([1, 2, 3, 4]);
        });
    });

    describe('.remove', function() {
        it('should remove the specified element', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            // Remove 3
            const node = list.find(function(node) {
                return node.data === 3;
            });
            list.remove(node);

            expect(list.toArray()).toEqual([1, 2, 4]);
        });

        it('should allow removing the head of the list', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            // Remove 1
            const node = list.find(function(node) {
                return node.data === 1;
            });
            list.remove(node);

            expect(list.toArray()).toEqual([2, 3, 4]);
        });
    });

    describe('.each', function() {
        it('should iterate over each element', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const iteratee = function(node) {
                node.data *= 2;
            };

            expect(list.each(iteratee).toArray()).toEqual([2, 4, 6, 8]);
        });

        it('should allow breaking in the middle of an iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const iteratee = function(node) {
                if (node.data === 3) {
                    return false;
                }
                node.data *= 2;
            };

            expect(list.each(iteratee).toArray()).toEqual([2, 4, 3, 4]);
        });

        it('should allow insertion before head during iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const data = 0;
            const iteratee = function(node, list) {
                if (node.data > data) {
                    list.addBefore(node, data);
                    return false;
                }
                else if (list.isTail(node)) {
                    list.addAfter(node, data);
                    return false;
                }
            };

            expect(list.each(iteratee).toArray()).toEqual([0, 1, 2, 3, 4]);
        });

        it('should allow insertion in the middle during iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(4).add(5);

            const data = 3;
            const iteratee = function(node, list) {
                if (node.data > data) {
                    list.addBefore(node, data);
                    return false;
                }
                else if (list.isTail(node)) {
                    list.addAfter(node, data);
                    return false;
                }
            };

            expect(list.each(iteratee).toArray()).toEqual([1, 2, 3, 4, 5]);
        });

        it('should allow insertion after the tail during iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const data = 5;
            const iteratee = function(node, list) {
                if (node.data > data) {
                    list.addBefore(node, data);
                    return false;
                }
                else if (list.isTail(node)) {
                    list.addAfter(node, data);
                    return false;
                }
            };

            expect(list.each(iteratee).toArray()).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('.eachInReverse', function() {
        it('should iterate over each element', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const iteratee = function(node) {
                node.data *= 2;
            };

            expect(list.eachInReverse(iteratee).toArray()).toEqual([2, 4, 6, 8]);
        });

        it('should allow breaking in the middle of an iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const iteratee = function(node) {
                if (node.data === 2) {
                    return false;
                }
                node.data *= 2;
            };

            expect(list.eachInReverse(iteratee).toArray()).toEqual([1, 2, 6, 8]);
        });

        it('should allow insertion before head during iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const data = 0;
            const iteratee = function(node, list) {
                if (node.data < data) {
                    list.addAfter(node, data);
                    return false;
                }
                else if (list.isHead(node)) {
                    list.addBefore(node, data);
                    return false;
                }
            };

            expect(list.eachInReverse(iteratee).toArray()).toEqual([0, 1, 2, 3, 4]);
        });

        it('should allow insertion in the middle during iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(4).add(5);

            const data = 3;
            const iteratee = function(node, list) {
                if (node.data < data) {
                    list.addAfter(node, data);
                    return false;
                }
                else if (list.isHead(node)) {
                    list.addBefore(node, data);
                    return false;
                }
            };

            expect(list.eachInReverse(iteratee).toArray()).toEqual([1, 2, 3, 4, 5]);
        });

        it('should allow insertion after the tail during iteration', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const data = 5;
            const iteratee = function(node, list) {
                if (node.data < data) {
                    list.addAfter(node, data);
                    return false;
                }
                else if (list.isHead(node)) {
                    list.addBefore(node, data);
                    return false;
                }
            };

            expect(list.eachInReverse(iteratee).toArray()).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('.find', function() {
        it('should return the first element in the list that matches a condition', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            const predicate = function(node) {
                return node.data === 3;
            };

            expect(list.find(predicate).data).toEqual(3);
        });
    });

    describe('.toArray', function() {
        it('should return an array with data for each node', function() {
            const list = new LinkedList();
            list.add(1).add(2).add(3).add(4);

            expect(list.toArray()).toEqual([1, 2, 3, 4]);
        });
    });
});
