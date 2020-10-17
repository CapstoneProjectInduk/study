import React, { Component } from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            list: {},
            listArr: []
        };
    }

    componentDidMount = () => {
        const ul = document.getElementById("lists");
        const button = document.getElementById("add");
        const input = document.getElementById("input");

        button.addEventListener("click", () => {
            const { count } = this.state;

            const li = document.createElement("li");
            const delBtn = document.createElement("button");

            li.innerText = input.value;
            li.id = count;

            delBtn.innerText = "x";
            delBtn.id = 100 + count;

            li.appendChild(delBtn);
            ul.appendChild(li);

            input.value = " ";

            this.setState({
                count: this.state.count + 1
            });
        });
    };

    componentDidUpdate = (_, prevState, __) => {
        const delBtn = document.getElementById(this.state.count + 100 - 1);
        const ul = document.getElementById("lists");
        delBtn.addEventListener("click", e => {
            console.log(e);
            const deleteId = e.target.id - 100;
            const li = document.getElementById(deleteId);
            ul.removeChild(li);
        });
    };

    render() {
        return (
            <div>
                <div>ToDoList</div>
                <div>
                    <input id="input" />
                    <button id="add">등록</button>
                </div>
                <div>
                    <ul id="lists"></ul>
                </div>
            </div>
        );
    }
}

export default ToDoList;
