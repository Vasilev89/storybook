import React from 'react';

const Name = (props) => (
  <div className={'name ' + (props.type ? props.type : '')}>{props.name}</div>
)

Name.propTypes = {
  type: React.PropTypes.oneOf(['highlight', 'disabled']),
}

export default Name;