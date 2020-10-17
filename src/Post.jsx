import React, { Fragment } from "react";
import "./Post.scss";
const Post = ({ userData, setUserData, onSubmit }) => {
    return (
        <div className="post">
            <div className="container">
                <form onSubmit={onSubmit}>
                    <ul>
                        <li>
                            <div className="box">
                                {/* <div className="header">ㅁㄴㅇㅁㄴㅇ</div> */}
                                <div className="text_box">
                                    <img
                                        src={
                                            "https://instagram.famm9-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.famm9-1.fna.fbcdn.net&_nc_ohc=hs698vsjrYIAX8uUPr_&oh=02add6836f4a6dca76d4a037b603715d&oe=5FADEC0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                        }
                                    />
                                    <input
                                        id="input_todo"
                                        className="todo_input"
                                        placeholder="ㄹㅇㄹㅁㄴㄹㄴㅇ"
                                        onChange={e => {
                                            setUserData({ ...userData, content: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Post;
