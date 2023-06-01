import React from "react";
import {Box, Modal} from "@mui/material";
import styles from "./Picture.module.css"

export default function Picture({setOpen, open, image}) {
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal open={open} onClose={handleClose}>
                <Box className={styles.box}>
                    <img style={{maxWidth: "100%", maxHeight: "calc(100vh - 64px)"}} src={image}/>
                </Box>
            </Modal>
        </div>
    );
}