import { parseMatter } from './parse-matter';
import { vi } from "vitest";

const exampleWithoutTags = `# Frontmatter

Example data
`

const exampleSingleTags = `some-boolean: true
some-number: 42
some-array:
  - one
  - two
  - three
some-string: "string"
---

# Frontmatter

Example data
`

const exampleTwoTags = `---
some-boolean: true
some-number: 42
some-array:
  - one
  - two
  - three
some-string: "string"
---

# Frontmatter

Example data
`

const exampleWithDividerInTheContent = `---
some-boolean: true
some-number: 42
some-array:
  - one
  - two
  - three
some-string: "string"
---

# Frontmatter

Example data

---

This was a divider in the content!
`

const exampleInvalidFrontmatter = `---
# We do crazy things.

We don't have a frontmatter.

---

# Frontmatter

Example data

---

This was a divider in the content!
`

describe('parseMatter', () => {
  it('should work without frontmatter', () => {
    expect(parseMatter(exampleWithoutTags)).toMatchInlineSnapshot(`
      {
        "content": "# Frontmatter

      Example data
      ",
      }
    `);
  });

  it('should work with a single frontmatter tag', () => {
    expect(parseMatter(exampleSingleTags)).toMatchInlineSnapshot(`
      {
        "content": "# Frontmatter

      Example data",
        "data": {
          "some-array": [
            "one",
            "two",
            "three",
          ],
          "some-boolean": true,
          "some-number": 42,
          "some-string": "string",
        },
      }
    `);
  });

  it('should work with two frontmatter tags', () => {
    expect(parseMatter(exampleTwoTags)).toMatchInlineSnapshot(`
      {
        "content": "# Frontmatter

      Example data",
        "data": {
          "some-array": [
            "one",
            "two",
            "three",
          ],
          "some-boolean": true,
          "some-number": 42,
          "some-string": "string",
        },
      }
    `);
  });

  it('should work with two frontmatter tags and one divider in the content', () => {
    expect(parseMatter(exampleWithDividerInTheContent)).toMatchInlineSnapshot(`
      {
        "content": "# Frontmatter

      Example data

      ---

      This was a divider in the content!",
        "data": {
          "some-array": [
            "one",
            "two",
            "three",
          ],
          "some-boolean": true,
          "some-number": 42,
          "some-string": "string",
        },
      }
    `);
  });

  it('should return the original markdown, when the frontmatter cannot be parsed', () => {
    const consoleErrorMock = vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(parseMatter(exampleInvalidFrontmatter, { schema: 'json' })).toMatchInlineSnapshot(`
      {
        "content": "---
      # We do crazy things.

      We don't have a frontmatter.

      ---

      # Frontmatter

      Example data

      ---

      This was a divider in the content!
      ",
      }
    `);
    expect(consoleErrorMock).toHaveBeenCalledWith("Couldn't parse frontmatter.");
  });
});
