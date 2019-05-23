import React from 'react';
import { storiesOf } from '@storybook/react';
import getTestResults from '../../../getTestResults';
import HomePage from './HomePage.jsx';
import data from './data/default.json';

storiesOf('templates/HomePage', module)
  .addDecorator(getTestResults('HomePage'))
  .add('HomePage', () => <HomePage {...data} />);
