import React from 'react';

import {Icon, Label} from 'semantic-ui-react';
import styles from './styles';

class Ad extends React.Component {
    render(){
        return(
            <a href='http://github.com/damianszn' style={styles.ad}>
                <Label icon>
                    <Icon name='github'/>
                    Github
                </Label>
            </a>
        )
    }
}

export default Ad;