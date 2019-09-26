import { setFailed } from '@actions/core/lib/core'
import child_process from 'child_process'

run()

function run(): void {
  try {
    child_process.execSync(`echo "${process.env.INPUT_SSH_PRIVATE_KEY}" > ~/.ssh/id_rsa`)
    child_process.execSync(`echo "${process.env.INPUT_SSH_PUBLIC_KEY}" > ~/.ssh/id_rsa.pub`)
    child_process.execSync('chmod 600 ~/.ssh/id_rsa')
    child_process.execSync('chmod 600 ~/.ssh/id_rsa.pub')
    child_process.execSync('ssh-add -K ~/.ssh/id_rsa')
  } catch (error) {
    console.log(error)
    setFailed(error.message)
  }
}
