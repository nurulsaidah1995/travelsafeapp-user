import Table from 'react-bootstrap/Table'
import TRow from './TRow';

function TableComp(props) {

    const object = props.data[0];
    const data = props.data;
    const keys = []
    for (var key in object) {
        keys.push(key)
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {
                        keys.map((header) => {
                            return header !== "id" ? <th key={header}>{header}</th> : ""
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {data.map((user) => {
                  return <TRow rowData={user}/>
                })}
            </tbody>
        </Table>
    )
}

export default TableComp