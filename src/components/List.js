import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        {this.props.list.map((item)=>{
   
          return (
            <div key = {item._id} >
          
              <div>
                <div >
                  <div >
                    <i></i>
                    <i ></i>
                  </div>
                  <div >
                    <h6>10</h6>
                  </div>
                </div>
              </div>
              <div >
                <Link to = {`/article/${item._id}`} ><h4 > {item.title} </h4></Link>
                <p > Created by 
                  <a href="#!" >{item.created_by}</a>
                    in <Link to={`/${item.belongs_to}`} >{item.belongs_to}</Link>
                </p>
              </div>
              
            </div>
          );
        })}
     
      </div>
    );
  }
}

List.propTypes = {
  list: PT.array.isRequired
};

export default List;