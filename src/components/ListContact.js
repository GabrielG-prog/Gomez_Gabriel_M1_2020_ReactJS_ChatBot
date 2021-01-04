import React, { Fragment } from "react";

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/PersonPin';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ListContact = () => {
  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="You" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Bot" />
      </ListItem>
      <Divider />
    </>
  )
}

export default ListContact