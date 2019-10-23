# Action SSH Agent

A Github Action that registers a SSH key in the SSH Agent.

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