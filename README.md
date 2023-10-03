# Setup SSH Agent

A GitHub Action that starts the ssh-agent with the provided SSH keys and adds github.com to the known hosts.

Usage
-------
Here is an example how to use this action:

```yaml
- name: Set up ssh-agent
  uses: yakuhzi/setup-ssh-agent@v2
  with:
    ssh-public-key: ${{ secrets.SSH_PUBLIC_KEY }}
    ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
```
