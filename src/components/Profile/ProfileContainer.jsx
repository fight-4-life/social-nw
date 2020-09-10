import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() { 
    return <Profile {...this.props} profile={this.props.profile } />
  }  
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})
export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)