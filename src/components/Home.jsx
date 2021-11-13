import React, { useState } from 'react';
import MaterialTable from 'material-table';

import {students} from './data/students';
import {columns} from './data/columns';

const Home = () => {

    const [tableData, setTableData] = useState(students)



    return (
        <div>
            <h1>TABLE</h1>

            <MaterialTable columns={columns}
                data={tableData}
                title="Students Info"
            />
        </div>
    )
}

export default Home
