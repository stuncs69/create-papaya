import { PapayaRoute, getPostBody } from "papaya.js";

export default class ExamplePostRoute extends PapayaRoute {
    path = "/api/example"
    callback = (req: any) => {
        return new Promise((resolve, reject) => {
            getPostBody(req).then((body: any) => {
                resolve(JSON.stringify(body))
            })
        })
    };
}