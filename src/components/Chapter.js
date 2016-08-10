import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardText, CardTitle } from 'material-ui/Card';

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

const contentStyle = {
  minWidth: 640,
};

const leftGutterStyle = {
  flex: '1 6 10%',
  order: 0,
};

const rightGutterStyle = {
  flex: '1 6 10%',
  order: 2,
};

class Chapter extends React.Component {
  static propTypes() {
    return {
      title: PropTypes.string,
      content: PropTypes.string,
    };
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={leftGutterStyle}></div>
        <div
          style={formStyle}
        >
          <Card
            zDepth="0"
          >
            <CardTitle
              title={this.props.title}
            />
            <CardText>
              <ReactMarkdown
                source={this.props.content}
                style={contentStyle}
              />
            </CardText>
          </Card>
        </div>
        <div style={rightGutterStyle}></div>
      </div>
    );
  }
}

export default Chapter;
