import React from 'react';

export default function QxtProductItem({ product }) {
  return (
    <tr>
      <td>{product.qxtProductId}</td>
      <td>{product.qxtProductName}</td>
      <td>{product.qxtQuantity}</td>
      <td>${product.qxtPrice}</td>
      <td>
        <button className="btn btn-success mx-1">Sửa</button>
        <button className="btn btn-danger mx-1">Xóa</button>
      </td>
    </tr>
  );
}
