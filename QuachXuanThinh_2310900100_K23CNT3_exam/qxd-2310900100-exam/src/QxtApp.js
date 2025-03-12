import React, { useState } from "react";
import QxtProductList from "./components/QxtProductList";
import QxtProductAdd from "./components/QxtProductAdd";

const QxtApp = () => {
  const [products, setProducts] = useState([
    { qxtpid: "2310900100", qxtpname: "Quách Xuân Thịnh", qxtpquantity: "10", qxtpprice: "1000000" },
    { qxtpid: "230002", qxtpname: "O to ", qxtpquantity: "20", qxtpprice: "800000" },
    { qxtpid: "230003", qxtpname: "Máy Bay", qxtpquantity: "30", qxtpprice: "500000" },
  ]);

  // Thêm sản phẩm mới
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Xóa sản phẩm
  const removeProduct = (qxtpid) => {
    setProducts(products.filter(product => product.qxtpid !== qxtpid));
  };

  // Cập nhật sản phẩm
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.qxtpid === updatedProduct.qxtpid ? updatedProduct : product)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Quản lý Sản Phẩm</h1>
      <QxtProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct} />
      <QxtProductAdd addProduct={addProduct} />
    </div>
  );
};

export default QxtApp;
