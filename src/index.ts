
import { LinkedList } from "./linkedlists/linkedLIst";
import { ListNode } from "./linkedlists/listNode";

const nodeList1 = new ListNode(2)
const nodeList2 = new ListNode(5)

nodeList1.next = nodeList2

const list = new LinkedList(nodeList1)