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
      id: null,
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
    let id = Math.random().toString(36).substring(7);
    this.options.id = '__mapid_' + id;
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
  getId() {
    return this.options.id;
  }
}
export default new Options();
