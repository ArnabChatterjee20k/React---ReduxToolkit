# Terminologies

- slice -> slice where we divide our state.
  - For example, in a blog post, comment,etc are all slices.

  - All these are stored inside a global store

# Why we can mutate state directly? In react we cant mutate state directly but here how?

ReduxToolkit uses immer.js. When we are mutating the state actually immer.js under the hood creating a new state for us. **This happens only inside createSlice**

# Customising Generated Action Creators or Defining A Structure of a payload automatically

Using **prepare** and **reducer** inside the reducers in the slice will do this for us.

```js
reducers: {
    postAdded: {
        reducer(state, action) {
        state.push(action.payload);
        },
        prepare(title, content) {
        return {
            payload: {
            id: nanoid(),
            title,
            content,
            },
        };
        },
    },
},
```

```js
// just call the dispatch function
postAdded(title, content);
// instead of postAdded({title,content})
```

- The above code is generating the payload for us.
- So when we dispatch our actions we dont have to concerned about the state structure.
