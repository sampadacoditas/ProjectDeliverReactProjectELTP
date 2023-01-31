export function loginReducer(state: any, actions: {type:string,payload:any}) {
  switch (actions.type) {
    case "setEmail":
      state.email=actions.payload;
      return state;
      case "setPassword":
        state.password=actions.payload;
        return state
    default:
      return state;
  }
}
