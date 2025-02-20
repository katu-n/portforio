// export default FollowingMouseEvent;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { useCursor } from "../system/Cursor";

// スタイル定義
const styles = {
  wrapStyle: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: none;
    pointer-events: none; /* 要素にイベントを伝播させない */
  `,
  circleStyle: (isActive: boolean) => css`
    position: absolute;
    width: ${isActive ? "5em" : "3em"};
    height: ${isActive ? "5em" : "3em"};
    border-radius: 50%;
    background: #ff7f50;
    transform: translate(-50%, -50%); /* 中心をマウスに合わせる */
    transition:
      width 0.1s,
      height 0.1s,
      background 0.1s;
    pointer-events: ${isActive ? "none" : "none"}; /* マウスイベントを無効化 */
  `,
};

const FollowingMouse: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const { isActive } = useCursor();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (circleRef.current) {
        // マウスの座標を取得して円を動かす
        const pointerX = event.clientX;
        const pointerY = event.clientY;

        // スタイルを直接更新（マウス中心に配置）
        circleRef.current.style.left = `${pointerX}px`;
        circleRef.current.style.top = `${pointerY}px`;
      }
    };

    // マウス移動イベントを登録
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // クリーンアップ
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div css={styles.wrapStyle}>
        <div ref={circleRef} css={styles.circleStyle(isActive)}></div>
      </div>
    </>
  );
};

export default FollowingMouse;
