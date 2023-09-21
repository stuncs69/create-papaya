import { PapayaServer } from "papaya.js";

const server = new PapayaServer();

server.use(function hello() {
    return new Promise((resolve) => {
        console.log("Hello, world!");
    })
})

server.listen();