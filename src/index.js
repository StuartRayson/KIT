import ReactHabitat from 'react-habitat';
import './shared/styles/main.scss';

// import your high-level components you want to pass to react-habitat
import HomePage from './components/templates/homepage/HomePage.jsx';

class ComponentExporter extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register your components
    // You can render them as
    // `<div data-component="SomeReactComponent"></div>`
    // in your CMS templates
    builder.register(HomePage).as('homepage');

    // Finally, set the container:
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new ComponentExporter();
