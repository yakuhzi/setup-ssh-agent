import { setFailed } from '@actions/core/lib/core'
import child_process from 'child_process'
import fs from 'fs'

run()

function run(): void {
  try {
    const sshDir = `${process.env.HOME}/.ssh`
    const privateFile = `${sshDir}/id_rsa`
    const publicFile = `${sshDir}/id_rsa.pub`

    fs.mkdirSync(`${sshDir}`, { recursive: true})

    fs.writeFileSync(`${sshDir}/config`, 'Host Github\n' +
      '    HostName github.com\n' +
      '    User git\n' +
      `    IdentityFile ${sshDir}/id_rsa`
    )

    fs.writeFileSync(
      `${sshDir}/known_hosts`,
      'github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0' +
        'yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpX' +
        'LmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEA' +
        'vGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n'
    )

    fs.writeFileSync(publicFile, process.env.INPUT_PUBLIC)
    fs.writeFileSync(privateFile, process.env.INPUT_PRIVATE)

    fs.chmodSync(privateFile, '600')

    child_process.execSync('eval "$(ssh-agent -s)"')
    child_process.execSync(`ssh-add -K ${sshDir}/id_rsa`)
  } catch (error) {
    console.log(error)
    setFailed(error.message)
  }
}
