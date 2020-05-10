import React from "react";
import * as profileAction from "../actions/profile.js"
import * as commentAction from "../actions/comment.js"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

class ProfileComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            profileData:'', 
            commentData:''
        }
    }
    componentDidMount(){
        this.setState({
            profileData: this.props.getProfileData,
            commentData: this.props.getCommentsData
        })
    }

    render(){
       
        return(
            <div className="container mt-3">
            <h2>Comments</h2>
            <div className="media border p-3">
              <img src={require("../Images/people_2x.jpg")} alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{"width":"60px"}} />
              <div className="media-body">
                <h4>John Doe <small><i>Posted on May 10, 2020</i></small></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="media p-3">
                  <img src={require("../Images/images.jpeg")} alt="Jane Doe" className="mr-3 mt-3 rounded-circle" style={{"width":"45px"}} />
                  <div className="media-body">
                    <h4>Jane Doe <small><i>Posted on May 10, 2020</i></small></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          
        )
    }
}

const mapStateToProps = (state) =>({
    getProfileData : state.profileReducer,
    getCommentsData: state.getCommentReducer
})

const mapDispatchToProps = (dispatch) =>({
    profile: bindActionCreators(profileAction, dispatch),
    comment: bindActionCreators(commentAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
