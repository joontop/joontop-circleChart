# joontop-circleChart

## Usage

```js
import CircleChart from 'joontop-circlechart';

let start = function() {
  let options = {
    data: [
      {
        color: '#336699',
        html: '<div class="test_contents">Love</div><p class="percent">9%</p>',
        percent: 9,
      },
      {
        color: '#4477aa',
        html: '<div class="test_contents">Passion</div>',
        percent: 16,
      },
      {
        color: '#5588bb',
        html: '<div class="test_contents">Envy</div>',
        percent: 25,
      },
      {
        color: '#6699cc',
        html: '<div class="test_contents">Good</div>',
        percent: 32,
      },
      {
        color: '#77aadd',
        html: '<div class="test_contents">Good</div>',
        percent: 8,
      },
      {
        color: '#88bbee',
        html: '<div class="test_contents">Bad</div>',
        percent: 5,
      },
      {
        color: '#99ccff',
        html: '<div class="test_contents">Sad</div>',
        percent: 5,
      },
    ],
    outerDiameter: 300,
    innerDiameter: 150,
    outerColor: '#99ccff',
    innerColor: '#ffffff',
    isContents: true,
    isDesc: true,
    contentsMinWidth: 150,
    target: document.querySelector('#donutTest'),
  };
  const circleChart = new CircleChart(options);
  circleChart.start();
};
start();
```

## License

Copyright (c) 2018 Joontop &lt;zoontop@naver.com&gt;

