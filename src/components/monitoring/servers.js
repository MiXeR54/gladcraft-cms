import React from "react";
import Server from "./server";

export default function Servers() {
  return (
    <div className="col-md-4 mb-3 order-md-last">
      <div className="card">
        <div className="card-header">Мониторинг серверов</div>
        <div className="card-body">
          <Server name="GladCraft" online="10/100" disabled={true} progress="50%"/>
          <Server name="Hypixel" online="50/100" disabled={false} progress="20%"/>
        </div>
      </div>
    </div>
  );
}
