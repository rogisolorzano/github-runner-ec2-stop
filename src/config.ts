import { getInput } from '@actions/core';

const required = (value: string): string => {
  if (value === '') {
    throw new Error(`Required action input ${value} was empty.`);
  }
  return value;
};

const optional = (value: string): string | undefined => (value === '' ? undefined : value);
const optionalNumber = (value: string): number | undefined => (value === '' ? undefined : Number(value));

export const config = {
  githubToken: required(getInput('github-token')),
  runnerLabel: required(getInput('runner-label')),
  instanceId: required(getInput('instance-id')),
  cleanupTagName: optional(getInput('cleanup-tag-name')),
  cleanupTagValue: optional(getInput('cleanup-tag-value')),
  cleanupOlderThanHours: optionalNumber(getInput('cleanup-older-than-hours')) ?? 1,
  region: optional(getInput('region')) ?? 'us-east-1',
} as const;
