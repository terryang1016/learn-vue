(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{427:function(t,e,n){"use strict";n.r(e);var a=n(2),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_1-queue-队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-queue-队列"}},[t._v("#")]),t._v(" 1.Queue 队列")]),t._v(" "),e("p",[t._v("JavaScript中没有队列这个数据结构，但是可以用数组来实现所有的功能。")]),t._v(" "),e("p",[t._v("入队➡")]),t._v(" "),e("p",[t._v("​\t\t\t4 3 2 1")]),t._v(" "),e("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t出队➡")]),t._v(" "),e("p",[t._v("队列是一个"),e("strong",[t._v("先进先出")]),t._v("的数据结构，一般JavaScript中采用队列解决问题时会用到")]),t._v(" "),e("p",[t._v("入队push ()：在数组的尾部添加元素\n出队shift ()：移除数组中第一个元素\nqueue (0) ：取数组的第一个元素\nisEmpty ()：确定队列是否为空\nsize ()：获取队列中元素的数量")]),t._v(" "),e("h3",{attrs:{id:"_2-stack-栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-stack-栈"}},[t._v("#")]),t._v(" 2.Stack 栈")]),t._v(" "),e("p",[t._v("1️⃣栈作为一种数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。它按照先进⬇后出⬆的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据（最后一个数据被第一个读出来）。")]),t._v(" "),e("p",[t._v("进栈")]),t._v(" "),e("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t栈顶")]),t._v(" "),e("p",[t._v("​\t\t\t\t\t⬇\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t⬆")]),t._v(" "),e("p",[t._v("2️⃣JavaScript中没有栈，但是可以用Array实现栈的功能。")]),t._v(" "),e("p",[t._v("3️⃣栈中数组长度减一即为栈尾元素，也就是最后进入的那个元素，最先出去的那个元素")]),t._v(" "),e("p",[t._v("JavaScript中对栈的操作一般会使用到")]),t._v(" "),e("p",[t._v("push()方法，将元素压入栈顶\n"),e("strong",[t._v("pop()方法，从栈顶弹出（删除）元素，并返回该元素")]),t._v(" "),e("strong",[t._v("peek()方法，返回栈顶元素，不删除")]),t._v("\nclear()方法，清空栈\nlength拿到栈中元素数量")]),t._v(" "),e("h3",{attrs:{id:"_3-linked-list-链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-linked-list-链表"}},[t._v("#")]),t._v(" 3.Linked List 链表")]),t._v(" "),e("p",[t._v("链表是由多个元素组成的列表，链表中的元素储存不连续，用"),e("strong",[t._v("next指针")]),t._v("连接在一起。分为单链表、双链表、循环单链表")]),t._v(" "),e("p",[e("strong",[t._v("数组")]),t._v("：增删非数组元素需要移动元素")]),t._v(" "),e("p",[e("strong",[t._v("链表")]),t._v("：增删非首尾元素不需要移动元素只需要更改next的指向即可")]),t._v(" "),e("p",[t._v("链表是一个链式数据结构，每个节点由两个信息组成：节点的数据和指向下一个节点的指针。链表和传统数组都是线性数据结构，具有序列化的存储方式。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("数组")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("链表")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("内存分配")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编译和序列化过程中静态分配")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行过程中动态分配")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("获取元素")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从索引中读取")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("读取队列中的所有节点，直到特定元素，较慢")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("增加/删除元素")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("顺序增加删除，较慢")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("动态分配，内存消耗小，速度快")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("空间结构")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一维或者多维")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("单边/多边，循环链表")])])])]),t._v(" "),e("p",[t._v("JavaScript中没有链表，但是可以"),e("strong",[t._v("用object来模拟链表")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const a = { val: 'a' }\nconst b = { val: 'b' }\nconst c = { val: 'c' }\nconst d = { val: 'd' }\n    // a的next属性指向b\na.next = b;\nb.next = c;\nc.next = d;\n// 这个嵌套的object就相当于一个链表\n")])])]),e("h5",{attrs:{id:"遍历链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历链表"}},[t._v("#")]),t._v(" "),e("strong",[t._v("遍历链表")])]),t._v(" "),e("p",[t._v("👉遍历链表就是跟着链表从链表的头元素（head）一直走到尾元素（但是不包含链表的头节点，头通常用来作为链表的接入点）")]),t._v(" "),e("p",[t._v("🤦‍♂️还有一个问题，链表的尾元素指向一个null节点")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 声明一个指针，指向a\nlet p = a\n    // 当p还有值得时候\nwhile (p) {\n    console.log(p.val)\n        // 不断得让p指向下一个位置\n    p = p.next\n}\n")])])]),e("h5",{attrs:{id:"插入链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入链表"}},[t._v("#")]),t._v(" "),e("strong",[t._v("插入链表")])]),t._v(" "),e("p",[e("strong",[t._v("插入链表")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 在链表中插入值\nconst f = { val: 'f' }\nc.next = f\nf.next = d\n")])])]),e("h5",{attrs:{id:"删除链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除链表"}},[t._v("#")]),t._v(" "),e("strong",[t._v("删除链表")])]),t._v(" "),e("p",[e("strong",[t._v("删除链表")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 删除值\nc.next = d\n")])])]),e("h3",{attrs:{id:"_4、集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、集合"}},[t._v("#")]),t._v(" 4、集合")]),t._v(" "),e("p",[t._v("集合：一种"),e("strong",[t._v("无序且唯一的数据结构")]),t._v("，集合区别队列、栈、链表最大的区别就是元素不能重复")]),t._v(" "),e("p",[t._v("JavaScript中ES6中新增了集合这种数据结构，可以通过"),e("strong",[t._v("实例化Set对象")]),t._v("来创建集合const set = "),e("strong",[t._v("new Set()")])]),t._v(" "),e("h5",{attrs:{id:"集合常用来解决的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合常用来解决的问题"}},[t._v("#")]),t._v(" 集合常用来解决的问题：")]),t._v(" "),e("h6",{attrs:{id:"去重"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[t._v("#")]),t._v(" 去重")]),t._v(" "),e("p",[t._v("set = new Set(arr)，返回一个不含重复元素的集合")]),t._v(" "),e("h6",{attrs:{id:"判断元素是否在集合中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断元素是否在集合中"}},[t._v("#")]),t._v(" 判断元素是否在集合中")]),t._v(" "),e("p",[e("strong",[t._v("set.has(num)，判断num是否在集合中")])]),t._v(" "),e("h6",{attrs:{id:"求两个集合的交集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#求两个集合的交集"}},[t._v("#")]),t._v(" 求两个集合的交集")]),t._v(" "),e("p",[t._v("先将集合set1转换为数组，然后利用数组中的filter方法将set1在set2中的值返回，最后将返回的值转换为集合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const set1 = new Set([1,2,4])\nconst set2 = new Set([3,4])\nconst set3 = new Set([...set1].filter(item = > set2.has(item)))\n//set3{4}\n")])])]),e("h6",{attrs:{id:"求两个集合的并集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#求两个集合的并集"}},[t._v("#")]),t._v(" 求两个集合的并集")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const set1 = new Set([1,2,4])\nconst set2 = new Set([3,4])\nlet set3 = new Set([...set1, ...set2]);\n// set3 {1, 2, 3, 4}\n")])])]),e("h6",{attrs:{id:"求两个集合的差集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#求两个集合的差集"}},[t._v("#")]),t._v(" 求两个集合的差集")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const set1 = new Set([1,2,4])\nconst set2 = new Set([3,4])\nlet set3 = new Set([...set1].filter(x => !set2.has(x)));\n// set3 {1,2}\n")])])]),e("p",[t._v("filter() 方法创建一个新的数组，新数组返回指定数组中符合条件的所有元素")]),t._v(" "),e("h3",{attrs:{id:"_5-树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-树"}},[t._v("#")]),t._v(" 5.树")]),t._v(" "),e("p",[t._v("前端🎄树结构还是比较常见的，例如级联选择、层级目录等都是树形结构。")]),t._v(" "),e("p",[t._v("javascript中没有树这个数据结构，但是一般"),e("strong",[t._v("用object和arrey来模拟树")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const tree = {\n\tvalues:a,\n\tchildren:[\n        {\n            values:b,\n            children:[\n                {\n                    values:d,\n                    children:[]\n                },\n                {\n                    values:e,\n                    children:[]\n                },{\n                 \tvalues:f,\n                    children:[]\n                }\n            ]\n        },\n        {\n            values:c,\n            children:[\n                {\n                    values:g,\n                    children:[]\n                },\n                {\n                    values:h,\n                    children:[]\n                }\n            ]\n        }\n    ]\n}\n\n")])])]),e("p",[t._v("上面的代码模拟的就是下图的树结构")]),t._v(" "),e("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\ta")]),t._v(" "),e("p",[t._v("​\t\t\t\t\t\t\tb\t\t\t\t\t\t\t\t\t\t\tc")]),t._v(" "),e("p",[t._v("​\t\t\td\t\t\te\t\t\tf\t\t\t\t\t\tg\t\t\t\th")]),t._v(" "),e("h4",{attrs:{id:"树的常用遍历方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树的常用遍历方式"}},[t._v("#")]),t._v(" 树的常用遍历方式")]),t._v(" "),e("h5",{attrs:{id:"深度优先遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度优先遍历"}},[t._v("#")]),t._v(" 深度优先遍历")]),t._v(" "),e("p",[t._v("尽可能深的遍历树的分支。先访问根节点，然后再对子节点挨个使用深度优先遍历。\n上图中的树使用深度优先遍历")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const deepNood = (node)=>{\n//打印根节点\n    console.log(node.values);\n    //遍历子节点\n    node.children.forEach(child => {\n    //递归\n        deepNood(child)\n    })\n}\ndeepNood(tree)\n//a b d e f c g h\n\n")])])]),e("h5",{attrs:{id:"广度优先遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#广度优先遍历"}},[t._v("#")]),t._v(" 广度优先遍历")]),t._v(" "),e("p",[t._v("优先访问距离根节点最近的节点。广度优先遍历需要使用到队列这个数据结构")]),t._v(" "),e("p",[t._v("新建一个队列，把根节点入队\n将队头出队并访问\n将队头的children顺序入队\n重复第二步和第三步，直到队列为空\n上面的树使用广度优先遍历")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const breadth = (node)=>{\n//将树加入队列（整个object对象，）\n    const arr = [node];\n//队列是否为空\n    while(arr.length > 0){\n    //从队列中取出根节点\n        const val = arr.shift()\n        console.log(val.values)\n        //遍历子节点\n        for(let child of val.children){\n        //将子节点加入队列\n            arr.push(child)\n        }\n // 打开console.log(arr),就能看出不断的将childern入队，然后再将队头取出\n    }\n}\nbreadth(tree)\n//a b c d e f g h \n")])])]),e("h4",{attrs:{id:"二叉树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),e("p",[t._v("二叉树是n(n>=0)个结点的有限集合，该集合或者为空集（称为空二叉树），或者由一个根结点和两棵互不相交的、分别称为根结点的左子树和右子树组成")]),t._v(" "),e("p",[t._v("树的每个节点最多只能有两个子节点")]),t._v(" "),e("p",[t._v("js中自然也没有二叉树这个数据结构，一般还是"),e("strong",[t._v("用object对象来模拟二叉树")])]),t._v(" "),e("p",[t._v("二叉树代码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const tree = {\n\tval:1,\n    left:{\n            val:2,\n            left:{\n                    val:4,\n                    left:null,\n                    right:null\n                },\n            right:{\n                    val:5,\n                    left:null,\n                    right:null\n            }\n        },\n    right:{\n            val:3,\n            left:{\n                    val:6,\n                    left:null,\n                    right:null\n                },\n            right:\n                {\n                    val:7,\n                    left:null,\n                    right:null\n                }\n        }\n}\n")])])]),e("h5",{attrs:{id:"二叉树遍历-递归"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二叉树遍历-递归"}},[t._v("#")]),t._v(" 二叉树遍历（递归）")]),t._v(" "),e("h6",{attrs:{id:"_1-前序遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前序遍历"}},[t._v("#")]),t._v(" （1）前序遍历")]),t._v(" "),e("p",[t._v("DLR：根节点——左子树——右子树")]),t._v(" "),e("p",[t._v("每次遍历到一个节点都重复一次前序遍历")]),t._v(" "),e("p",[t._v("代码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const perorder = (node) =>{\n//如果当前节点值为空则返回\n    if(!node) return;\n    //打印根节点\n    console.log(node.val);\n    //递归左子树\n    perorder(node.left);\n    //递归右子树\n    perorder(node.right);\n}\nperorder(tree)\n//1 2 4 5 3 6 7\n")])])]),e("h6",{attrs:{id:"_2-中序遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-中序遍历"}},[t._v("#")]),t._v(" （2）中序遍历")]),t._v(" "),e("p",[t._v("LDR：左子树——根节点——右子树")]),t._v(" "),e("p",[t._v("每次遍历到一个节点都重复一次中序遍历")]),t._v(" "),e("p",[t._v("代码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const perorder = (node) =>{\n    if(!node)return;\n    perorder(node.left);\n    console.log(node.val);\n    perorder(node.right);\n}\nperorder(tree)\n//4 2 5 1 6 3 7\n")])])]),e("h6",{attrs:{id:"_3-后序遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-后序遍历"}},[t._v("#")]),t._v(" （3）后序遍历")]),t._v(" "),e("p",[t._v("LRD：左子树——右子树——根节点")]),t._v(" "),e("p",[t._v("每次遍历到一个节点都重复一次后序遍历")]),t._v(" "),e("p",[t._v("代码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const perorder = (node) =>{\n    if(!node)return;\n    perorder(node.left);\n    perorder(node.right);\n    console.log(node.val);\n}\nperorder(tree)\n//4 5 2 6 7 3 1\n")])])]),e("p",[e("strong",[t._v("注意：")]),t._v("\n前序遍历第一个为根节点\n中序遍历根节点左边为左子树，右边为右子树\n后序遍历最后一个为根节点")]),t._v(" "),e("h3",{attrs:{id:"_6-堆heap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-堆heap"}},[t._v("#")]),t._v(" 6.堆heap")]),t._v(" "),e("p",[e("strong",[t._v("堆是一种特殊的完全二叉树")])]),t._v(" "),e("p",[t._v("每层节点全部都填满，最后一层如果不是满的，只能缺少右边的节点，下图为最大堆的示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("     6\n   /   \\\n  5     3\n / \\   / \n4   2 1   \n")])])]),e("p",[t._v("所有的节点都大于等于（最大堆）或者小于等于（最小堆）他的子节点")]),t._v(" "),e("h4",{attrs:{id:"js中的堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js中的堆"}},[t._v("#")]),t._v(" "),e("strong",[t._v("js中的堆")])]),t._v(" "),e("p",[t._v("js中通常"),e("strong",[t._v("用数组来表示堆，按照广度优先的方式存储在数组中")])]),t._v(" "),e("p",[t._v("根据广度优先的特点可以得到子节点在数组中的存储位置（index代表当前节点在数组中的下标）")]),t._v(" "),e("p",[t._v("左侧子节点的位置是2 * index+1\n右侧子节点的位置是2 * index+1\n父节点位置是（index - 1）/ 2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("        1(0)\n       /   \\\n     (1)3  6(2)\n     / \\   / \n  (3)5  9 8(5)  \n    136598\n    012345\n")])])]),e("h5",{attrs:{id:"第k个最大元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第k个最大元素"}},[t._v("#")]),t._v(" 第k个最大元素")]),t._v(" "),e("p",[t._v("主要方法 ：")]),t._v(" "),e("h6",{attrs:{id:"插入元素-最小堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入元素-最小堆"}},[t._v("#")]),t._v(" 插入元素（最小堆）")]),t._v(" "),e("p",[t._v("构建一个最小堆，并将元素依次添加到堆中，")]),t._v(" "),e("p",[t._v("将值插入堆的底部，也就是数组的尾部\n上移，将这个值与其父节点进行交换，直到父节点小于等于这个插入的值\n大小为k的堆中插入元素的时间复杂度为O(logk)")]),t._v(" "),e("h6",{attrs:{id:"删除堆顶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除堆顶"}},[t._v("#")]),t._v(" 删除堆顶")]),t._v(" "),e("p",[t._v("当堆的容量超过了k就删除堆顶")]),t._v(" "),e("p",[t._v("用数组尾部元素替换堆顶（直接删除堆顶会破坏堆解构）\n下移，将新堆顶和子节点进行交换，直到子节点大于这个堆顶\n大小为k的堆中删除堆顶的时间复杂度为O（logk）")]),t._v(" "),e("h6",{attrs:{id:"获取堆顶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取堆顶"}},[t._v("#")]),t._v(" 获取堆顶")]),t._v(" "),e("p",[t._v("插入结束后堆顶就是第k个最大元素")]),t._v(" "),e("h6",{attrs:{id:"获取堆大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取堆大小"}},[t._v("#")]),t._v(" 获取堆大小")]),t._v(" "),e("p",[t._v("数组长度就是堆的大小")]),t._v(" "),e("h6",{attrs:{id:"代码实现最小堆类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实现最小堆类"}},[t._v("#")]),t._v(" 代码实现最小堆类")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class  minHeap{\n    constructor(){\n        this.heap = []; \n    }\n    // 获取父节点在数组中的下标\n    getParentIndex(i){\n        return Math.floor((i-1)/2)\n        //二进制写法\n        // return (i - 1) >> 1\n    }\n    // 获取左侧节点在数组中的下标\n    getLeftIndex(i){\n        return i * 2 + 1\n    }\n    // 获取右侧节点在数组中的下标\n    getRightIndex(i){\n        return i * 2 + 2\n    }\n\n    // 定义节点交换的方法\n    swap(i1,i2){\n        const temp = this.heap[i1];\n        this.heap[i1] = this.heap[i2];\n        this.heap[i2] = temp;\n\n    }\n    // 定义上移方法\n    shiftUp(index){\n        if(index==0){\n            return;\n        }\n        // 不停的和父节点交换位置，直到小于等于父节点的值\n        const parentIndex = this.getParentIndex(index)\n        if(this.heap[parentIndex] > this.heap[index]){\n            this.swap(parentIndex,index)\n            this.shiftUp(parentIndex)\n        }\n    }\n    // 定义下移方法\n    shiftDown(index){\n        const liftIndex = this.getLeftIndex(index)\n        const RightIndex = this.getRightIndex(index)\n        if(this.heap[liftIndex] < this.heap[index]){\n            this.swap(liftIndex,index)\n            this.shiftDown(liftIndex)\n        }\n        if(this.heap[RightIndex] < this.heap[index]){\n            this.swap(RightIndex,index)\n            this.shiftDown(RightIndex)\n        }\n    }\n    // 插入方法\n    insert (value){\n        // 将元素插入到数组的最后一位\n        this.heap.push(value)\n        \n        // 因为插入的元素为数组的最后一位，所以传入的参数是heap.length-1\n        this.shiftUp(this.heap.length-1)\n    }\n    // 删除方法\n    delect(){\n        // pop可以删除数组的最后一个元素并返回这个元素\n        this.heap[0] =  this.heap.pop();\n        this.shiftDown(0)\n    } \n    //获取堆顶\n    peek(){\n    \treturn this.heap[0]\n    }\n    //获取堆大小\n    size(){\n\t\treturn this.heap.length\n\t}\n}\n// 实例化一个最小堆\nconst h = new minHeap();\n\n//插入几个数字测试\nh.insert(3);\nh.insert(2);\nh.insert(1);\n//虽然不能保证是按照最小堆来排列，但是能保证堆顶最小，也就是父节点的元素一定大于子节点的元素\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);