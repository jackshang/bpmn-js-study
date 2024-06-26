import inherits from 'inherits-browser';

import Modeler from 'bpmn-js/lib/Modeler';

import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll';
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';

import CustomLoggingModule from './features/logging';


/**
 * A viewer that includes mouse navigation and other goodies.
 *
 * @param {Object} options
 */
export default function CustomModeler(options) {
  Modeler.call(this, options);
}

inherits(CustomModeler, Modeler);

CustomModeler.prototype._customModules = [
  ZoomScrollModule,
  MoveCanvasModule,
  CustomLoggingModule
];

CustomModeler.prototype._modules = [].concat(
  Modeler.prototype._modules,
  CustomModeler.prototype._customModules
);