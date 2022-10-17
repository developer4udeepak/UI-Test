import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface GreenKoncepts {
  nodeName: string;
  nodeId :string;
  children?: GreenKoncepts[];
}

const TREE_DATA: GreenKoncepts[] = [
  {
    "nodeId": "1584420547524",
    "nodeName": "Green Koncepts Pte Ltd", "children": [
      {
        "nodeId": "1584420558984",
        "nodeName": "Level 3",
        "children": [
          {
            "nodeId": "1584420568914",
            "nodeName": "#03-15", "children": [
              {
                "nodeId": "1584420577974",
                "nodeName": "Energy"
              },
              {
                "nodeId": "1584420590985",
                "nodeName": "Temperature & Humidity", "children": []
              }
            ]
          }
        ]
      }
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  nodeName: string;
  nodeId : string;
  level: number;
}

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {




    private _transformer = (node: GreenKoncepts, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        nodeName: node.nodeName,
        nodeId :node.nodeId,
        level: level,
      };
    };
  
    treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level,
      node => node.expandable,
    );
  
    treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children,
    );
  
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
    constructor() {
      this.dataSource.data = TREE_DATA;
    }
    ngOnInit(): void {
    }
    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
    
  }