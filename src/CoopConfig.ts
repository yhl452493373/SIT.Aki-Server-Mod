import fs from "fs";
import path from "path";

export class CoopConfig {
    public webSocketPort: number;
    public natHelperPort: number;
    public useUPNP: boolean;
    public useMessageWSUrlOverride: boolean;
    public messageWSUrlOverride: string;

    public static Instance: CoopConfig;

    constructor() {
        this.webSocketPort = 6970;
        this.natHelperPort = 6971;
        this.useUPNP = true;
        this.useMessageWSUrlOverride = false;
        this.messageWSUrlOverride = '127.0.0.1:6969';

        const configFilePath = path.join(__dirname, "..", "config");
        if(!fs.existsSync(configFilePath))
            fs.mkdirSync(configFilePath, { recursive: true });

        console.log(`COOP MOD: Coop Config Loading >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
        var coopConfigFilePath = path.join(configFilePath, "coopConfig.json");
        // console.log(coopConfigFilePath);
        if(!fs.existsSync(coopConfigFilePath)) {
            console.warn(`Coop Config doesn't exist, creating default config.`);
            //console.warn(`BE AWARE! ExternalIPFinder is ACTIVE! The externalIP config value is ignored!`);
            const coopcfgString = JSON.stringify(this, null, 4);
            fs.writeFileSync(coopConfigFilePath, coopcfgString);
        }
        else {
            Object.assign(this, JSON.parse(fs.readFileSync(coopConfigFilePath).toString()))
            console.log(`COOP MOD: Coop Config loaded.`);
            /*
            if(this.useExternalIPFinder) {
                console.log(`COOP MOD: BE AWARE! ExternalIPFinder is ACTIVE!`);
            }
            */
        }
        // console.log(this);

        CoopConfig.Instance = this;
    }

}
