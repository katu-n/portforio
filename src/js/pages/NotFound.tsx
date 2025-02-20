import React from "react";
import { Heading } from "../system/Hedding";
import { useLocation } from "react-router-dom";
import { ThreadLink } from "../system/Linkstyle";

export const Page404 = () => {
  const location = useLocation();
  return (
    <div>
      <Heading level="h1">Page404</Heading>
      <p>指定されたパス「{location.pathname}」は存在しません。</p>
      <p>お手数ですが以下のリンクからTopページにお戻りください</p>
      <ThreadLink className="text-xl" to="/">
        ProfileのTopページはこちら
      </ThreadLink>
    </div>
  );
};
