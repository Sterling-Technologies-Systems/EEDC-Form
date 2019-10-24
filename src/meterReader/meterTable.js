import React, { Component } from "react";


import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


const data = [
  {
    key: "1",
    Total_Installed_load: "33kva",
    watts: "3kva",
    requested_voltage: "ss",
    type_of_supply: "dd",
    name_of_registered_engineer: "dd",
    address: "dd",
    licence: "221222jh22dd",
    category: "dd",
    date: "dd",
    nature_of_property: "dd",
    type_of_property: "dd",
    property_has_planning_permission: "dd",
    Property_has_meter: "ss",
    Meter_no: "ss",
    Customer_acct_no: "ss",
    Meter_on_property: "ff",
    Estimated_maximum_load: "dd",
    Meter_No: "222",
    Account_no: "22222",
    Signature_Title: "ss",
    mDate: "2222"
  }
];


export default class meterTable extends React.Component {
  state = {
    searchText: ""
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
      
      />
    )
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };


 


   

  render() {
    const columns = [
      {
        title: "Total Installed Load",
        dataIndex: "Total_Installed_Load",
        key: "Total_Installed_load",
        width: "60%"
      },
      {
        title: "Watts",
        dataIndex: "watts",
        key: "watts",
        width: "20%",
        ...this.getColumnSearchProps("watts")
      },
      {
        title: "Requested Voltage",
        dataIndex: "requested_voltage",
        key: "requested_voltage"
      },
      {
        title: "Type Of Supply",
        dataIndex: "type_of_supply",
        key: "type_of_supply"
      },
      {
        title: "Name Of Registered Engineer",
        dataIndex: "name_of_registered_engineer",
        key: "name_of_registered_engineer"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Licence",
        dataIndex: "licence",
        key: "licence"
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        ...this.getColumnSearchProps("category")
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        ...this.getColumnSearchProps("date")
      },
      {
        title: "Type Of Property",
        dataIndex: "type_of_property",
        key: "type_of_property",
        ...this.getColumnSearchProps("type_of_property")
      },
      {
        title: "Property Has Planning Permission",
        dataIndex: "property_has_planning_permission",
        key: "property_has_planning_permission"
      },
      {
        title: "Property Has Meter",
        dataIndex: "Property_has_meter",
        key: "Property_has_meter"
      },
      {
        title: "Meter No",
        dataIndex: "Meter_no",
        key: "Meter_no"
      },
      {
        title: "Customer Acct_No",
        dataIndex: "Customer_acct_no",
        key: "Customer_acct_no",
        ...this.getColumnSearchProps("Customer_acct_no")
      },
      {
        title: "Meter_on_property",
        dataIndex: "Meter_on_property",
        key: "Meter_on_property",
        ...this.getColumnSearchProps("Meter_on_property")
      },
      {
        title: "Estimated Maximum Load",
        dataIndex: "Estimated_maximum_load",
        key: "Estimated_maximum_load"
      },
      {
        title: "Meter No",
        dataIndex: "Meter_No",
        key: "Meter_No",
        ...this.getColumnSearchProps("Meter_No")
      },
      {
        title: "Account No",
        dataIndex: "Account_no",
        key: "Account_no",
        ...this.getColumnSearchProps("Account_no")
      },
      {
        title: "Signature_Title",
        dataIndex: "Signature_Title",
        key: "Signature_Title"
      },
      {
        title: "Date",
        dataIndex: "mDate",
        key: "mDate",
        ...this.getColumnSearchProps("mDate")
      }
    ];
    return (
      <>
        <div className="container-fluid mt-3">
          <div className="card card-default shadow">
            <div className="card-header">Meter Engineers table</div>
            <div className="card-body">
              <Table
                className="table-responsive"
                columns={columns}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
