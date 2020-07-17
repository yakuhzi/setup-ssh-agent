import * as core from '@actions/core'
import * as childProcess from 'child_process'
import fs from 'fs'

function run(): void {
  try {
    const sshDir = `${process.env.HOME}/.ssh`
    const privateFile = `${sshDir}/id_rsa`
    const publicFile = `${sshDir}/id_rsa.pub`

    fs.mkdirSync(`${sshDir}`, { recursive: true })

    childProcess.execSync(
      'for ip in $(dig @8.8.8.8 github.com +short); do ssh-keyscan github.com,$ip; ' +
      'ssh-keyscan $ip; done 2>/dev/null >> ~/.ssh/known_hosts',
    )

    fs.writeFileSync(publicFile, process.env.INPUT_PUBLIC!)
    fs.writeFileSync(privateFile, process.env.INPUT_PRIVATE!)

    fs.chmodSync(privateFile, '600')

    childProcess.execSync('eval "$(ssh-agent -s)"')
    childProcess.execSync(`ssh-add -K ${sshDir}/id_rsa`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
