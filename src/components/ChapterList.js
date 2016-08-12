import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentCreate from 'material-ui/svg-icons/content/create';

import { grey50, grey500 } from 'material-ui/styles/colors';

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

const smallIconStyle = {
  width: 24,
  height: 24,
  color: grey500,
};

const titleStyle = {
  fontWeight: 'normal',
};

class ChapterList extends React.Component {

  static propTypes() {
    return {
      chapters: PropTypes.object,
      removeChapter: PropTypes.func,
      editChapter: PropTypes.func,
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
                subtitle={moment(chapter.created).format('MMM Do')}
                titleStyle={titleStyle}
              />
              <CardText>
                <ReactMarkdown source={chapter.content.slice(0, 100)} />
              </CardText>
              <CardActions>
                <IconButton
                  tooltip="Edit chapter"
                  iconStyle={smallIconStyle}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.editChapter(chapter, key);
                  }}
                >
                  <ContentCreate />
                </IconButton>
                <IconButton
                  tooltip="Delete chapter"
                  iconStyle={smallIconStyle}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.removeChapter(key);
                  }}
                >
                  <ActionDelete />
                </IconButton>
              </CardActions>
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
