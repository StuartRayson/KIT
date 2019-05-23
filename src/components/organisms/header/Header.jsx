import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/heading/Heading.jsx';
import Button from '../../atoms/button/Button.jsx';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: !props.closed
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { className } = this.props;

    const classes = classNames('o-header', !isOpen && 'o-header--closed', className);

    return (
      <header className={classes}>
        <div className="o-header__content">
          <Heading className="o-header__title" text="dsjfkjsdklfjsdklfj" />
        </div>
        <Button className="o-header__toggle" onClick={this.handleToggle} variant="primary">
          toggle
          {' '}
          <span role="img" aria-label="smiling face with sunglasses">
            😎
          </span>
        </Button>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  closed: PropTypes.bool
};

export default Header;
