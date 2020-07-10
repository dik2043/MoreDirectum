

export default class Column {
    constructor(selector) {
        this.column = document.querySelector(`.col-${selector}`);
    }
    
    addWidgetToColumn(widget) {
        this.column.append(widget);
    }
}
