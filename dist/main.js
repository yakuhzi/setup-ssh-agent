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
        const sshDir = `${process.env.HOME}/.ssh`;
        const privateFile = `${sshDir}/id_rsa`;
        const publicFile = `${sshDir}/id_rsa.pub`;
        fs_1.default.mkdirSync(`${sshDir}`, { recursive: true });
        fs_1.default.writeFileSync(`${sshDir}/known_hosts`, 'github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0' +
            'yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpX' +
            'LmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEA' +
            'vGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n');
        fs_1.default.writeFileSync(publicFile, process.env.INPUT_PUBLIC);
        fs_1.default.writeFileSync(privateFile, process.env.INPUT_PRIVATE);
        fs_1.default.chmodSync(privateFile, '600');
        child_process_1.default.execSync('eval "$(ssh-agent -s)"');
        child_process_1.default.execSync(`ssh-add -K ${sshDir}/id_rsa`);
    }
    catch (error) {
        console.log(error);
        core_1.setFailed(error.message);
    }
}
//# sourceMappingURL=main.js.map