import React, { useState } from 'react';
import MaterialTable from 'material-table';

import { students } from './data/students';
import { columns } from './data/columns';
import { tableIcons } from './data/tableIcons';

const Home = () => {

    const [tableData, setTableData] = useState(students)

    return (
        <div>
            <h1>TABLE</h1>

            <MaterialTable columns={columns}
                icons={tableIcons}
                data={tableData}
                title="Students Info"
                options={{
                    searchAutoFocus: true,
                    filtering: true,
                    pageSize: 10,
                    paginationPosition: 'both',
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: 'Soaps',
                    addRowPosition: 'first',
                    actionsColumnIndex: -1,
                    selection: true,
                    grouping: true,

                }}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        setTableData([...tableData, newRow])
                        setTimeout(() => resolve(), 500);
                    }),
                    onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData]
                        updatedData[oldRow.tableData.id] = newRow
                        setTableData(updatedData)
                        setTimeout(() => resolve(), 500)
                    }),
                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData]
                        updatedData.splice(selectedRow.tableData.id, 1)
                        setTableData(updatedData)
                        setTimeout(() => resolve(), 1000)
                    })
                }}
            />
        </div>
    )
}

export default Home
