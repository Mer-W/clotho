
import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import UsersList from "./UsersList";

// nodejs library that concatenates classes
import classNames from "classnames";

// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2"; // TODO

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";


function AdminDashboard(props) {
    const [bigChartData, setbigChartData] = React.useState("data1");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };

    return (
        <>
            <UsersList />
        </>
    );
}

export default AdminDashboard;
