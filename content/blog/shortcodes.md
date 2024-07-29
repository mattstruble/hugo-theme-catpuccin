---
title: "Shortcodes"
date: "2024-04-26"
description: "Examples of available shortcodes"
toc: true
tags :
    - "markdown"
    - "css"
    - "html"
    - "ifixit-example"

categories :
    - "themes"
    - "syntax"

series:
  - "Themes Guide"
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
  The type of the `admonition`, default value is `note`.
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

## Center Quote

{{< center-quote >}} Test quote {{< /center-quote >}}

```markdown
{{</* center-quote */>}} Test quote {{</* /center-quote */>}}
```
## Mermaid

The `mermaid` shortcode supports diagrams in Hugo with the [Mermaid](https://mermaid.js.org/) library.

**Mermaid** is a library to help generate diagrams and flowcharts from text, in a similar manner as Markdown.

Just insert your mermaid code in the `mermaid` shortcode and that's it.

### Flowchart

```markdown
{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}
```

{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

### Sequence Diagram

```markdown
{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}
```
{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

### Class Diagram

```markdown
{{< mermaid >}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
{{< /mermaid >}}
```

{{< mermaid >}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
{{< /mermaid >}}

### State Diagram

```markdown
{{< mermaid >}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}
```
{{< mermaid >}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}

### Entity Relationship Diagram
```markdown
{{< mermaid >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}
```

{{< mermaid >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}


### User Journey

```markdown
{{< mermaid >}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{< /mermaid >}}
```

{{< mermaid >}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{< /mermaid >}}

### Gantt

```markdown
{{< mermaid >}}
gantt
dateFormat YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,   des1, 2014-01-06,2014-01-08
Active task               :active, des2, 2014-01-09, 3d
Future task               :        des3, after des2, 5d
Future task2              :        des4, after des3, 5d
{{< /mermaid >}}
```

{{< mermaid >}}
gantt
dateFormat YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,   des1, 2014-01-06,2014-01-08
Active task               :active, des2, 2014-01-09, 3d
Future task               :        des3, after des2, 5d
Future task2              :        des4, after des3, 5d
{{< /mermaid >}}

### Pie chart

```markdown
{{< mermaid >}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}
```

{{< mermaid >}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}

### Requirement Diagram

```markdown
{{< mermaid >}}
requirementDiagram

requirement test_req {
id: 1
text: the test text.
risk: high
verifymethod: test
}

element test_entity {
type: simulation
}

test_entity - satisfies -> test_req
{{< /mermaid >}}
```

{{< mermaid >}}
requirementDiagram

requirement test_req {
id: 1
text: the test text.
risk: high
verifymethod: test
}

element test_entity {
type: simulation
}

test_entity - satisfies -> test_req
{{< /mermaid >}}

### Git Graph

```markdown
{{< mermaid >}}
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
{{< /mermaid >}}
```

{{< mermaid >}}
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
{{< /mermaid >}}
