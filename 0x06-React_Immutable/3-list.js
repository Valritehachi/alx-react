import { List } from 'immutable';

// lists function

export function getListObject(array) {
  return List(array);
}
export function addElementToList(list, element) {
  return list.push(element);
}
