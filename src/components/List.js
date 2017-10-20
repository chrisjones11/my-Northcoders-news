import React from 'react';
import PT from 'prop-types';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <ul>
          {this.props.list.map((item)=>{
   
            return (
              <div key = {item.id}>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item">
                      <span className="icon is-small"><i className="fa fa-arrow-up"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fa fa-arrow-down"></i></span>
                    </a>
                  </div>
                </nav>
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h3>
                        {item.title}
                      </h3>
                      <p>Created by <a>{item.created_by}</a>in <a>{item.belongs_to}</a></p>
                    </div>
                  
                    
                      
                  </div>
                </article>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  list: PT.array.isRequired
};

export default List;