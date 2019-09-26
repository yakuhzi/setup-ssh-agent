"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core/lib/core");
const child_process_1 = __importDefault(require("child_process"));
run();
function run() {
    try {
        child_process_1.default.execSync(`echo "${process.env.INPUT_PRIVATE}" > ~/.ssh/id_rsa`);
        child_process_1.default.execSync(`echo "${process.env.INPUT_PUBLIC}" > ~/.ssh/id_rsa.pub`);
        child_process_1.default.execSync('chmod 600 ~/.ssh/id_rsa');
        child_process_1.default.execSync('chmod 600 ~/.ssh/id_rsa.pub');
        child_process_1.default.execSync('ssh-add -K ~/.ssh/id_rsa');
    }
    catch (error) {
        console.log(error);
        core_1.setFailed(error.message);
    }
}
//# sourceMappingURL=main.js.map