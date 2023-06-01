import React, {useState} from 'react';
import {Column, Table} from "react-virtualized";
import 'react-virtualized/styles.css';
import {Link} from "@mui/material";
import Picture from "../Picture/Picture";
import styles from "./Table.module.css"
import Image from "next/image";

export default function CustomTable({photos}) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const showPhoto = (event) => {
        let image = photos.find(photo => photo.thumbnailUrl === event.target.textContent).url;
        setImage(image);
        setOpen(true);
    }

    return (
        <div className={styles.wrapper}>
            <Table className={styles.table} width={500} height={400} rowHeight={50} rowCount={photos.length} rowGetter={({index}) => photos[index]}>
                <Column width={300} dataKey="thumbnailUrl"
                        cellRenderer={({cellData}) =>
                            <Link component="button" onClick={showPhoto}>
                                    {cellData}
                            </Link>}
                >
                </Column>
                <Column dataKey="title" width={400}/>
            </Table>

            <Picture open={open} setOpen={setOpen} image={image}/>
        </div>
    );
}