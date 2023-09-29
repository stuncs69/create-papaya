import { renderPublic, renderEJS, extractGetParameters, PapayaRoute } from "papaya.js"

export default class GetIndex extends PapayaRoute {
    path = "/";
    callback = () => {
        return new Promise((resolve) => {
            resolve(renderPublic("index.html"));
        })
    };
}