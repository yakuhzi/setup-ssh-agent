import * as core from '@actions/core'
import * as childProcess from 'child_process'
import fs from 'fs'

function run(): void {
  try {
    const sshDir = `${process.env.HOME}/.ssh`

    const publicKey = core.getInput('ssh-public-key')
    const privateKey = core.getInput('ssh-private-key')
    const algorithm = publicKey.split(' ')[0].split('-')[1]
    const privateFile = `${sshDir}/id_${algorithm}`
    const publicFile = `${sshDir}/id_${algorithm}.pub`

    fs.mkdirSync(`${sshDir}`, { recursive: true })
    fs.writeFileSync(publicFile, publicKey)
    fs.writeFileSync(privateFile, privateKey)
    fs.chmodSync(privateFile, '600')

    childProcess.execSync(
      'for ip in $(dig @8.8.8.8 github.com +short); do ssh-keyscan github.com,$ip; ' +
      'ssh-keyscan $ip; done 2>/dev/null >> ~/.ssh/known_hosts',
    )

    childProcess.execSync('eval "$(ssh-agent -s)"')
    childProcess.execSync(`ssh-add --apple-use-keychain ${privateFile}`)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      core.setFailed(`⚠️ Unexpected error: '${error}'`)
    }
  }
}

run()
