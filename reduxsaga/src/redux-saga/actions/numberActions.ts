import { FETCH_NUMBER, FETCHED_NUMBER } from './types';

export function fetchNumber() {
  return {
    type: FETCH_NUMBER,
  }
}

export function fetchedNumber() {
  return {
    type: FETCHED_NUMBER,
  }
}