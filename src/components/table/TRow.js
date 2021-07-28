function TRow(props) {
    const rowData = props.rowData
    const headers = []
    for (var key in rowData) headers.push(key)
    return (
        <tr>
            {
                headers.map((header) => {
                    let dataElem;
                    if (header === "avatar") {
                        dataElem = <td><img src={rowData[header]} alt={rowData[header]}/></td>
                    }
                    else if (header !== "id") {
                        dataElem = <td>{rowData[header]}</td>;
                    } else {
                        dataElem = ""
                    }
                    return dataElem;
                })
            }

        </tr>
    )
}

export default TRow