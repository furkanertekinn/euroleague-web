import React from "react";
import { Document, Page } from "react-pdf";
import cv from "../cv/furkanertekincv.pdf"

const Contact = () => {
    return (
        <body>
            <div>
                <iframe title="CV" src={cv} width="100%" height="1000px"></iframe>

                {/* <Document file='../cv/furkanertekincv.pdf'>
                    <Page pageNumber={1} width={window.innerWidth} />
                </Document> */}
            </div>
        </body>
    );
};

export default Contact