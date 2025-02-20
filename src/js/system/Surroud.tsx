import { css } from "@emotion/react";

export const Surround = css`
    // html{
    //     hight:100vh;
    // }
    body {
        width:100%;
        height:100vh;
        border: 20px solid rgb(6 182 212);
        box-sizing:border-box;
    }
    @media screen and (max-width:767px){
        body{
        border:10px solid rgb(6 182 212);
    }
`;
