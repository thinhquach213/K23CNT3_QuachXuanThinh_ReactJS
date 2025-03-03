import React from 'react';
import QxtProductItem from './QxtProductItem';
import QxtProductData from './QxtProductData';

export default function QxtProductList() {
  return (
    <div className="container">
      <h2 className="text-center my-3">Danh Sách Sản Phẩm</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {QxtProductData.map((product) => (
            <QxtProductItem key={product.qxtProductId} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
