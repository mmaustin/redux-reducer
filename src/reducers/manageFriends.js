/*let state = {friends: []}

let action = {
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi",
      hometown: "NYC",
      id: 1,
    },
  };

 let action = {
    type: "REMOVE_FRIEND",
    id: 1,
  };

export function manageFriends(state, action){
    switch(action.type){

    }
}

manageFriends(state, {type: "ADD_FRIEND"})
manageFriends(state, {type: "REMOVE_FRIEND"})*/


export function manageFriends(state = {
  friends: [],
}, action) {
  switch(action.type) {

    case "ADD_FRIEND":
      return (
        {...state,
            friends: [
              ...state.friends,
              action.friend
            ]
        }
    )

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )

    default:
      return state;

  }
};
