let store:{[key:string]:string} = {
};
const modifyStore = (key:string, payload:string) => {
    store = { ...store, [key]: payload };
    return store;
}
const getStore = (key:string) => {
    return store[key];
}
export default{
    modifyStore,
    getStore
}