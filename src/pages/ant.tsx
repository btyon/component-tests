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
import { Badge, Button, Dropdown, Space, Table } from 'antd';


const Ant = () => {
  const expandedRowRender = (a, b) => {
    const columns = [
      {
        title: 'Return type',
        dataIndex: 'returnType',
        key: 'returnType',
      },
      {
        title: 'samplesTr',
        dataIndex: 'samplesTr',
        key: 'samplesTr',
      },
      {
        title: 'developerNote',
        dataIndex: 'developerNote',
        key: 'developerNote',
      },
      {
        title: 'architectNote',
        dataIndex: 'architectNote',
        key: 'architectNote',
      },
      {
        title: 'Return type',
        dataIndex: 'returnType',
        key: 'returnType',
      },
      {
        title: 'isDeprecated',
        dataIndex: 'isDeprecated',
        key: 'isDeprecated',
      },
      {
        title: 'isLost',
        dataIndex: 'isLost',
        key: 'isLost',
      },
    ];

    /*"name"         
"samplesTr"    
"developerNote"
"architectNote"
"returnType"   
"isDeprecated" 
"isLost"       */ 
        // const data_ = [{returnType: "cafer"}];
    const data_ = data.filter((row, index) => {
      return row.name === a.name;
    });
    // for (let i = 0; i < data.length; ++i) {
    //   data_.add({
    //     key: data[i].name,
    //     name: data[i].name
    //   });
    // }
    return <Table columns={columns} dataSource={data_} pagination={false} />;
  };





  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    
  ];
  let data_;
  data_ = data.reduce((acc, obj) => {
    const existingObj = acc.find(item => item.name === obj.name);
    if (!existingObj) {
      acc.push(obj);
    }
    return acc;
  }, []);
  console.log(data_);

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"]
        }}
        pagination={false}
        dataSource={data_}
        style={{backgroundColor:'red'}}
      />
    
    </>
  );
};

export default Ant;