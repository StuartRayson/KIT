import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ContentApiSrvc from '../../../shared/services/contentApiSrvc';
import Header from '../../organisms/header/Header.jsx';
import Article from '../../molecules/article/Article.jsx';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    ContentApiSrvc.getArticles()
      .then(data => this.setState({
        articles: data,
        loading: false,
        error: null
      }))
      .catch((reason) => {
        this.setState({
          error: reason,
          loading: false
        });
      });
  }

  render() {
    const { loading, error, articles } = this.state;
    const { errorMessage } = this.props;

    return (
      <div className="t-homepage">
        <Header className="t-homepage__header" />

        <div>
          {loading && (
            <div style={{ textAlign: 'center', fontSize: '42px' }}>
              <span role="img" aria-label="loading">
                ⌛
              </span>
            </div>
          )}
          {error && <div style={{ textAlign: 'center', fontSize: '42px' }}>{errorMessage}</div>}

          {articles.map(article => (
            <Article key={article.id} title={article.title} content={article.body} />
          ))}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  errorMessage: PropTypes.string
};

export default HomePage;
