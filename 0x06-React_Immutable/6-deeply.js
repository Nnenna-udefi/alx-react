import { Map } from 'immutable';

// It should return a List containing the values of the two pages
// If two values are the same, they should combine each other
export default function mergeDeeplyElements(page1, page2) {
    return Map(page1).mergeDeep(Map(page2));
}