---
title: "Shortcodes"
date: "2024-04-26"
toc: true
---

## Admonition

{{< admonition type=note >}} A **note** banner {{< /admonition >}}

{{< admonition type="info" >}} An **info** banner {{< /admonition >}}

{{< admonition type="tip" >}} A **tip** banner {{< /admonition >}}

{{< admonition type="success" >}} A **success** banner {{< /admonition >}}

{{< admonition type="warning" >}} A **warning** banner {{< /admonition >}}

{{< admonition type="error" >}} An **error** banner {{< /admonition >}}

{{< admonition type="example" >}} An **example** banner {{< /admonition >}}

The `admonition` shortcode has the following named parameters:

- **type** _\[optional\]_\
  The type of the `admonition`, default value is `info`.
- **title** _\[optional\]_\
  title of the `admonition` banner, default value is the value of the **type** parameter.

Example `admonition` input:

```markdown
{{</* admonition type=success title="This has been a great success" */>}}

This was a triumph

{{</* /admonition */>}}
```

{{< admonition type=success title="This has been a great success" >}} This was a
triumph {{< /admonition>}}
