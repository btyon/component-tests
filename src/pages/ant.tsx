// import React from 'react'
// import { data } from '../data';
// import { DownOutlined } from '@ant-design/icons';
// import type { TableColumnsType } from 'antd';
// import { Badge, Dropdown, Space, Table } from 'antd';

// export default function ant() {
//     interface DataType {

//     }

//     const columns: TableColumnsType<DataType> = [
//         { title: 'Name', dataIndex: 'name', key: 'name' },
//     ];

//     return (
//         <Table
//             dataSource={data}
//             columns={columns}
//             pagination={false}
//             expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
//             size='small'
//         />
//     )
// }

import React from 'react'
import { data } from '../data';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';


const App = () => {
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }
    ];
    const data = [];
    for (let i = 0; i < data.length; ++i) {
      data.push({
        key: i.toString(),
        name: data[i].name
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }
  ];
  const data_ = [];
  for (let i = 0; i < data.length; ++i) {
    data_.push({
      key: i.toString(),
      name: data[i].name
    });
  }
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    
     
    </>
  );
};



