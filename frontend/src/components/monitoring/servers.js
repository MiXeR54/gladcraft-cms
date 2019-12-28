import React, { Component, Fragment } from "react";
import Server from "./server";
import Pinger from "../../workers/pinger";

export default class Servers extends Component {

  Pinger = new Pinger();

  state = {
    Servers: [
      {
        name: "GladCraft",
        online: "Сервер пингуется...",
        disabled: true,
        progress: "10%",
        id: 1
      },
      {
        name: "Hypixel",
        online: "Сервер пингуется...",
        disabled: true,
        progress: "10%",
        id: 2
      }
    ]
  };

//   async componentDidMount() {
    // try {
    //   setInterval(async () => {
    //     await this.updateServer();
    //     console.log("пумс");
    //   }, 5000);
    // } catch(e) {
    //   console.log(e);
    // }
// }

//   updateServer() {
//     this.Pinger.getServers().then(status => {
//       this.setState(status);
//     });
//   }

  componentDidMount() {
    this.updateServer();
    console.log("пумс");
  }

  async componentDidUpdate() {
    this._asyncRequest = new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log("хуюмс");
        resolve("готово!");
      }, 5000);
    });
    await this._asyncRequest;
    this.Pinger.getServers().then(status => {
      this.setState(status);
    });
  }

  updateServer() {
    this.Pinger.getServers().then(status => {
      this.setState(status);
    });
  }


  render() {
    return (
      <div className="col-lg-4 mb-3 order-lg-last">
        <div className="card">
          <div className="card-header">Мониторинг серверов</div>
          <div className="card-body">
            {this.state.Servers.map(server => {
              // console.log(server.online);
              return (
                <Fragment key={server.id}>
                  <Server
                    name={server.name}
                    online={server.online}
                    disabled={server.disabled}
                    progress={server.progress}
                  ></Server>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
