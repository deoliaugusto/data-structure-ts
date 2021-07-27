import { InterfaceListNode } from "../interfaces/listNode";

export class LinkedList {
  constructor(public head: InterfaceListNode | null = null){
    this.head = head
  }

  size(): number{
    let count: number  = 0
    let node: InterfaceListNode | null = this.head
    while(node){
      count++
      node = node.next
    }

    return count
  }

  clear(): void{
    this.head = null
  }

  getLast(): InterfaceListNode | null{
    let lastNode: InterfaceListNode | null = this.head
    if(lastNode){
      while(lastNode.next){
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirst(): InterfaceListNode | null{
    return this.head
  }
}