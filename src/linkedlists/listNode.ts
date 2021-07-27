import { InterfaceListNode } from "../interfaces/listNode";


export class ListNode implements InterfaceListNode {

  constructor(public data: any,  public next: InterfaceListNode | null = null){
    this.data = data
    this.next = null 
  }

}