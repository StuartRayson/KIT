import { addDecorator, configure } from '@storybook/react';
import '../src/shared/styles/main.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("..", true, /\.story\.jsx?$/));
}

configure(loadStories, module);