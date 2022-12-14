import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

@Component({
  selector: 'app-like-comment-chart',
  templateUrl: './like-comment-chart.component.html',
  styleUrls: ['./like-comment-chart.component.css']
})
export class LikeCommentChartComponent {
  // colors: string[] = ['blue', 'yellow'];
  series: ApexAxisChartSeries = [
    {
      name: "Comment",
      data: [120, 120, 100, 100, 30, 90, 135, 70, 95],
    },
    {
      name: "Avg Comment per day",
      data: [120, 90, 130, 145, 45, 60, 95, 90, 145]
    }
  ]
  chart: ApexChart = {
    height: 300,
    type: "line",
    zoom: {
      enabled: true
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    width: [3, 3],
    curve: "straight",
  }

  title: ApexTitleSubtitle = {
    text: "",
    align: "left"
  }
  legend: ApexLegend = {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - <strong>" +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        "</strong>"
      );
    }
  }
  markers: ApexMarkers = {
    size: [0, 6],
    hover: {
      sizeOffset: 6,
      size: 10
    },

  }
  xaxis: ApexXAxis = {
    labels: {
      trim: false
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  }

  grid: ApexGrid = {
    borderColor: "#f1f1f1"
  }
}
