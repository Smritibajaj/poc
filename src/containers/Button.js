import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';
//action is called on button click
let Button=({getNews})=>(
   <button onClick={getNews}>Press to see news</button>
)
//action is dispatched to props
const mapDispatchToProps = {
     getNews: getNews,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;
