import React, { Fragment } from "react";

import PhoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/PersonPin';

import Grid from "@material-ui/core/Grid";

const ListMessage = ({propMessage}) => {
  return (
    <>
      <Grid container>
        <Grid  item xs={9} />
        <Grid
          container
          item
          xs={3}
          justify="flex-end"
        >
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              marginRight: "20px",
              overflowWrap: "anywhere",
              backgroundColor: "grey"
            }}
          >
            <p style={{ color: "black", textAlign: "left", margin: 5 }}>
              {propMessage.createNewMessage.userMessage}
            </p>
            <small style={{ color: "black" }}>
              {propMessage.createNewMessage.dateMessage}
            </small>
          </div>
          <PersonIcon />
          <p>You</p>
        </Grid>
      </Grid>

      <Grid style={{alignItems: "center"}} container>
        <PhoneIcon />
        <p>Bot</p>
        <Grid
          item
          xs={3}
        >
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              marginRight: "20px",
              overflowWrap: "anywhere",
              backgroundColor: "grey",
              marginTop: "20px"
            }}
          >
            <p style={{ color: "black", textAlign: "left", margin: 5 }}>
              {propMessage.messageBot}
            </p>
            <small style={{ color: "black" }}>
              {propMessage.createNewMessage.dateMessage}
            </small>
          </div>
        </Grid>
        <Grid item xs={9} />
      </Grid>
    </>
  )
}

export default ListMessage