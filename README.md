# Charts

CSS only charts library builded with [Angular](https://angular.io) and [Nx](https://nx.dev)

## Usage

Simple line chart

`<lib-line-chart [points]="pointsArray"></lib-line-chart>`

Data type:

```javascript
point<T> {
  value: number
  time: T
}
```


Multi line chart

`<lib-multi-line-chart [data]="linesArray"></lib-multi-line-chart>`

Data type:

```javascript
line {
    label: string;
    lineType: 'normal' | 'dashed' | 'points';
    valueType: 'numbers' | 'percents';
    items: {
        x: number;
        y: number;
    }[]
}
```
