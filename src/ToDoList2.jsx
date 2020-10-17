import React, { Component } from "react";

class ToDoList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            list: {},
            listArr: []
        };
    }

    componentDidMount = () => {
        if (localStorage.getItem("list") === null) {
            localStorage.setItem("list", JSON.stringify([]));
        }
        if (localStorage.getItem("count") === null) {
            localStorage.setItem("count", JSON.parse(localStorage.getItem("list").length));
        } else {
            localStorage.setItem("count", JSON.parse(localStorage.getItem("list").length));
        }
        this.setState({
            listArr: JSON.parse(localStorage.getItem("list"))
        });
    };

    onClickAdd = e => {
        e.preventDefault();
        const { listArr, count } = this.state;
        const inputValue = document.getElementById("input").value;

        listArr.push({ id: count, text: inputValue });
        localStorage.setItem("list", JSON.stringify(this.state.listArr));

        this.setState({
            count: this.state.count + 1,
            list: { ...this.state.list, id: this.state.count + 1, text: inputValue }
        });
    };

    render() {
        return (
            <div>
                <div>ToDoList</div>
                <div>
                    <input id="input" />
                    <button
                        onClick={e => {
                            this.onClickAdd(e);
                        }}
                        id="add"
                    >
                        등록
                    </button>
                </div>
                <div>
                    <ul id="lists">
                        {JSON.parse(localStorage.getItem("list"))
                            ? JSON.parse(localStorage.getItem("list")).map(e => {
                                  return (
                                      <li id={e.id + 100}>
                                          {e.text}
                                          <button id={e.id}>X</button>
                                      </li>
                                  );
                              })
                            : "empty"}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ToDoList2;
