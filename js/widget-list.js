

export default class WidgetList {
    constructor(props) {
        this.container = document.querySelector('.widget-container__list');
        this.widgets = props;
    }
    
    addWidgets() {
        for (let i = 0; i < this.widgets.length; i++) {
            this.container.append(this.widgets[i]);
        }
    }
}
