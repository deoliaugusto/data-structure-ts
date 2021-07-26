"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.head = head;
        this.head = head;
    }
    LinkedList.prototype.size = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
    };
    LinkedList.prototype.getLast = function () {
        var lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    };
    LinkedList.prototype.getFirt = function () {
        return this.head;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
