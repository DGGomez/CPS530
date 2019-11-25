import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <div>
      <footer style={styles.footerStyle} className="text-center navbar-fixed-bottom .bg-secondary">
      
      <div className="copyright-text">
        <p>© Tutorial</p>
      </div>
      </footer>
      </div>
    );
  }
}

const styles = {
  footerStyle: {
    padding: "10px",
    color: 'white',
    background: "grey"
    
  }
};

export default Footer;