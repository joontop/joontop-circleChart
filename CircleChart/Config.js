export default {
  DONUT: {
    CSS: {
      position: 'relative',
      width: '500px',
      height: '500px',
      webkitBorderRadius: '50%',
      borderRadius: '50%',
      webkitBoxSizing: 'border-box',
      boxSizing: 'border-box',
    },
    CLASSNAME: '__donut',
  },
  CONTENTS: {
    CSS: {
      display: 'inline-block',
      verticalAlign: 'top',
      wordWrap: 'break-word',
      wordBreak: 'break-all',
    },
    CLASSNAME: '__contents_html',
  },
  GUIDELINE: {
    CSS: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      webkitTransform: 'translateY(-50%)',
      transform: 'translateY(-50%)',
      textAlign: 'center',
    },
    CLASSNAME: '__contents_guideline',
  },
  IMG: {
    CSS: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 7,
    },
    USEMAP_ID: 'imageMap',
    SRC:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI3MDI0NTFFQkEwMTFFODgzRjdGMzk5QjUwNEE0OUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI3MDI0NTJFQkEwMTFFODgzRjdGMzk5QjUwNEE0OUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjcwMjQ0RkVCQTAxMUU4ODNGN0YzOTlCNTA0QTQ5RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjcwMjQ1MEVCQTAxMUU4ODNGN0YzOTlCNTA0QTQ5RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlaHZYIAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC',
  },
  INNER: {
    CSS: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 5,
      webkitBorderRadius: '50%',
      borderRadius: '50%',
      webkitBoxSizing: 'border-box',
      boxSizing: 'border-box',
    },
    CLASSNAME: '__inner_circle',
  },
  ITEM: {
    CSS: {
      overflow: 'hidden',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      webkitBorderRadius: '50%',
      borderRadius: '50%',
      webkitTransformOrigin: '0 0',
      transformOrigin: '0 0',
      backgroundColor: 'eee',
    },
    CLASSNAME: '__item',
  },
  RIGHT: {
    CSS: {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '50%',
      height: '100%',
    },
    CLASSNAME: '__right',
  },
  LEFT: {
    CSS: {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
    },
    CLASSNAME: '__left',
  },
  RIGHT_BOX: {
    CSS: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      webkitTransformOrigin: '100% 50%',
      transformOrigin: '100% 50%',
      webkitTransform: 'rotate(0deg)',
      transform: 'rotate(0deg)',
    },
    CLASSNAME: '__right_box',
  },
  LEFT_BOX: {
    CSS: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      webkitTransformOrigin: '100% 50%',
      transformOrigin: '100% 50%',
      webkitTransform: 'rotate(180deg)',
      transform: 'rotate(180deg)',
    },
    CLASSNAME: '__left_box',
  },
  POINT: {
    CSS: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      zIndex: 6,
    },
    CLASSNAME: '__contents_point',
  },
};
