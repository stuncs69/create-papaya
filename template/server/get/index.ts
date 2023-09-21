import { getPublicFileContents, PapayaRoute } from "papaya.js";

export default class Index extends PapayaRoute {
    path: string = "/";
    callback = () => {
        return new Promise((resolve) => {
            resolve(getPublicFileContents("index.html"));
        })
    }
}