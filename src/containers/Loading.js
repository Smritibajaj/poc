import React from 'react';
import { connect } from 'react-redux'
import img from '../logo.svg'
let Loading = ({ loading }) => (
   //if props get loading then it will be loaded else null state will be there
loading ?
<div style={{ textAlign: 'center' }}>
   <img src={img} alt='loading' />
   <h1>LOADING</h1>
</div> :
null
);
//we will get state and that will be dispatched to props
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;