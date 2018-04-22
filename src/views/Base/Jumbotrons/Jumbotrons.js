import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  CardFooter,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Table
} from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];
var nonSubsData = [133, 149, 162, 94, 146, 171, 189, 194, 75, 95, 98, 122, 146, 170, 121, 180, 75, 159];
var subsData = [229, 151, 150, 167, 134, 184, 182, 70, 151, 114, 139, 201, 124, 148, 175, 188, 190, 207];
var totalData = [];
var nonSubsPredData = [133, 149, 162, 94, 146, 171, 189, 194, 75, 95, 98, 122, 146, 170, 121, 180, 75, 159, 131, 130, 129, 129, 128, 127, 127];
var subsPredData = [229, 151, 150, 167, 134, 184, 182, 70, 151, 114, 139, 201, 124, 148, 175, 188, 190, 207, 169, 170, 170, 171, 172, 173, 174];
var totalPredData = [];


for (var i = 0; i <= elements; i++) {
  // data2.push(random(80, 100));
  // if (i < 5) {
  //   data3.push(65);
  // }
  totalData.push(nonSubsData[i] + subsData[i]);
  totalPredData.push(nonSubsPredData[i] + subsPredData[i]);
}

const mainChart = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
  datasets: [
    {
      label: 'Total LPG',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: totalData,
    },
    {
      label: 'Non-Subsidised LPG',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      data: nonSubsData,
    },
    {
      label: 'Subsidised LPG',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      data: subsData,
    },
    {
      label: 'Total LPG',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      borderDash: [8, 5],
      data: totalPredData,
    },
    {
      label: 'Non-Subsidised LPG Prediction',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: nonSubsPredData,
    },
    {
      label: 'Subsidised LPG Prediction',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: subsPredData,
    },
  ],
};

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 400,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const doughnut = {
  labels: [
    '50kg',
    '12kg',
    '5kg',
    '3kg'
  ],
  datasets: [
    {
      data: [80, 1287, 2013, 4102],
      backgroundColor: [
        '#dc0403',
        '#36A2EB',
        '#FF6384',
        '#d1dc03'
      ],
      hoverBackgroundColor: [
        '#dc0403',
        '#36A2EB',
        '#FF6384',
        '#d1dc03'
      ],
    }],
};

class Jumbotrons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Purchase Growth</CardTitle>
                    <div className="small text-muted">April 2018</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <Card>
              <CardHeader>
                Demographic
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12" xl="12">
                    <ul style={{ paddingLeft: '0px' }}>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-user progress-group-icon"></i>
                          <span className="title">Male</span>
                          <span className="ml-auto font-weight-bold">63%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="warning" value="63" />
                        </div>
                      </div>
                      <div className="progress-group mb-5">
                        <div className="progress-group-header">
                          <i className="icon-user-female progress-group-icon"></i>
                          <span className="title">Female</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="warning" value="37" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-rocket progress-group-icon"></i>
                          <span className="title">Child (0 - 11)</span>
                          <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-puzzle progress-group-icon"></i>
                          <span className="title">Teenager (12 - 17)</span>
                          <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="15" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-graduation progress-group-icon"></i>
                          <span className="title">Young Adult (18 - 30)</span>
                          <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="11" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-mustache progress-group-icon"></i>
                          <span className="title">Adult (31 - 59)</span>
                          <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="8" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-eyeglass progress-group-icon"></i>
                          <span className="title">Elder (60+)</span>
                          <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="8" />
                        </div>
                      </div>
                    </ul>
                  </Col>
                </Row>
                <br />
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            <Card>
              <CardHeader>
                Doughnut Chart
                <div className="card-header-actions">
                  <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Doughnut data={doughnut} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;