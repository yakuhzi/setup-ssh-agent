# Action SSH Agent

A GitHub Action that starts the ssh agent with the provided ssh keys and adds github.com to the known hosts.

Usage
-------
Here is an example how to use this action:

```yaml  
- name: Set up ssh-agent
  uses: yakuhzi/action-release@v1
  with:
    public: ${{ secrets.SSH_PUBLIC_KEY }}
    private: ${{ secrets.SSH_PRIVATE_KEY }}
```