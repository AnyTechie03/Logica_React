import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <>
      <div className="error">
        <div className="wrap">
          <div className="404">
            <pre>
              <code>
                <span className="green">&lt;!DOCTYPE html&gt;</span>
                <span className="orange">&lt;html&gt;</span>
                <span className="orange">&lt;style&gt;</span>
                <span className="orange">&lt;/style&gt;</span>
                <span className="orange">&lt;body&gt;</span>
                ERROR 404! FILE NOT FOUND!
                <br/>
                <span className="comment">&lt;!-- The file you are looking for is not where you think it is. --&gt;</span>
                <br/><span className="comment">&lt;!-- Go to Home Page 👀👉🏻<a href="/" style={{color: "#08b2aa", textdecoration: "none", fontweight: "bold"}}>Home</a>
--&gt;</span>
              </code>
            </pre>
          </div>
          <code>
            <br />
            <span className="info">
              <br />
              <span className="orange">&lt;/body&gt;</span>
              <br />
              <span className="orange">&lt;/html&gt;</span>
            </span>
          </code>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
