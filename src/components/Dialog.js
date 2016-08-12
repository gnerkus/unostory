import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AppDialog extends React.Component {
  static propTypes() {
    return {
      clearDialog: PropTypes.func.isRequired,
      noAction: PropTypes.func,
      noText: PropTypes.string,
      text: PropTypes.string.isRequired,
      yesAction: PropTypes.func,
      yesText: PropTypes.string,
    };
  }

  render() {
    const actions = [
      <FlatButton
        label={this.props.noText}
        primary
        onTouchTap={(e) => {
          e.preventDefault();
          if (this.props.noAction) {
            this.props.noAction();
          }
          this.props.clearDialog();
        }}
      />,
      <FlatButton
        label={this.props.yesText}
        primary
        onTouchTap={(e) => {
          e.preventDefault();
          if (this.props.yesAction) {
            this.props.yesAction();
          }
          this.props.clearDialog();
        }}
      />,
    ];

    let content = null;
    if (this.props.text) {
      content = (
        <Dialog
          title={this.props.text}
          actions={actions}
          modal
          open={!!this.props.text}
        />
      );
    }

    return content;
  }
}

export default AppDialog;
