export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(action);
    console.log("prevState", prevState);
    console.log("actionArguments", args);
    const newState = reducer(prevState, action, args);
    console.log("newState", newState);
    console.groupEnd();
    return newState;
  };
}
