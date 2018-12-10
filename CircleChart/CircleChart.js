import CONFIG from './Config';
import Options from './Options';

export default class CircleChart {
  constructor(options = {}) {
    Options.setDatas(options);
    this.state = {};
  }

  start() {
    this.setState();
    this.setEvent();
    const donut = this.getDonut();
    this.state.target.innerHTML = '';
    this.state.target.appendChild(donut);
  }

  setState() {
    this.state = {
      data: Options.getData(),
      inner: {
        color: Options.getInnerColor(),
        diameter: Options.getInnerDiameter(),
        radius: Options.getInnerDiameter() / 2,
      },
      isContents: Options.getIsContents(),
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      isTouch: false,
      outer: {
        color: Options.getOuterColor(),
        diameter: Options.getOuterDiameter(),
        radius: Options.getOuterDiameter() / 2,
      },
      target: Options.getTarget(),
      areas: [],
      dividers: [],
    };
    this.state.centerRadius =
      this.state.inner.radius +
      (this.state.outer.radius - this.state.inner.radius) / 2;
  }

  setEvent() {
    if (this.state.isMobile) {
      this.state.target.addEventListener('touchstart', this.onStart.bind(this));
      document.addEventListener('touchmove', this.onMove.bind(this));
      document.addEventListener('touchend', this.onEnd.bind(this));
    } else {
      this.state.target.addEventListener('mouseover', this.onStart.bind(this));
      this.state.target.addEventListener('mouseout', this.onEnd.bind(this));
    }
  }

  addOnClass(e) {
    const x = this.state.isMobile ? e.changedTouches[0].clientX : e.clientX;
    const y = this.state.isMobile ? e.changedTouches[0].clientY : e.clientY;
    const target = document.elementFromPoint(x, y);
    if (
      target &&
      target.nodeName &&
      target.nodeName.toLowerCase() === 'area' &&
      target.getAttribute('area-number')
    ) {
      const number = target.getAttribute('area-number');
      for (let i = 0; i < this.state.dividers.length; i++) {
        if (this.state.dividers[i].getAttribute('divider-number') === number) {
          if (this.state.dividers[i].className.indexOf('on') === -1) {
            this.state.dividers[i].classList.add('on');
          }
        } else {
          if (this.state.dividers[i].className.indexOf('on') !== -1) {
            this.state.dividers[i].classList.remove('on');
          }
        }
      }
    }
  }

  onStart(e) {
    this.state.isTouch = true;
    if (this.state.isMobile) {
      e.preventDefault();
    }
    this.addOnClass(e);
  }

  onMove(e) {
    if (this.state.isTouch) {
      if (this.state.isMobile) {
        e.preventDefault();
      }
      this.addOnClass(e);
    }
  }

  onEnd() {
    this.state.isTouch = false;
    for (let i = 0; i < this.state.dividers.length; i++) {
      if (this.state.dividers[i].className.indexOf('on') !== -1) {
        this.state.dividers[i].classList.remove('on');
      }
    }
  }

  getSin(a, b) {
    return Math.sin((a * Math.PI) / 180) * b;
  }

  getCos(a, b) {
    return Math.cos((a * Math.PI) / 180) * b;
  }

  getArea(number, degree, startDegree) {
    const endDegree = degree + startDegree;
    const element = document.createElement('area');
    let coords = this.state.outer.radius + ',' + this.state.outer.radius;
    for (let i = startDegree; i < endDegree; i++) {
      const sin = this.getSin(i, this.state.outer.radius);
      const cos = this.getCos(i, this.state.outer.radius);
      const valueLeft = parseInt(this.state.outer.radius + sin);
      const valueTop = parseInt(this.state.outer.radius - cos);
      coords = coords + ',' + valueLeft + ',' + valueTop;
    }
    element.setAttribute('shape', 'poly');
    element.setAttribute('coords', coords);
    element.setAttribute('area-number', number);
    this.state.areas.push(element);
    return element;
  }

