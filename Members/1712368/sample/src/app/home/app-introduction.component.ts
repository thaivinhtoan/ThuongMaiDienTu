import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';

export interface PeriodicElement {
  name: string;
  position: number;
  mssv: number;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, mssv: 1712824, name: 'Thái Vĩnh Toàn', role: "Nhóm trưởng" },
  { position: 2, mssv: 1712341, name: 'Phan Thị Mỹ Diễm', role: "Thư ký" },
  { position: 3, mssv: 1612687, name: 'Nguyễn Thị Mỹ Tiên', role: "" },
  { position: 4, mssv: 1712368, name: 'Nguyễn Hữu Dũng', role: "" },
  { position: 5, mssv: 1712828, name: 'Huỳnh Thanh Khải Trân', role: "" },
];
@Component({
  selector: "app-introduction",
  templateUrl: "./app-introduction.component.html",
  styleUrls: ["./app-introduction.component.css"]
})
export class IntroductionComponent {
  displayedColumns: string[] = ['position', 'mssv', 'name', 'role'];
  dataSource = ELEMENT_DATA;
  constructor(private titleService: Title) {
    titleService.setTitle("Home");
  }
}
