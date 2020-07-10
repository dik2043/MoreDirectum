

import Column from "./column.js";


export default class Widget {
    constructor(props) {
        
        this.template = `
                    <button class="widget__remove-btn btn">X</button>
                    <span class="widget__count">${props}</span>
                    <button class="widget__settings-btn btn">Настройки</button>
                    <button class="widget__replace-btn btn">Переместить</button>`;
    
        this.templateListEl = `<span class="widget-container__count">${props + 1}</span>
                    <button class="widget-container__add-btn btn" id=${props +1}>+</button>`;

    }
    
    
    render = () => {
        const el = document.createElement(`li`);
        el.innerHTML = this.template.trim();
        el.classList.add('widget');
        const btnRemove = el.querySelector('.widget__remove-btn');
        btnRemove.addEventListener('click', () => {
            el.remove();
        });
        return el;
    };
    
    
    // ужас какой
    renderElemList() {
        const el = document.createElement(`li`);
        el.classList.add('widget-container__elem');
        el.innerHTML = this.templateListEl.trim();
        const btnAdd = el.querySelector('.widget-container__add-btn');
        
        btnAdd.addEventListener('click', (e) => {
            btnAdd.disabled = true;
            const body = document.querySelector('body');
            const columnChooserList = document.createElement(`ul`);
            columnChooserList.classList.add('popup');
            
            for (let i = 1; i <= 3; i++) {
                const columnChooser = document.createElement(`li`);
                columnChooser.dataId = i;
                columnChooser.innerHTML = `колонка ${i}`;
    
                columnChooser.addEventListener('click', () => {
                    const column = new Column(columnChooser.dataId);
                    const widget = new Widget(btnAdd.id).render();
                    column.addWidgetToColumn(widget);
                    columnChooserList.remove();
                    btnAdd.disabled = false;
                });
    
                columnChooserList.appendChild(columnChooser);
            }
    
            columnChooserList.style.top = `${e.clientY}px`;
            columnChooserList.style.left = `${e.clientX}px`;
            body.appendChild(columnChooserList);
        });
        
        return el;
    }
}
