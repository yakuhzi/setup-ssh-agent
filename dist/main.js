"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const childProcess = __importStar(require("child_process"));
const fs_1 = __importDefault(require("fs"));
function run() {
    try {
        const sshDir = `${process.env.HOME}/.ssh`;
        const privateFile = `${sshDir}/id_rsa`;
        const publicFile = `${sshDir}/id_rsa.pub`;
        fs_1.default.mkdirSync(`${sshDir}`, { recursive: true });
        childProcess.execSync('for ip in $(dig @8.8.8.8 github.com +short); do ssh-keyscan github.com,$ip; ' +
            'ssh-keyscan $ip; done 2>/dev/null >> ~/.ssh/known_hosts');
        fs_1.default.writeFileSync(publicFile, process.env.INPUT_PUBLIC);
        fs_1.default.writeFileSync(privateFile, process.env.INPUT_PRIVATE);
        fs_1.default.chmodSync(privateFile, '600');
        childProcess.execSync('eval "$(ssh-agent -s)"');
        childProcess.execSync(`ssh-add -K ${sshDir}/id_rsa`);
    }
    catch (error) {
        core_1.default.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=main.js.map