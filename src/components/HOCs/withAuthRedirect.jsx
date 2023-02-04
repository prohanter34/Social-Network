import { connect } from "react-redux"
import React from "react"
import { Navigate } from "react-router"


const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        
        render() {
            
            if (this.props.resultCode === 1) {
  
                return <Navigate to="/login" />
            } else {
                
                return <Component />
            }
        }

    }

    const mapStateToProps = (state) => {
        return {
            resultCode: state.auth.resultCode
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect
