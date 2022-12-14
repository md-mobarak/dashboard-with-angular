import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers
} from "ng-apexcharts";

@Component({
  selector: 'app-follower-growth-chart',
  templateUrl: './follower-growth-chart.component.html',
  styleUrls: ['./follower-growth-chart.component.css']
})
export class FollowerGrowthChartComponent {
  series: ApexAxisChartSeries = [
    {
      name: "Follower Growth",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12]
    }
  ]
  chart: ApexChart = {
    id: "fb",
    height: 300,
    type: "line",
    zoom: {
      enabled: false
    }
  };
  dataLabels: ApexDataLabels = {
    enabled: false
  };
  stroke: ApexStroke = {
    width: 4,
    curve: "smooth"
  };
  title: ApexTitleSubtitle = {
    text: "",
    align: "left"
  };
  grid: ApexGrid = {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5
    }
  };

  xaxis: ApexXAxis = {
    categories: [
      "Feb'00",
      "Feb'00",
      "Mar'00",
      "Apr'00",
      "May'00",
      "Jun'00",
      "Jul'00",
      "Aug'00",
      "Sep"
    ]
  };
  markers: ApexMarkers = {
    size: 6,
    hover: {
      size: 10
    },
    colors: ['#F44336', '#E91E63', '#9C27B0']
  }
}


