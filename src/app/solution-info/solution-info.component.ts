import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-info',
  templateUrl: './solution-info.component.html',
  styleUrls: ['./solution-info.component.css']
})
export class SolutionInfoComponent implements OnInit {

  constructor() { }
  obj=[{purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  {purpose: "Enterprise Function", industry: "Banking & capital markets", function: "Financial Accounting and Control", solution: "Financial Period End Management (FPEM) ", roadmap: "Available Now"},
  ];
  purposes=['Enterprise Function'];
  industries=['Banking & capital markets'];
  functions=['Financial Accounting and Control'];
purpose;
industry;
function;
res=[];
  ngOnInit() {


  }

  onFindButton(){
    console.log(this.industry);
    this.res=[];
    for(var i=0;i<this.obj.length;i++){
      if(this.obj[i].industry==this.industry && this.obj[i].purpose==this.purpose && this.obj[i].function==this.function ){
        this.res[this.res.length]=this.obj[i];
      }
    }
    console.log(this.res.length);
  }



}
