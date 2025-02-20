import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const ContactForm = () => {
  //入れ子の配列をStateとして宣言
  const [form, setForm] = useState({
    name: "山田太郎",
    email: "katu@example.com",
    title: "タイトル",
    message: "メッセージ本文",
  });

  //nameの要素を更新するためのハンドラー
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`${form.name},${form.email},${form.title},${form.message}`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleName}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmail}
          value={form.email}
        />
      </div>
      <div>
        <label htmlFor="title">タイトル：</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleTitle}
          value={form.title}
        />
      </div>
      <div>
        <label htmlFor="title">メッセージ：</label>
        <br />
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={7}
          value={form.message}
          onChange={handleMessage}
        ></textarea>
      </div>
      <Button type="button" onClick={show}>
        送信
      </Button>
    </form>
  );
};
