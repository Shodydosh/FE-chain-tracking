// menuItems.ts
import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const DefaultMenuList = (collapsed: boolean): MenuItem[] => [
  {
    type: 'divider',
  },
  getItem(
    'Investigate',
    'sub1',
    collapsed ? (
      <SearchOutlined />
    ) : (
      <div className="p-2 border border-gray-300 border-solid rounded-md shadow-md">
        <SearchOutlined />
      </div>
    ),
    [
      getItem(
        'Investigate by tx hash',
        'investigate-txhash/',
        <MinusOutlined className="opacity-50" />
      ),
      getItem(
        'Investigate by address',
        'investigate-address/',
        <MinusOutlined className="opacity-50" />
      ),
    ]
  ),
  getItem(
    'Chart',
    'sub2',
    collapsed ? (
      <PieChartOutlined />
    ) : (
      <div className="p-2 border border-gray-300 border-solid rounded-md shadow-md">
        <PieChartOutlined />
      </div>
    ),
    [
      getItem('Chart 1', '4', <MinusOutlined className="opacity-50" />),
      getItem('Chart 2', '5', <MinusOutlined className="opacity-50" />),
    ]
  ),
  getItem('Option 2', '6', <DesktopOutlined />),
  getItem('User', 'sub3', <UserOutlined />, [
    getItem('Tom', '7'),
    getItem('Bill', '8'),
    getItem('Alex', '9'),
  ]),
  {
    type: 'divider',
  },
  getItem('Team', 'sub4', <TeamOutlined />, [getItem('Team 1', '10'), getItem('Team 2', '11')]),
  getItem('Files', '12', <FileOutlined />),
];
