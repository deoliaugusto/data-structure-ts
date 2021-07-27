
import { LinkedList } from "./linkedlists/linkedLIst";
import { ListNode } from "./linkedlists/listNode";


const createSut = () => {
  const value1 = 2, value2 = 5;
  const nodeList1Mock = new ListNode(value1)
  const nodeList2Mock = new ListNode(value2)
  nodeList1Mock.next = nodeList2Mock
  const listMock: LinkedList = new LinkedList(nodeList1Mock)

  return {
    nodeList1Mock,
    nodeList2Mock,
    listMock
  }
}

describe('Linked List', () => {
  it('should liked list`s head property be null when inicialized without arguments', () => {
    const listMock = new LinkedList();
    expect(listMock.head).toBe(null);
  })
  
  it('should return null if method getFirst was called in an empty linked list', () => {
    const listMock = new LinkedList();
    const linkedListGetFirstMockSpy = jest.spyOn(listMock,'getFirst')
    listMock.getFirst()
    expect(linkedListGetFirstMockSpy).toHaveBeenCalledTimes(1);
    expect(listMock.getFirst()).toBe(null)
  })
  
  it('should return 5 if the second node was inserted', () => {
    const { listMock } = createSut()

    expect(listMock.head!.next!.data).toBe(5)
  })

  it('should return the last node when method getLast is called', () => {
    const { listMock } = createSut()
    const linkedListGetLastMockSpy = jest.spyOn(listMock, 'getLast')
    listMock.getLast()
    expect(linkedListGetLastMockSpy).toBeCalledTimes(1)
    expect(listMock.getLast()!.data).toBe(5)
  })

  it('should empty the linked list when method clear is called', () => {
    const { listMock } = createSut()
    const linkedListClearMockSpy = jest.spyOn(listMock,'clear')
    expect(listMock.head!.data).toBe(2)
    listMock.clear()
    expect(linkedListClearMockSpy).toBeCalledTimes(1)
    expect(listMock.head).toBe(null)
  })
})