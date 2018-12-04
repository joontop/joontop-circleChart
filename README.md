# joontop-circleChart

## Usage

```js
import CircleChart from 'joontop-circlechart';

let start = function() {
  let options = {
    data: [
      {
        color: '#336699', // 색상
        html: '<div class="txt1">blahblah</div>', // 보여줄 텍스트를 HTML로
        percent: 30, // 합이 100 이 되도록
      },
      {
        color: '#4477aa',
        html: '<p class="txt2">blahblah</p>',
        percent: 20,
      },
      {
        color: '#5588bb',
        html: '',
        percent: 50,
      },
    ],
    outerDiameter: 300, // 실제 도넛의 width,height
    innerDiameter: 150, // 안쪽원의 크기,  0이면 없음
    outerColor: '#99ccff', // 도넛의 기본 색상
    innerColor: '#ffffff', // 안쪽원의 색상
    isContents: true, // 텍스트의 유무
    isDesc: true, // 가장 큰 percent 부터 시계방향 표시
    contentsMinWidth: 150, // 표시되는 텍스트영역의 최소값
    target: document.querySelector('#donutTest'), // chart 가 들어갈 영역지정
  };
  const circleChart = new CircleChart(options);
  circleChart.start();
};
start();
```

## Sample URL
https://joontop.github.io/joontop-circleChart/sample/

## License

