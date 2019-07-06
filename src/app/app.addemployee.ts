import { Component } from "@angular/core";

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})

export class AddEmployeeComponent{

    prodId:number;
    prodName:string;
    prodCost:number;
    prodOnline:string;
    prodCategory:string;
    prodStore:string;

    prodAll:any[]=[];

    model;

    constructor() {
        this.model = {
            options: "Yes"
        };
    }
    // empId1:number;
    // empName1:string;
    // empSalary1:number;
    // empIndex:number;
    // //filteredElements:any;

    // empAll:any[]=[{empId:1001,empName:"ABCD",empSalary:10000.1},
    // {empId:1002,empName:"BCD",empSalary:10000.11},
    // {empId:1003,empName:"CD",empSalary:10000.12}];//writing an array

    addProduct():any{
        // this.prodAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})//will show[object],[object]......
        this.prodAll.push(this.prodId,this.prodName,this.prodCost,this.prodOnline,this.prodCategory,this.prodStore)//will show the values which is being inserted even while printing
        console.log("Employee Added!..."+this.prodAll)
    }

    // deleteEmployee(data:number):any{
    //    // alert("Delete..."+data);
    //     this.empAll.splice(data,1)
    // }

    // toUpdateEmployee(i:number):any{
    //     this.empIndex = i;
    //     this.empId1 = this.empAll[i].empId;
    //     this.empName1 = this.empAll[i].empName;
    //     this.empSalary1 = this.empAll[i].empSalary;
    //     //let filteredElements=this.empAll.filter(element => element.empId);
    // }

    // updateEmployee(){
    //     this.empAll[this.empIndex].empId = this.empId1;
    //     this.empAll[this.empIndex].empName = this.empName1;
    //     this.empAll[this.empIndex].empSalary = this.empSalary1;
    //     //console.log(this.filteredElements);
    //         // for(let data of this.empAll)
    //         // {
    //         //     if(data.empId == this.empId1)
    //         //     {
    //         //         this.empAll.splice(data,1);
    //         //         this.empAll.
    //         //     }
    //         // }
    //         // this.empAll.push({empId:this.empId1,empName:this.empName1,empSalary:this.empSalary1})
    //     // if(this.empId1 == this.empAll.empId)
    //     // {
    //     //     this.empAll[i].empId = this.empId1;
    //     //     this.empAll[i].empName = this.empName1;
    //     //     this.empAll[i].empSalary = this.empSalary1;
    //     // }
    // }
}