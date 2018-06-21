

export const createPost({title, body}) = ({
  type: "ADD_POST",
  payload: {
    id: Math.floor(Math.random()*10000) + "." + Math.floor(Math.random()*1000),
    title,
    body
  }
})

export const deletePost({id}) = ({
  type: "DELETE_POST",
  payload: {
    id
  }
})
