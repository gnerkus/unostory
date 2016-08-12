import React, { PropTypes } from 'react';

import { Card, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: 800,
};

const formStyle = {
  flex: '3 1 80%',
  order: 1, // flexbox order
};

const titleStyle = {
  fontSize: '2em',
  fontWeight: '400',
};

const textAreaStyle = {
  minWidth: 640,
};

const leftGutterStyle = {
  flex: '1 6 10%',
  order: 0,
};

class NewChapterForm extends React.Component {
  static propTypes() {
    return {
      disabled: PropTypes.bool,
      onSubmit: PropTypes.func,
      title: PropTypes.string,
      content: PropTypes.string,
      uid: PropTypes.string,
    };
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={leftGutterStyle}></div>
        <form
          style={formStyle}
          onSubmit={this.props.onSubmit}
        >
          <Card
            zDepth="0"
          >
            <CardText>
              <TextField
                name="title"
                style={titleStyle}
                hintText="Chapter title"
                underlineStyle={{ display: 'none' }}
              />
              <br />
              <TextField
                name="content"
                style={textAreaStyle}
                underlineStyle={{ display: 'none' }}
                multiLine
                placeholder="What happened next?"
                rows={20}
                rowsMax={20}
              />
            </CardText>
            <CardActions>
              <FlatButton
                label="Publish"
                secondary
                type="submit"
              />
            </CardActions>
          </Card>
          <input
            type="hidden"
            name="uid"
            id="uid"
            defaultValue={this.props.uid}
          />
        </form>
        <div style={leftGutterStyle}></div>
      </div>
    );
  }
}

export default NewChapterForm;
