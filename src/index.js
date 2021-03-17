function createStore(reducer) {
  return {
    getState: () => {
      return reducer(undefined, { type: null });
    },
    dispatch: (action) => {
      return reducer(undefined, action);
    }
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}


function render() {
  const store = createStore(candyReducer);
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.