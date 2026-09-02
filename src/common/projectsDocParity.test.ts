// tsconfig.app.json pins `types` to vite/client so Node globals stay out of browser code.
// This test genuinely needs the filesystem, so pull the Node types in for this file only.
/// <reference types="node" />
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, it, expect } from 'vitest'
import { PROJECTS } from './constants'

/**
 * PROJECTS drives what renders; GITHUB-REPOS-AND-DEMOS.md is the written record of the same
 * set. They drifted once — claude-handbook was documented but missing from PROJECTS, so it
 * never appeared on the site, and two automation repos were the reverse. Nothing caught it
 * because nothing was comparing them.
 */

const DOC_PATH = resolve(__dirname, '../../GITHUB-REPOS-AND-DEMOS.md')
const REPO_URL = /github\.com\/girijashankarj\/([A-Za-z0-9_.-]+)/

/** Repo slugs listed in the two repository tables, before the "Live demos" section. */
function docSlugs(): string[] {
  const doc = readFileSync(DOC_PATH, 'utf8')
  const tables = doc.split('## 2. Live demos')[0]
  return tables
    .split('\n')
    .filter((line) => line.startsWith('| ') && line.includes('github.com/girijashankarj/'))
    .map((line) => line.match(REPO_URL)?.[1])
    .filter((slug): slug is string => Boolean(slug))
}

function codeSlugs(): string[] {
  return PROJECTS.map((project) => project.url.match(REPO_URL)?.[1]).filter(
    (slug): slug is string => Boolean(slug),
  )
}

function statedCount(): number {
  const doc = readFileSync(DOC_PATH, 'utf8')
  return Number(doc.match(/Portfolio project count: (\d+)/)?.[1])
}

describe('PROJECTS and GITHUB-REPOS-AND-DEMOS.md stay in sync', () => {
  it('documents every project that is in the code', () => {
    const missing = codeSlugs().filter((slug) => !docSlugs().includes(slug))
    expect(missing, `add these to GITHUB-REPOS-AND-DEMOS.md: ${missing.join(', ')}`).toEqual([])
  })

  it('does not document a project that is absent from the code', () => {
    const extra = docSlugs().filter((slug) => !codeSlugs().includes(slug))
    expect(
      extra,
      `these are in the doc but will never render: ${extra.join(', ')}`,
    ).toEqual([])
  })

  it('states a project count matching the code', () => {
    expect(statedCount()).toBe(PROJECTS.length)
  })

  it('lists each repo exactly once in the doc', () => {
    const seen = docSlugs()
    const duplicates = seen.filter((slug, i) => seen.indexOf(slug) !== i)
    expect(duplicates, `duplicated rows: ${duplicates.join(', ')}`).toEqual([])
  })

  it('gives every project a unique id', () => {
    const ids = PROJECTS.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
