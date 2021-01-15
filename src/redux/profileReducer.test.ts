import React from 'react';
import { render } from '@testing-library/react';
import profileReducer, { actions } from './profileReducer';



let state = {
  posts: [
    { id: 1, post: 'Hey you there!', likesCount: 4 },
    { id: 2, post: 'Bro.. nice 2 meet u', likesCount: 46 },
    { id: 3, post: ':O:O:O:O', likesCount: 12 }
  ],
  profile: null,
  status: ''
}

test('length of posts should be incremented', () => {
  // 1. add test data
  let action = actions.addNewPostActionCreator('go to crtweb')

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(4)
});

test('message of new post sould be correct', () => {
  // 1. add test data
  let action = actions.addNewPostActionCreator('go to crtweb')

  // 2. actiom
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts[3].post).toBe('go to crtweb')
});

test('after deleting length of posts should be decrement', () => {
  // 1. add test data
  let action = actions.deletePost(1)

  // 2. actiom
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(2)
});

test('after deleting length of posts should not be decrement if id is incorrect', () => {
  // 1. add test data
  let action = actions.deletePost(100)

  // 2. actiom
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(3)
});