import React from 'react';
import c from './status.module.css';

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        valueRightNow: this.props.value,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value){
            this.setState({
                valueRightNow: this.props.value,
            });
        }
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.setStatus(this.state.valueRightNow);
    }
    changeStatus = (e) => {
        this.setState({
            valueRightNow: e.target.value,
        });
    }

    render(){
        return(<>
            <div className={c.main} >
                <div className={c.about} > About me: </div>
                {
                    (this.props.isNotOwner)
                    ?
                        <div className={c.status}>
                            <span className={c.status_is} > {this.props.value} </span>
                        </div>
                    :
                    (this.state.editMode) ? 
                        <div>
                            <input onBlur={this.deactivateEditMode} onChange={this.changeStatus} className={c.input_status} type="text" autoFocus={true} value={this.state.valueRightNow} />
                        </div>
                    :
                        <div className={c.status} onClick={this.activateEditMode} >
                            <span className={c.status_is} > {this.props.value} </span>
                        </div>
                }
            </div>
        </>);
    }
}

export default ProfileStatus;