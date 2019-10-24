
import React, { Component } from "react";

import { Table, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";

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

export default class officialTable extends React.Component {
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
        title: "Type of Application",
        dataIndex: "Application_Type",
        key: "Application_Type",
        width: "60%"
      },
      {
        title: "Existing Load",
        dataIndex: "existing_load",
        key: "existing_load",
        width: "20%",
        ...this.getColumnSearchProps("watts")
      },
      {
        title: "Additional/Reduction Load",
        dataIndex: "increment_load",
        key: "increment_load"
      },
      {
        title: "Customer Identification No.",
        dataIndex: "customer_no",
        key: "customer_no"
      },
      {
        title: "GPS coordinate",
        dataIndex: "gps_coordinate",
        key: "gps_coordinate"
      },
      {
        title: "remark",
        dataIndex: "remark",
        key: "remark"
      },
      {
        title: "designation",
        dataIndex: "designation",
        key: "designation"
      },
      {
        title: "Meter No",
        dataIndex: "meter_no",
        key: "meter_no"
      },
      {
        title: "Account No",
        dataIndex: "account_no",
        key: "account_no"
      },
      {
        title: "Meter Reading on Last Bill",
        dataIndex: "last_meter_reading",
        key: "last_meter_reading"
      },
      {
        title: "Final Meter Reading on",
        dataIndex: "final_meter_reading",
        key: "final_meter_reading"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Designation",
        dataIndex: "designation",
        key: "designation"
      },
      {
        title: "Latest Amount on Bill",
        dataIndex: "latest_bill_amount",
        key: "latest_bill_amount"
      },
      {
        title: "Amount Paid",
        dataIndex: "amount_paid",
        key: "amount_paid"
      },
      {
        title: "Month",
        dataIndex: "month",
        key: "month"
      },
      {
        title: "Approved By",
        dataIndex: "approved_by",
        key: "approved_by",
        ...this.getColumnSearchProps("approved_by")
      },
      {
        title: "Approved Date",
        dataIndex: "approved_date",
        key: "approved_date",
        ...this.getColumnSearchProps("approved_date")
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
            <div className="card-header">Official Form table</div>
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
