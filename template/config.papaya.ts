import { PapayaConfig } from "papaya.js";

export default class Config extends PapayaConfig {
    configuration = {
        dynamicPublics: false,
        port: 3000,
        allowClasses: true,
    }
}