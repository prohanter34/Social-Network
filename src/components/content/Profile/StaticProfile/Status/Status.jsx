import React from "react"

class Status extends React.Component {

    componentDidMount() {
        
        this.props.getStatus(this.props.id)
    }

    componentDidUpdate(lastProps, lastState) {
        if (this.props.status !== lastProps.status) {
            this.setText(this.props.status)
        } 
        
    }

    state = {
        editMode: false,
        text: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    offEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    setText = (text) => {
        
        this.setState({
            text
        })
    }

    render() {
        
        let onChange = (e) => {
            
            this.setText(e.currentTarget.value)
        }

        let onBlur = () => {
            this.offEditMode()
            this.props.putStatus(this.state.text)
        }

        
        return (
            <div className="statusContainer">

                {this.state.editMode ?
                    (
                        <input autoFocus 
                            onBlur={onBlur} 
                            type="text" 
                            value={this.state.text !== null ? this.state.text : "Has hot status"} 
                            onChange={onChange}
                        />
                    ) :
                    (
                        <div onDoubleClick={this.onEditMode}>{this.state.text !== null ? this.state.text : "Has hot status"}</div>
                    )
                }


            </div>
        )
    }
}

export default Status