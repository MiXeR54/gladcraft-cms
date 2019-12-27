import React from "react";
import Feed from "../../components/News/feed";
import Monitoring from "../../components/monitoring/servers";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <Monitoring />
        <Feed />
      </div>
    </div>
  );
}
