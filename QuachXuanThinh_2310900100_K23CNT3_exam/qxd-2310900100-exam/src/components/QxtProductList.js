import React, { useState } from "react";

const QxtProductList = ({ products, removeProduct, updateProduct }) => {
  const [editProductId, setEditProductId] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ qxtpname: "", qxtpquantity: "", qxtpprice: "" });

  // Bắt đầu chỉnh sửa
  const handleEdit = (product) => {
    setEditProductId(product.qxtpid);
    setUpdatedInfo({ qxtpname: product.qxtpname, qxtpquantity: product.qxtpquantity, qxtpprice: product.qxtpprice });
  };

  // Lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateProduct({ qxtpid: editProductId, ...updatedInfo });
    setEditProductId(null); // Đóng chế độ chỉnh sửa
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Danh sách Sản Phẩm</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.qxtpid} className="list-group-item d-flex justify-content-between align-items-center">
            {editProductId === product.qxtpid ? (
              // Hiển thị form chỉnh sửa
              <>
                <input type="text" className="form-control me-2" value={updatedInfo.qxtpname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, qxtpname: e.target.value })} />
                <input type="number" className="form-control me-2" value={updatedInfo.qxtpquantity} onChange={(e) => setUpdatedInfo({ ...updatedInfo, qxtpquantity: e.target.value })} />
                <input type="number" className="form-control me-2" value={updatedInfo.qxtpprice} onChange={(e) => setUpdatedInfo({ ...updatedInfo, qxtpprice: e.target.value })} />
                <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                <button className="btn btn-secondary" onClick={() => setEditProductId(null)}>Hủy</button>
              </>
            ) : (
              // Hiển thị thông tin sản phẩm
              <>
               {product.qxtpid}- {product.qxtpname} - Số lượng: {product.qxtpquantity} - Giá: {product.qxtpprice}đ
                <div className="d-flex gap-1">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(product)}>Sửa</button>
                  <button className="btn btn-danger" onClick={() => removeProduct(product.qxtpid)}>Xóa</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QxtProductList;
