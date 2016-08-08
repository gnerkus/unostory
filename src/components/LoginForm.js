import React, { PropTypes } from 'react';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { red500 } from 'material-ui/styles/colors';

import C from '../constants';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: 620,
  padding: 0,
  margin: 0,
};

const formStyle = {
  textAlign: 'center',
};

const LoginForm = ({ authStatus, onLoginBtnClick }) => {
  let content = null;

  if (authStatus !== C.LOGGED_IN) {
    content = (
      <div style={containerStyle}>
        <Card style={formStyle}>
          <CardTitle title="Social Sign in" />
          <CardActions>
            <RaisedButton
              label="Sign in with Google"
              labelColor="#FFF"
              backgroundColor={red500}
              onClick={
                (e) => onLoginBtnClick(e, 'google')
              }
            />
          </CardActions>
        </Card>
      </div>
    );
  }

  return content;
};

LoginForm.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onLoginBtnClick: PropTypes.func.isRequired,
};

export default LoginForm;
