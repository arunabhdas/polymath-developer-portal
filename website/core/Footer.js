/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <script src={this.props.config.baseUrl + 'js/timeline.js'}></script>
        <ul className="footer-list">
          <li className="footer-list-item" style={{ marginTop: '6px' }}>&copy; 2018 Polymath</li>
          {/* <li className="footer-list-item">
                <a className="footer-list-item-link" href="#">Terms of use</a>
            </li>
            <li className="footer-list-item">
                <a className="footer-list-item-link" href="#">Privacy Policy</a>
            </li> */}
        </ul>
      </footer>
      // <footer className="nav-footer" id="footer">
      //   <section className="sitemap">
      //     <a href={this.props.config.baseUrl} className="nav-home">
      //       {this.props.config.footerIcon && (
      //         <img
      //           src={this.props.config.baseUrl + this.props.config.footerIcon}
      //           alt={this.props.config.title}
      //           width="66"
      //           height="58"
      //         />
      //       )}
      //     </a>
      //     <div>
      //       <h5>Docs</h5>
      //       <a href={this.docUrl('doc1.html', this.props.language)}>
      //         Getting Started (or other categories)
      //       </a>
      //       <a href={this.docUrl('doc2.html', this.props.language)}>
      //         Guides (or other categories)
      //       </a>
      //       <a href={this.docUrl('doc3.html', this.props.language)}>
      //         API Reference (or other categories)
      //       </a>
      //     </div>
      //     <div>
      //       <h5>Community</h5>
      //       <a href={this.pageUrl('users.html', this.props.language)}>
      //         User Showcase
      //       </a>
      //       <a
      //         href="https://blog.polymath.network/announcing-the-polymath-network-bug-bounty-3e4a78ac9809/"
      //         target="_blank"
      //         rel="noreferrer noopener">
      //         Bug Bounty Program
      //       </a>
      //       <a href="https://gitter.im/PolymathNetwork/Lobby/">Gitter Channel</a>
      //       <a
      //         href="https://twitter.com/PolymathNetwork/"
      //         target="_blank"
      //         rel="noreferrer noopener">
      //         Twitter
      //       </a>
      //     </div>
      //     <div>
      //       <h5>More</h5>
      //       <a href="https://blog.polymath.network/">Blog</a>
      //       <a href="https://github.com/PolymathNetwork/">GitHub</a>
      //       <a
      //         className="github-button"
      //         href={this.props.config.repoUrl}
      //         data-icon="octicon-star"
      //         data-count-href="/facebook/docusaurus/stargazers"
      //         data-show-count={true}
      //         data-count-aria-label="# stargazers on GitHub"
      //         aria-label="Star this project on GitHub">
      //         Star
      //       </a>
      //     </div>
      //   </section>

      //   <a
      //     href="https://github.com/PolymathNetwork/"
      //     target="_blank"
      //     rel="noreferrer noopener"
      //     className="fbOpenSource">
      //     <img
      //       src={this.props.config.baseUrl + 'img/bull.png'}
      //       alt="Polymath Open Source"
      //       width="170"
      //       height="45"
      //     />
      //   </a>
      //   <section className="copyright">{this.props.config.copyright}</section>
      // </footer>
    );
  }
}

module.exports = Footer;
