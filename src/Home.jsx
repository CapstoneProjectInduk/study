import React, { Fragment, useState } from "react";
import Post from "./Post";
import List from "./List";
import { tsConstructorType } from "@babel/types";

const Home = () => {
    let Bucket = localStorage.getItem("bucket") === null ? [] : JSON.parse(localStorage.getItem("bucket"));

    const [userData, setUserData] = useState({
        id: JSON.parse(localStorage.getItem("bucket"))?.length ?? 0,
        name: "배진우",
        location: "서울",
        content: null
    });

    const [listDate, setListData] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
        Bucket.push({ ...userData });
        localStorage.setItem("bucket", JSON.stringify(Bucket));
        document.getElementById("input_todo").value = "";

        setUserData({ ...userData, id: userData.id + 1 });
    };

    console.log(userData);
    return (
        <Fragment>
            <Post userData={userData} setUserData={setUserData} onSubmit={onSubmit} />
            <List />
        </Fragment>
    );
};

export default Home;
