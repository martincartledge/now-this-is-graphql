`/podracers/<id>`

- Takes `id` field as argument
- Returns an `Array` of `podracers`

```json
{
  "podracers": [
    {
      "name": "Anakin Skywalker",
      "location": "tattooine",
      "species": "human",
      "height": "172",
      "mass": "77"
    }
  ]
}
```

`/podracers/<id>/wins`

- Takes `id` field as argument
- Returns an `Array` of `podrace_wins` for a `podracer`

```json
{
  "podrace_wins": [
    "Malastare 100",
    "The Boonta Classic",
    "Sunken City",
    "Baroo Coast"
  ]
}
```

`/podracers/<id>/stats`

- Takes `id` field as argument
- Returns an `Array` of `podrace_stats` for a `podracer`

```json
{
  "podrace_stats": {
    "podracer_length": "11",
    "podracer_top_speed": "254",
    "podracer_average_fuel": "18"
  }
}
```
