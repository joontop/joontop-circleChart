class Options {
  constructor() {
    this.options = {
      contentsMinWidth: 100,
      data: [],
      outerDiameter: '500',
      innerDiameter: '200',
      outerColor: '#ffffff',
      innerColor: '#ffffff',
      isContents: false,
      isDesc: false,
      target: null,
    };
  }
  setDatas(datas) {
    Object.assign(this.options, datas);
    if (this.options.isDesc) {
      this.options.data.sort(function(a, b) {
        if (a.percent > b.percent) {
          return -1;
        }
        if (a.percent < b.percent) {
          return 1;
        }
        return 0;
      });
    }
    if (this.options.contentsMinWidth <= 100) {
      this.options.contentsMinWidth = 100;
    }
  }
  getContentsMinWidth() {
    return this.options.contentsMinWidth;
  }
  getData() {
    return this.options.data;
  }
  getOuterColor() {
    return this.options.outerColor;
  }
  getInnerColor() {
    return this.options.innerColor;
  }
  getOuterDiameter() {
    return this.options.outerDiameter;
  }
  getInnerDiameter() {
    return this.options.innerDiameter;
  }
  getIsContents() {
    return this.options.isContents;
  }
  getTarget() {
    return this.options.target;
  }
}
export default new Options();
