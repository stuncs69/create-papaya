import { PapayaRoute, extractGetParameters, renderEJS } from "papaya.js";

export default class GetForm extends PapayaRoute {
    path = "/form";
    callback = (request: Request) => {
        return new Promise((resolve) => {
            let getParams = extractGetParameters(request);
            console.log(getParams);
            renderEJS("form.ejs", getParams).then((html) => {
                resolve(html);
            })
        })
    };
}