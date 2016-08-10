import React, { PropTypes } from 'react';
import moment from 'moment';

import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

import { grey50 } from 'material-ui/styles/colors';

import history from '../history';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: 800,
  backgroundColor: grey50,
};

const leftGutterStyle = {
  flex: '1 6 10%',
  order: 0,
};

const rightGutterStyle = {
  flex: '1 6 10%',
  order: 2,
};

const listStyle = {
  flex: '3 1 80%',
  order: 1, // flexbox order
  minWidth: 640,
};

class ChapterList extends React.Component {

  static propTypes() {
    return {
      chapters: PropTypes.object,
    };
  }

  showChapters() {
    let content = null;

    if (this.props.chapters) {
      content = Object.keys(this.props.chapters).map(key => {
        const chapter = this.props.chapters[key];

        return (
          <ListItem>
            <Card
              onClick={(e) => {
                e.preventDefault();
                history.push(`/chapters/${key}`);
              }}
            >
              <CardTitle
                title={chapter.title}
                subtitle={moment(chapter.created).format('LLLL')}
              />
            </Card>
          </ListItem>
        );
      });
    }

    return content;
  }

  render() {
    let content = null;

    if (this.props.chapters && Object.keys(this.props.chapters).length > 0) {
      content = (
        <div style={containerStyle}>
          <div style={leftGutterStyle}>
          </div>
          <div style={listStyle}>
            <List>
              {this.showChapters()}
            </List>
          </div>
          <div style={rightGutterStyle}>
          </div>
        </div>
      );
    }

    return content;
  }
}

export default ChapterList;
