`getAllPodracers`

- `Query`
- Takes no arguments
- Returns _all_ `Podracer` values

```
query {
  getAllPodracers {
    name
    location
  }
}
```

`getAllPodracers` response

```json
{
  "getAllPodracers": [
    {
      "name": "Anakin Skywalker",
      "location": "tattooine"
    },
    {
      "name": "Sebulba",
      "location": "malastare"
    },
    {
      "name": "Ben Quadinaros",
      "location": "tund system"
    },
    {
      "name": "Ratts Tyerell",
      "location": "aleen"
    },
    {
      "name": "Ody Mandrell",
      "location": "tattooine"
    },
    {
      "name": "Teemto Pagalies",
      "location": "moonus mandel"
    },
    {
      "name": "Mawhonic",
      "location": "hok"
    }
  ]
}
```

`getSinglePodracer`

- `Query`
- Takes `id` field as argument
- Returns a single `Podracer` value

```
query {
  getSinglePodracer(id: "2") {
    name
    location
    height
    mass
    podrace_wins {
      title
    }
    podracer_stats {
      length
      top_speed
      average_fuel
    }
  }
}
```

`getSinglePodracer` response

```json
{
  "getSinglePodracer": {
    "name": "Anakin Skywalker",
    "location": "tattooine",
    "height": "172",
    "mass": "77",
    "podrace_wins": [{ "title": "The Boonta Classic" }],
    "podrace_stats": {
      "length": "8",
      "top_speed": "276",
      "average_fuel": "29"
    }
  }
}
```

`createPodracer`

- `Mutation`
- Creates a new `podracer`
- Returns `id`, `name`, and `location` field value from created `Podracer`

```
mutation {
  createPodracer(id: "8", name: "Martin Cartledge", location: "erie, co") {
    id
    name
    location
  }
}
```

`createPodracer` response

```json
{
  "createPodracer": {
    "id": "8",
    "name": "Martin Cartledge",
    "location": "erie"
  }
}
```
