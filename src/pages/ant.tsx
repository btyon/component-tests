import React from 'react'
import { data as dataRaw } from '../data';
import type { TableColumnsType } from 'antd';
import { Badge, Button, Dropdown, Space, Table } from 'antd';


const Ant = () => {

  const data = dataRaw.map(x => {
    x["key"] = x.id;
    return x;
  });
  console.log(data,"fnal");
  

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

    const data_ = data.filter((row, index) => {
      return row.name === a.name;
    });
    
    return <Table rowKey={data.key} columns={columns} dataSource={data_} pagination={false} />;
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
  return (
    <>
      <Table
        rowKey={data.key}
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"]
        }}
        pagination={false}
        dataSource={data_}
        style={{background:'red'}}

      />
    
    </>
  );
};

export default Ant;