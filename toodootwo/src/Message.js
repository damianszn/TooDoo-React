import React from 'react';

import {Message} from 'semantic-ui-react';

class MessageShown extends React.Component{
    constructor(props){
        super(props);
        this.state={shown:true}

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    

    onClickHandler(){
        this.setState({shown: false});
    }

    render(){
        return(
            <div onClick={this.onClickHandler}>
                { this.state.shown ? <Msg /> : null }
            </div>
        )
    }
}
export default MessageShown;

class Msg extends React.Component{
    render(){
        return(
            <Message
            style={{textAlign:'center'}}
            header='Welcome,'
            content='Write whatever you have to do, click on the icon next to your task to delete it.'
            />
        )
    }
}