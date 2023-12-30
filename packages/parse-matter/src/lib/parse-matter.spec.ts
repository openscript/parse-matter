import { parseMatter } from './parse-matter';

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

describe('parseMatter', () => {
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
});
