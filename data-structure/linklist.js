const linkList2 = {
    val: 3,
    next: null
}

const linkList1 = {
    val: 2,
    next: linkList2
}

const linkList = {
    val: 1,
    parent: null,
    next: linkList1
}

// console.log(linkList.next.next);  // 输出结果为3

function getLinkListLength(list) {
    let p = list
    let i = 0
    while (p){
        i++
        console.log(p.val);
        p = p.next
    }
    return i
}

console.log(getLinkListLength(linkList));