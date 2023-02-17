# Github Runner EC2 Stop

Github action to clean up a self-hosted runner from github and terminate an EC2 instance.

- AWS SDK V3 :white_check_mark:
- Supports cleaning up dangling EC2 instances with a tag name and value :white_check_mark:

Used in conjuction with [github-runner-ec2-start](https://github.com/rogisolorzano/github-runner-ec2-start) which starts the runners.

## Using in your workflow

Example usage including all optional params:

```
- name: Run EC2 Stop
  uses: rogisolorzano/github-runner-ec2-stop@v1
  with:
    github-token: ${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}
    runner-label: ${{ needs.start-runner.outputs.runner-label }}
    instance-id: ${{ needs.start-runner.outputs.instance-id }}
    cleanup-tag-name: StartedBy
    cleanup-tag-value: GithubRunnerEC2Start
    cleanup-older-than-hours: 1
```

See [these example workflows](https://github.com/rogisolorzano/github-runner-ec2-start/tree/main/examples) for a complete example.

See `action.yml` for more info on the inputs this workflow supports.
