import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userIdName } from "../actions/index"

class Footer extends Component {

  componentDidMount() {
    this.props.getUserAction()
  }
  

  render() {
    console.log('props', this.props)
    return (
      <div>
        <label>Copyright by NicoH</label>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    userData: state.getUserName.userData,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAction: () => dispatch(userIdName())
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default connectComponent