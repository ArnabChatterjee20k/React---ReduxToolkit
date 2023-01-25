# Terminologies

- slice -> slice where we divide our state.
    - For example, in a blog post, comment,etc are all slices.
    
    - All these are stored inside a global store

# Why we can mutate state directly? In react we cant mutate state directly but here how?

ReduxToolkit uses immer.js. When we are mutating the state actually immer.js under the hood creating a new state for us. **This happens only inside createSlice**