  getContents(data) {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.CONTENTS.CLASSNAME);
    Object.assign(element.style, CONFIG.CONTENTS.CSS);
    element.innerHTML = data.html || '';
    return element;
  }

  getDonut() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement('div');
    let transparentInner = this.getInner();

    element.setAttribute('class', CONFIG.DONUT.CLASSNAME);
    Object.assign(element.style, CONFIG.DONUT.CSS, {
      backgroundColor: this.state.outer.color,
      height: this.state.outer.diameter + 'px',
      width: this.state.outer.diameter + 'px',
    });
    Object.assign(transparentInner.style, {
      backgroundColor: 'transparent',
      zIndex: 8,
    });
    element.appendChild(this.getDivider());
    element.appendChild(this.getInner());
    element.appendChild(transparentInner);
    if (this.state.isContents) {
      element.appendChild(this.getImg());
      element.appendChild(this.getMap());
    }
    fragment.appendChild(element);
    return fragment.firstChild;
  }

  getGuideline() {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.GUIDELINE.CLASSNAME);
    Object.assign(element.style, CONFIG.GUIDELINE.CSS, {
      marginLeft: -(Options.getContentsMinWidth() / 2) + 'px',
      width: Options.getContentsMinWidth() + 'px',
    });
    return element;
  }

  getImg() {
    let element = document.createElement('img');
    element.setAttribute('usemap', '#' + Options.getId());
    element.setAttribute('src', CONFIG.IMG.SRC);
    Object.assign(element.style, CONFIG.IMG.CSS, {
      width: this.state.outer.diameter + 'px',
      height: this.state.outer.diameter + 'px',
    });
    return element;
  }

  getInner() {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.INNER.CLASSNAME);
    Object.assign(element.style, CONFIG.INNER.CSS, {
      backgroundColor: this.state.inner.color,
      height: this.state.inner.diameter + 'px',
      marginLeft: -this.state.inner.radius + 'px',
      marginTop: -this.state.inner.radius + 'px',
      width: this.state.inner.diameter + 'px',
    });
    return element;
  }

  getDivider() {
    let startDegree = 0;
    let fragment = document.createDocumentFragment();
    for (let i = 0, j = this.state.data.length; i < j; i++) {
      let element = document.createElement('div');
      element.setAttribute('divider-number', i);
      const degree = Math.round(this.state.data[i].percent * 3.6);
      const centerDegree = degree / 2 + startDegree;
      element.appendChild(this.getItems(i, startDegree, degree));
      if (this.state.isContents) {
        element.appendChild(this.getPoints(i, centerDegree));
      }
      startDegree = startDegree + degree;
      this.state.dividers.push(element);
      fragment.appendChild(element);
    }
    return fragment;
  }

  getItems(number, startDegree, degree) {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.ITEM.CLASSNAME);
    Object.assign(element.style, CONFIG.ITEM.CSS, {
      webkitTransform:
      'rotate(' + startDegree + 'deg) translateX(-50%) translateY(-50%)',
      transform:
      'rotate(' + startDegree + 'deg) translateX(-50%) translateY(-50%)',
    });
    const donutRight = this.getRight();
    donutRight.appendChild(this.getRightBox(this.state.data[number], degree));
    element.appendChild(donutRight);
    if (degree > 180) {
      const donutLeft = this.getLeft();
      donutLeft.appendChild(this.getLeftBox(this.state.data[number], degree));
      element.appendChild(donutLeft);
    }
    return element;
  }

  getPoints(number, centerDegree) {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.POINT.CLASSNAME);
    const sin = this.getSin(centerDegree, this.state.centerRadius);
    const cos = this.getCos(centerDegree, this.state.centerRadius);
    const pointLeftByCenter = Math.round(this.state.outer.radius + sin);
    const pointTopByCenter = Math.round(this.state.outer.radius - cos);
    Object.assign(element.style, CONFIG.POINT.CSS, {
      top: pointTopByCenter + 'px',
      left: pointLeftByCenter + 'px',
    });
    const guideline = this.getGuideline();
    const contents = this.getContents(this.state.data[number]);
    guideline.appendChild(contents);
    element.appendChild(guideline);
    return element;
  }

  getMap() {
    let element = document.createElement('map');
    element.setAttribute('name', Options.getId());
    element.setAttribute('id', Options.getId());
    let startDegree = 0;
    let areasFragment = document.createDocumentFragment();
    for (let i = 0; i < this.state.data.length; i++) {
      const degree = Math.round(this.state.data[i].percent * 3.6);
      const area = this.getArea(i, degree, startDegree);
      areasFragment.appendChild(area);
      startDegree = startDegree + degree;
    }
    element.appendChild(areasFragment);
    return element;
  }

  getRight() {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.RIGHT.CLASSNAME);
    Object.assign(element.style, CONFIG.RIGHT.CSS);
    return element;
  }

  getLeft() {
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.LEFT.CLASSNAME);
    Object.assign(element.style, CONFIG.LEFT.CSS);
    return element;
  }

  getRightBox(data, degree) {
    const rightBoxDegree = degree > 180 ? 180 : degree;
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.RIGHT_BOX.CLASSNAME);
    Object.assign(element.style, CONFIG.RIGHT_BOX.CSS, {
      backgroundColor: data.color,
      webkitTransform: 'rotate(' + rightBoxDegree + 'deg) translateZ(0)',
      transform: 'rotate(' + rightBoxDegree + 'deg) translateZ(0)',
    });
    return element;
  }

  getLeftBox(data, degree) {
    const leftBoxDegree = degree > 180 ? degree : 180;
    let element = document.createElement('div');
    element.setAttribute('class', CONFIG.LEFT_BOX.CLASSNAME);
    Object.assign(element.style, CONFIG.LEFT_BOX.CSS, {
      backgroundColor: data.color,
      webkitTransform: 'rotate(' + leftBoxDegree + 'deg) translateZ(0)',
      transform: 'rotate(' + leftBoxDegree + 'deg) translateZ(0)',
    });
    return element;
  }

  // todo : createElement
  // getElement(tagname, attribute, stylesheet) {
  //   const element = document.createElement(tagname);
  //   if (attribute) {
  //     const keys = Object.keys(attribute);
  //     for (let i = 0; i < keys.length; i++) {
  //       element.setAttribute(keys[i], attribute[keys[i]]);
  //     }
  //   }
  //   if (stylesheet) {
  //     console.log(stylesheet);
  //     for (let j = 0; j < stylesheet.length; j++) {
  //       Object.assign(element.style, stylesheet[j]);
  //     }
  //   }
  //   return element;
  // }
}
