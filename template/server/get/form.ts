import { PapayaRoute, extractGetParameters, render } from "papaya.js";

export default class GetForm extends PapayaRoute {
    path = "/form/[name]";
    callback = (request: Request, _x: any, _y: any, query) => {
        return new Promise((resolve) => {
            // query should be { name: value }
            render("form.pug", query).then((html) => {
                resolve(html);
            })
        })
    };
}