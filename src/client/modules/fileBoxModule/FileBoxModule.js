import React, { memo, useState } from 'react';
import { Table, Pagination, Button } from 'antd';
import {
  // FilePdfOutlined,
  // FileWordOutlined,
  FolderOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import MainLayout from '../../libs/mainLayout/MainLayout';
import { mockData1, mockData2 } from './mockData';
//
// const iconTypes = {
//   pdf: () => <FilePdfOutlined />,
//   docx: () => <FileWordOutlined />,
// };

// const selectIconType = item => {
//   const splittedItem = item.title.split('.');
//
//   switch (splittedItem[splittedItem.length - 1]) {
//     case 'pdf':
//       item.title = `<span>${iconTypes.pdf()}</span><span>${item.title}</span>`;
//       break;
//     case 'doc':
//     case 'docx':
//       item.title = `<span>${iconTypes.docx()}</span><span>${item.title}</span>`;
//       break;
//     default:
//       break;
//   }
//
//   return item;
// };

// const addIcons = data => data.map(dataItem => selectIconType(dataItem));

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Size',
    dataIndex: 'size',
  },
  {
    title: 'Uploaded',
    dataIndex: 'uploaded',
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
  },
];

const FileBoxModule = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = selectedKeys => {
    console.log('selectedRowKeys changed: ', selectedKeys);
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>PREV</a>;
    }
    if (type === 'next') {
      return <a>NEXT</a>;
    }
    return originalElement;
  };

  const renderTable = (columns, data) => (
    <>
      <div className="TopButtonsContainer">
        <Button>
          <i className="icon button-icon">
            <FolderOutlined />
          </i>
          Create folder
        </Button>
        <Button>
          <i className="icon button-icon">
            <UploadOutlined />{' '}
          </i>
          Upload files
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
        size={'middle'}
      />
      <Pagination total={25} itemRender={itemRender} />
    </>
  );

  return (
    <MainLayout
      titles={['My files', 'Shared files']}
      contents={[renderTable(columns, mockData1), renderTable(columns, mockData2)]}
    />
  );
};

export default memo(FileBoxModule);
