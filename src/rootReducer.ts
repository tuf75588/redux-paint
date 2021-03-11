type RootState = {};

type Action = {
  type: string;
};

const initialState = {}
/* 
A reducer simply returns some new state based on some sort of action
*/
export function rootReducer(state: RootState = initialState, action:Action) {
  return state;
}