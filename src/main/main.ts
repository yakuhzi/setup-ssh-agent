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

    fs.writeFileSync(`${sshDir}/config`, 'Host *\n' +
      '    StrictHostKeyChecking no\n' +
      '    UserKnownHostsFile=/dev/null\n'
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
