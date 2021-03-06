## API

```html
<o-timeline>
  <o-timeline-item>step1 2015-09-01</o-timeline-item>
  <o-timeline-item>step2 2015-09-01</o-timeline-item>
  <o-timeline-item>step3 2015-09-01</o-timeline-item>
  <o-timeline-item>step4 2015-09-01</o-timeline-item>
</o-timeline>
```

### Timeline

Timeline

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| pending | Set the last ghost node's existence or its content | boolean\|string\|slot | `false` |
| pendingDot | Set the dot of the last ghost node when pending is true | string\|slot | `<Icon type="loading" />` |
| reverse | reverse nodes or not | boolean | false |
| mode | By sending `alternate` the timeline will distribute the nodes to the left and right. | `left` \| `alternate` \| `right` | `left` |

### Timeline.Item

Node of timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | Set the circle's color to `blue`, `red`, `green` or other custom colors | string | `blue` |  |
| dot | Customize timeline dot | string\|slot | - |  |
| position | Customize node position | `left` \| `right` | - | 1.5.0 |
