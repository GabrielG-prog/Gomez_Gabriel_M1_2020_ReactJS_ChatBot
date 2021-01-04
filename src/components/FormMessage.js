import React, { Component } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';

class FormMessage extends Component {
  
  state = {
    newMessage: ""
  }
  
  inputChange = e => {
    this.setState({newMessage: e.currentTarget.value});
  };
  
  creatNewMessage = e => {

    if(this.state.newMessage) {
      
      e.preventDefault();
    
      const dateMessage = new Date().getHours()+ ":" +new Date().getMinutes();
      const userMessage = this.state.newMessage;

      this.props.refSendStateMessage({userMessage, dateMessage});
      
      this.setState({newMessage: ""});
    } else {
      alert("Veuillez ecrire un message");
    }
  };

  handleKeyPress = e => {
        if (e.keyCode === 13) {
          this.creatNewMessage()

        }
      }
    
  render(){

    const classes = makeStyles((theme) => ({
      formStyle: {
        margin: theme.spacing(1),
        width: 200
      }
    }));

    return ( 
      <div className={classes.formStyle}>
        <form>
          <div>
            <Input 
              value={this.state.newMessage} 
              onChange={this.inputChange} 
              type="text" 
              placeholder="Votre message"
              fullWidth
              onKeyPress={this.handleKeyPress}
            />
            <Button 
              variant="contained"
              color="primary"
              onClick={this.creatNewMessage}
            >
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormMessage