//initialize state with null
const reducer = (state = {}, action) => {
     let n = Math.floor(Math.random() * 10)
     console.log("n is", n);
     //we will get action
    switch (action.type) {
      case 'GET_NEWS':
           return { ...state, loading: true };
      case 'NEWS_RECEIVED':
           return { ...state, news: action.json[n], loading: false }
      default: 
           return state;
    }
   };
   export default reducer;