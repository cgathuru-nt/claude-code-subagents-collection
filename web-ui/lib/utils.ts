import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { type Subagent } from "./subagents-types"
import { type Command } from "./commands-types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSubagentMarkdown(subagent: Subagent): string {
  const frontmatter = [
    '---',
    `name: ${subagent.name}`,
    `description: ${subagent.description}`
  ]
  
  if (subagent.tools) {
    frontmatter.push(`tools: ${subagent.tools}`)
  }
  
  if (subagent.category) {
    frontmatter.push(`category: ${subagent.category}`)
  }
  
  frontmatter.push('---', '')
  
  return frontmatter.join('\n') + subagent.content
}

export function generateCommandMarkdown(command: Command): string {
  const frontmatter = [
    '---',
    `description: ${command.description}`,
    `category: ${command.category}`
  ]
  
  if (command.argumentHint) {
    frontmatter.push(`argument-hint: ${command.argumentHint}`)
  }
  
  if (command.allowedTools) {
    frontmatter.push(`allowed-tools: ${command.allowedTools}`)
  }
  
  if (command.model) {
    frontmatter.push(`model: ${command.model}`)
  }
  
  frontmatter.push('---', '')
  
  return frontmatter.join('\n') + command.content
}