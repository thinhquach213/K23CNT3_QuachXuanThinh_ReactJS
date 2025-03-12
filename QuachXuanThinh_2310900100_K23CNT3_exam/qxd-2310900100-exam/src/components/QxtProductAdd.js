import React, { useState } from "react";

const QxtProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ qxtpid: "", qxtpname: "", qxtpquantity: "", qxtpprice: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.qxtpid && newProduct.qxtpname && newProduct.qxtpquantity && newProduct.qxtpprice) {
      addProduct(newProduct);
      setNewProduct({ qxtpid: "", qxtpname: "", qxtpquantity: "", qxtpprice: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="qxtpid" placeholder="ID" value={newProduct.qxtpid} onChange={handleChange} required />
        <input type="text" className="form-control" name="qxtpname" placeholder="Tên Sản Phẩm" value={newProduct.qxtpname} onChange={handleChange} required />
        <input type="number" className="form-control" name="qxtpquantity" placeholder="Số Lượng" value={newProduct.qxtpquantity} onChange={handleChange} required />
        <input type="number" className="form-control" name="qxtpprice" placeholder="Giá" value={newProduct.qxtpprice} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
};

export default QxtProductAdd;
