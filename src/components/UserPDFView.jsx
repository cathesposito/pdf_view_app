import React from "react";
import { useParams } from 'react-router-dom';
import data from "../users"

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Helvetica",
    },
    section: {
        margin: "10px",
    },
    h2: {
        textDecoration: "underline",
        textDecorationColor: "#D2C7FF",
        fontSize: "24px",
        marginBottom: "10px",
    },
    section_hr: {
        marginTop: "-30px",
        padding: "10px",
        
    },
    line_hr: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        opacity: 0.25,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
    table: {
        display: "table",
        width: "30%",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableHeader: {
        margin: "auto",
        marginTop: 5,
        fontSize: 12,
        fontFamily: "Helvetica-Bold",
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 12,
    }
});

// Create Document Component
function UserPDFView() {

    const { key } = useParams();

    console.log(key);

    const found = data.find(obj => {
        return obj.key == key;
    });

    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.h2}>User {found.name}</Text>
                        <Text>Address {found.address}</Text>
                    </View>
                    <View style={styles.section_hr}>
                        <Text style={styles.line_hr}>{'\u00A0'}</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableHeader}>Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableHeader}>Address</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{found.name}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{found.address}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Page>

            </Document>
        </PDFViewer>
    );
}
export default UserPDFView;