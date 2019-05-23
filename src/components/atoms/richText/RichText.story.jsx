import React from 'react';
import { storiesOf } from '@storybook/react';
import getTestResults from '../../../getTestResults';
import RichText from './RichText.jsx';
import config from './config.json';

storiesOf('atoms/RichText', module)
  .addDecorator(getTestResults('RichText'))
  .add('RichText', () => <RichText html={config.html} />);
