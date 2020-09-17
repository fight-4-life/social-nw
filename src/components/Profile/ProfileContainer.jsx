import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, updateStatus, getStatus} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 11296
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() { 
    return <Profile {...this.props} profile={this.props.profile}  status={this.props.status} updateStatus={this.props.updateStatus}/>
  }  
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})
export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
  // withAuthRedirect
)(ProfileContainer)