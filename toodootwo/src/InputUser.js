import React from 'react';
import { Input,Button, Icon,Divider } from 'semantic-ui-react';

//import styles from './styles'; 

export const InputUser = (props) =>{
        return(
            <div>
                <Icon 
                circular color='teal' name='sticky note outline' size='huge' />
                <Divider />
                <Input 
                placeholder = 'Write anything...'
                value = {props.inputValue}
                onChange={props.onChangeHandler} 
                color='grey'
                />
                <Button 
                basic 
                color='teal'
                style={{backgroundColor:'white'}}
                onClick={props.onClick}
                >
                    Add note
                </Button>
            </div>
        )
}