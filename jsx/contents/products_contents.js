import React from 'react';
import ReactDOM from 'react-dom';

class ProductsContents extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="ct-content">
        <div className="row ct-js-masonry">
          <div className="col-sm-6 ct-js-masonryItem"></div>

          <div className="col-sm-12 ct-js-masonryItem">
            Trang sản phẩm
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsContents