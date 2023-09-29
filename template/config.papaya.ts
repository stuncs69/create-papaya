import { PapayaConfig } from "papaya.js"

export default class Config extends PapayaConfig {
    configuration = {
        dynamicPublics: true,
        allowClasses: true,
        port: 3000,
    }
    logic() {
        console.log("Config loaded!")
    }
}