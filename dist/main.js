"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core/lib/core");
const child_process_1 = __importDefault(require("child_process"));
const fs_1 = __importDefault(require("fs"));
run();
function run() {
    try {
        const sshDir = `${process.env.HOME}/Desktop/ssh`;
        const privateFile = `${sshDir}/id_rsa`;
        const publicFile = `${sshDir}/id_rsa.pub`;
        fs_1.default.mkdirSync(`${sshDir}`, { recursive: true });
        fs_1.default.writeFileSync(privateFile, process.env.INPUT_PRIVATE);
        fs_1.default.writeFileSync(publicFile, process.env.INPUT_PUBLIC);
        fs_1.default.chmodSync(privateFile, '600');
        child_process_1.default.execSync(`ssh-add -K ${sshDir}/id_rsa`);
        child_process_1.default.execSync('eval "$(ssh-agent -s)"');
    }
    catch (error) {
        console.log(error);
        core_1.setFailed(error.message);
    }
}
//# sourceMappingURL=main.js.map