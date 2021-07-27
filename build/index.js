'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var linkedLIst_1 = require('./linkedlists/linkedLIst');
var listNode_1 = require('./linkedlists/listNode');
var nodeList1 = new listNode_1.ListNode(2);
var nodeList2 = new listNode_1.ListNode(5);
nodeList1.next = nodeList2;
var list = new linkedLIst_1.LinkedList(nodeList1);

console.log(list.head.next.data);
