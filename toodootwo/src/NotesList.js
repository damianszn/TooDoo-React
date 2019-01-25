import React from 'react';

import { List, Input } from 'semantic-ui-react'
import styles from './styles'; 

export const NotesList = (props) => {
        const notes= props.notes.map((note) => (
            <List.Item
            key={note.id}>
                <List.Content style={styles.li}>
                    <List.Icon 
                    style={{cursor:'pointer',color:'grey'}} 
                    name='minus square outline' size='large' verticalAlign='middle'
                    onClick={() => props.deleteNote(note.id)} />
                    <Input style={{color:'teal',fontSize:'1em',width:'40vw'}}>{note.text} </Input>
                </List.Content>
            </List.Item>
        ))

        return(
            <List relaxed style={styles.ul}>{notes}</List>
        )
}
    
