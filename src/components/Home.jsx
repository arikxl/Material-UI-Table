import React, { useState, forwardRef } from 'react';
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
                data={tableData}
                title="Students Info"
                options={{
                    searchAutoFocus: true,
                    filtering: true,
                    pageSize: 10,
                    paginationPosition: 'both',
                    exportButton: true,
                    exportAllData: true,
                    exportFileName:'Soaps',
                    
                }}
                icons={tableIcons}
            />
        </div>
    )
}

export default Home
