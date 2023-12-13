import React from "react";
import { Document, Page } from "react-pdf";
import cv from "../contact/cv/furkanertekincv.pdf"

const Contact = () => {
    return (
        <body>
            <div>
                <iframe title="CV" src={cv} width="100%" height="1000px"></iframe>
            </div>
        </body>
    );
};

export default Contact