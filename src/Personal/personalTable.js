

import React, { Component } from "react";

import { Table, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";

const data = [
  {
    key: "1",
    Total_Installed_load: "John Brown",
    watts: "3kva",
    requested_voltage: "ss",
    type_of_supply: "",
    name_of_registered_engineer: "",
    address: "",
    licence: "",
    category: "",
    date: "",
    nature_of_property: "",
    type_of_property: "",
    property_has_planning_permission: "",
    Property_has_meter: "",
    Meter_no: "",
    Customer_acct_no: "",
    Meter_on_property: "",
    Estimated_maximum_load: "",
    Meter_No: "",
    Account_no: "",
    Signature_Title: "",
    mDate: ""
  }
];

export default class personalTable extends React.Component {
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
        title: "Surname",
        dataIndex: "surname",
        key: "surname",
        width: "30%"
      },
      {
        title: "Other Names",
        dataIndex: "other_names",
        key: "other_names",
        width: "20%"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "landmark",
        dataIndex: "landmark",
        key: "landmark"
      },
      {
        title: "LGA",
        dataIndex: "lga",
        key: "lga"
      },
      {
        title: "Building Type",
        dataIndex: "premises",
        key: "premises"
      },
      {
        title: "Building Use",
        dataIndex: "building_use",
        key: "building_use",
        ...this.getColumnSearchProps("building_use")
      },
      {
        title: "Customer Address",
        dataIndex: "customer_address",
        key: "customer_address",
        ...this.getColumnSearchProps("customer_address")
      },
      {
        title: "Account No",
        dataIndex: "account_no",
        key: "account_no",
        ...this.getColumnSearchProps("account_no")
      },
      {
        title: "Metric No",
        dataIndex: "metric_no",
        key: "metric_no"
      },
      {
        title: "District",
        dataIndex: "District",
        key: "District"
      },
      {
        title: "Employer Name",
        dataIndex: "employer_name",
        key: "employer_name"
      },
      {
        title: "Employer Address",
        dataIndex: "employer_address",
        key: "employer_address"
      },
      {
        title: "landmark",
        dataIndex: "landmark",
        key: "landmark"
      },
      {
        title: "lga",
        dataIndex: "lga",
        key: "lga",
        ...this.getColumnSearchProps("lga")
      },
      {
        title: "Pin Code",
        dataIndex: "pin code",
        key: "pin code"
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "Identified by",
        dataIndex: "identified_by",
        key: "identified_by",
        ...this.getColumnSearchProps("identified_by")
      },
      {
        title: "Personal Identification No",
        dataIndex: "pin_no",
        key: "pin_no"
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
            <div className="card-header">Personal Information Table</div>
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
