import React from 'react'

export default function QxtFuncCompObj(props) {
  return (
    <div>
        <h2>Props is Object</h2>
        <p><b>Info:</b></p>
        <p>Fullname:{props.renderInfo.fullname}</p>
        <p>Fullname:{props.renderInfo.age}</p>
        <p>Fullname:{props.renderInfo.phone}</p>
        <p>Fullname:{props.renderInfo.fullname}</p>
    </div>
  )
}
