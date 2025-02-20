import { div } from "framer-motion/client";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const CommonErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    //ステータスに応じてエラーページを生成
    switch (error.status) {
      case 404:
        return <p>目的のページが見つかりません</p>;
      case 401:
        return <p>認証に失敗しています</p>;
      case 501:
        return <p>サービスが一時的に停止しています</p>;
      default:
        return <p>不明なエラー：{error.data.message}</p>;
    }
  }

  //   //(Error型の場合)
  //   return (
  //     <div>
  //       <Heading level="h2">重大なエラーが発生しました</Heading>
  //       <p>詳細な問題 : {error.message}</p>
  //     </div>
  //   );
};
