import React from "react";
import ReactInputMask from 'react-input-mask';
import {Input} from 'antd';

class InputMask extends React.PureComponent {
  render () {
    return (
      <ReactInputMask>
        {...this.props}
        value={this.props.value === undefined ? '' : this.props.value}
        {(inputProps) => <Input {...inputProps} disabled={this.props.disabled ? this.props.disabled : null}/>}
      </ReactInputMask>
    );
  }
}

export default InputMask;
