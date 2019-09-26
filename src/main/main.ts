import { setFailed } from '@actions/core/lib/core'
import child_process from 'child_process'
import fs from 'fs'

run()

function run(): void {
  try {
    const sshDir = `${process.env.HOME}/Desktop/ssh`
    const privateFile = `${sshDir}/id_rsa`
    const publicFile = `${sshDir}/id_rsa.pub`

    fs.mkdirSync(`${sshDir}`, { recursive: true})

    fs.writeFileSync(privateFile, process.env.INPUT_PRIVATE)
    fs.writeFileSync(publicFile, process.env.INPUT_PUBLIC)

    fs.chmodSync(privateFile, '600')

    child_process.execSync(`ssh-add -K ${sshDir}/id_rsa`)
    child_process.execSync('eval "$(ssh-agent -s)"')
  } catch (error) {
    console.log(error)
    setFailed(error.message)
  }
}
