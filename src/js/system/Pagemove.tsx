import React from "react";
import HTMLFlipBook from "react-pageflip";
import { boolean, number } from "yup";
import { useWindowSize } from "./UseWindowSize";




interface IProps {
    className?: string;
    style?: React.CSSProperties;
    startPage?: number;
    size?: "fixed" | "stretch";
    children?: React.ReactNode;
    width: number;
    height: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
}
const Pagemove: React.FC<IProps> = ({
    className,
    style,
    startPage,
    size,
    children,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    drawShadow,
    flippingTime,
    usePortrait,
    startZIndex,
    autoSize,
    maxShadowOpacity,
    showCover,
    mobileScrollSupport,
    clickEventForward,
    useMouseEvents,
    swipeDistance,
    showPageCorners,
    disableFlipByClick,
}) => {
    const [windowWidth, windowHeight] = useWindowSize();
    return (
    <HTMLFlipBook
      className={className ?? "demoBook"}
      style={style ?? {margin: "0", padding: "0", overflow: "hidden", backgroundColor: "red"}}
      width={width}
      height={height}
      startPage={startPage ?? 0}
      size={size ?? "fixed"}
      minWidth={minWidth ?? 400}
      maxWidth={maxWidth ?? windowWidth/2}
      minHeight={minHeight ?? windowHeight}
      maxHeight={maxHeight ?? windowHeight}
      drawShadow={drawShadow ?? true}
      flippingTime={flippingTime ?? 400}
      usePortrait={usePortrait ?? false}
      startZIndex={startZIndex ?? 1}
      autoSize={autoSize ?? true}
      maxShadowOpacity={maxShadowOpacity ?? 0.5}
      showCover={showCover ?? false}
      mobileScrollSupport={mobileScrollSupport ?? true}
      clickEventForward={clickEventForward ?? false}
      useMouseEvents={useMouseEvents ?? true}
      swipeDistance={swipeDistance ?? 100}
      showPageCorners={showPageCorners ?? true}
      disableFlipByClick={disableFlipByClick ?? false}
    >
      {children}
      {/* <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div> */}
    </HTMLFlipBook>
  );
};

export default Pagemove;
