import React from "react";
import NavBar from "./Navbar/NavBar";
import FilePanel from "./HomePage/Panels/FilePanel"
import ProjectPanel from './HomePage/Panels/ProjectPanel'
import SubprojectPanel from './HomePage/Panels/SubprojectPanel'
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";


class keycloakClass {
    loadUserInfo = () => {
        return new Promise((resolve, reject) => {
            resolve({name: "alex", email: "alex"})
        })
    }
}

class Context {

}

let myContext = new Context()

let keycloak = new keycloakClass()

let container = null;

let elementFile = {
    name: "FileName",
    createTime: new Date('December 17, 1995 03:24:00'),
    lastUpdatedTime: new Date('December 17, 1995 03:24:00'),
    tasks: []
}

let elementProject = {
    name: "ProjectName",
    createTime: new Date('December 17, 1995 03:24:00'),
    lastUpdatedTime: new Date('December 17, 1995 03:24:00'),
    tasks: []
}

let elementSubroject = {
    name: "SubprojectName",
    createTime: new Date('December 17, 1995 03:24:00'),
    lastUpdatedTime: new Date('December 17, 1995 03:24:00'),
    tasks: []
}

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});


afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render nav", () => {
    act(() => {
        render(<NavBar keycloak={keycloak}/>, container)
    })
    expect(container.innerHTML).toBe("<div class=\"navbar\"><div class=\"navbar-item\"><img class=\"navbar-logo\" src=\"logo.svg\"><div>Производство</div></div><div class=\"navbar-item\"><div></div><div>alex</div><div class=\"navbar-button\">Выйти</div></div></div>");
});

it("should render filepanel", () => {
    act(() => {
        render(<FilePanel myContext={myContext} keycloak={keycloak} element={elementFile}/>, container)
    })
    expect(container.innerHTML).toBe("<div class=\"right-panel-content\"><div><h2>Панель управления файлом</h2></div><div class=\"right-panel-group\"><div>Название файла:</div><div>FileName</div></div><div class=\"right-panel-group\"><div>Время создания:</div><div>Dec 17, 1995 3:24 AM</div></div><div class=\"right-panel-group\"><div>Время последнего обновления:</div><div>Dec 17, 1995 3:24 AM</div></div><div class=\"interaction\"><div>Действия:</div><div class=\"task\">Освободить</div></div></div>");
});

it("should render projectPanel", () => {
    act(() => {
        render(<ProjectPanel myContext={myContext} keycloak={keycloak} element={elementProject}/>, container)
    })

    expect(container.innerHTML).toBe("<div class=\"left-panel-content\"><div><h2>Панель управления проектом</h2></div><div class=\"left-panel-group\"><div>Имя проекта:</div><div>ProjectName</div></div><div class=\"left-panel-group\"><div>Время создания:</div><div>Dec 17, 1995 3:24 AM</div></div><div class=\"left-panel-group\"><div>Время последнего изменения</div><div>Dec 17, 1995 3:24 AM</div></div><div class=\"interaction\"><div>Действия:</div></div></div>");
});

it("should render subProjectPanel", () => {
    act(() => {
        render(<SubprojectPanel myContext={myContext} keycloak={keycloak} element={elementSubroject}/>, container)
    })
    expect(container.innerHTML).toBe("<div class=\"right-panel-content\"><div><h2>Панель управления подпроектом</h2></div><div class=\"right-panel-group\"><div>Имя подпроекта:</div><div>SubprojectName</div></div><div class=\"right-panel-group\"><div>Время создания:</div><div>Dec 17, 1995 3:24 AM</div></div><div class=\"right-panel-group\"><div>Время последнего обновления:</div><div>Dec 17, 1995 3:24 AM</div></div><div class=\"interaction\"><div>Действия</div></div></div>");
});
