export default class Pinger {
    getData = async (url) => {
     const res = await fetch(url);
     if (!res.ok) {
      console.log("Отсутствует связь с сервером...");
     }
 
     return await res.json();
   }
 
   getServers() {
     return this.getData('/ping');
   }
 }
 