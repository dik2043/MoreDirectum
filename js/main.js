

import Widget from './widget.js'
import WidgetList from "./widget-list.js";


const count = 5;
const widgets = [];

for (let i = 0; i < count; i++) {
    widgets.push(new Widget(i).renderElemList())
}

const widgetList = new WidgetList(widgets);

widgetList.addWidgets();
