import React, { Component, Fragment } from "react";

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from "@material-ui/core/Grid";

import ListMessage from'./ListMessage';
import ListContact from'./ListContact';
import FormMessage from'./FormMessage';

class TchatContent extends Component {
  
  state = {
    listMessage: []
  }
  
  sendStateMessage = createNewMessage => {

      const copyListMessage = [...this.state.listMessage];
      
      switch (createNewMessage.userMessage) {
        case 'salut':
        case 'Salut':
        case 'bonjour':
        case 'Bonjour':
            copyListMessage.push({createNewMessage, messageBot:"Hey :) que veux tu"});
            break;
        case 'on est quel jour ?':
        case 'On est quel jour ?':
        case 'quel jour on est ?':
        case 'Quel jour on est ?':
          copyListMessage.push({createNewMessage, messageBot: Date()});
          break;
        case 'au revoir':
        case 'Au revoir':
        case 'bye':
        case 'Bye':
          copyListMessage.push({createNewMessage, messageBot:"Au revoir :)"});
          break;
        default:
          copyListMessage.push({createNewMessage, messageBot:"Je ne comprend pas ton message"});
      }
      
      this.setState({listMessage: copyListMessage});
  };
  
  render(){
    
    return (
      <>
        <Grid container spacing={3} >
          <Grid item xs={3} style={{height: "100vh"}}>
            <ListContact />
          </Grid>
          <Grid item xs={9}>
            <div
              style={{
                height: window.innerHeight - 100,
                width: "100%",
                borderRadius: 10,
                backgroundColor: '#fff',
                overflow: 'scroll'
              }}
            >
              <List 
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader>
                    Talk Me
                  </ListSubheader>
                }
              >
                {this.state.listMessage.map(message => (      
                  <ListMessage propMessage={message} key={message.messageBot.toString()} />
                ))}
              </List>
            </div>
            <FormMessage refSendStateMessage={this.sendStateMessage} />
          </Grid>
        </Grid>
      </>   
    )
  }
}

export default TchatContent