(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{436:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"字符串常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串常用方法"}},[t._v("#")]),t._v(" 字符串常用方法")]),t._v(" "),s("h3",{attrs:{id:"_1-charat-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-charat-方法"}},[t._v("#")]),t._v(" 1.charAt()方法")]),t._v(" "),s("p",[t._v("charAt() 方法可"),s("strong",[t._v("返回字符串中指定位置的字符")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.charAt(1);\nconsole.log(s);//e\n')])])]),s("p",[t._v("语法：string.charAt(index)\nindex 必需值。表示字符串中某个位置的数字，即字符在字符串中的位置。")]),t._v(" "),s("p",[t._v("语法：string.charAt(index)\nindex 必需值。表示字符串中某个位置的数字，即字符在字符串中的位置。")]),t._v(" "),s("h3",{attrs:{id:"_2-concat-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-concat-方法"}},[t._v("#")]),t._v(" 2.concat() 方法")]),t._v(" "),s("p",[t._v("concat() 方法用于"),s("strong",[t._v("连接两个或多个字符串")]),t._v("。\n该方法"),s("strong",[t._v("没有改变原有字符串")]),t._v("，但是会返回连接两个或多个字符串新字符串")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet str2 = "World";\nlet s = str.concat(str2);\nconsole.log(s); //HelloWorld\n')])])]),s("p",[t._v("语法：string.concat(string1, string2, …, stringX)\nstring1, string2, …, stringX 必需值。将被连接为一个字符串的一个或多个字符串对象。")]),t._v(" "),s("p",[t._v("语法：string.concat(string1, string2, …, stringX)\nstring1, string2, …, stringX 必需值。将被连接为一个字符串的一个或多个字符串对象。")]),t._v(" "),s("h3",{attrs:{id:"_3-indexof-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-indexof-方法"}},[t._v("#")]),t._v(" 3.indexOf() 方法")]),t._v(" "),s("p",[t._v("indexOf() 方法可"),s("strong",[t._v("返回某个指定的字符串值在字符串中首次出现的位置。")]),t._v("\n如果"),s("strong",[t._v("没有找到")]),t._v("匹配的字符串则"),s("strong",[t._v("返回 -1")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.indexOf("e");\nconsole.log(s); //1\n')])])]),s("p",[t._v("语法：string.indexOf(searchvalue,start)\nsearchvalue 必需值。规定需检索的字符串值。\nstart 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。")]),t._v(" "),s("p",[t._v("语法：string.indexOf(searchvalue,start)\nsearchvalue 必需值。规定需检索的字符串值。\nstart 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。")]),t._v(" "),s("h3",{attrs:{id:"_4-includes-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-includes-方法"}},[t._v("#")]),t._v(" 4.includes() 方法")]),t._v(" "),s("p",[t._v("includes() 方法用于"),s("strong",[t._v("判断字符串是否包含指定的子字符串")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.includes("e");\nconsole.log(s); //true\n\n')])])]),s("p",[t._v("语法：string.includes(searchvalue, start)\nsearchvalue 必需值，要查找的字符串。\nstart 可选值，设置从那个位置开始查找，默认为 0。")]),t._v(" "),s("h3",{attrs:{id:"_5-match-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-match-方法"}},[t._v("#")]),t._v(" 5.match() 方法")]),t._v(" "),s("p",[t._v("match() 方法可"),s("strong",[t._v("在字符串内检索指定的值")]),t._v("，或找到一个或多个正则表达式的匹配。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let str = \"Hello\";\nlet s = str.match(/l/g);\nconsole.log(s); //[ 'l', 'l' ]\n")])])]),s("p",[t._v("语法：string.match(regexp)\nregexp 必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。")]),t._v(" "),s("p",[t._v("语法：string.match(regexp)\nregexp 必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。")]),t._v(" "),s("h3",{attrs:{id:"_6-repeat-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-repeat-方法"}},[t._v("#")]),t._v(" 6.repeat() 方法")]),t._v(" "),s("p",[t._v("repeat() 方法字符串复制指定次数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.repeat(2);\nconsole.log(s); //HelloHello\n')])])]),s("p",[t._v("语法：string.repeat(count)\ncount 必需，设置要复制的次数。")]),t._v(" "),s("p",[t._v("语法：string.repeat(count)\ncount 必需，设置要复制的次数。")]),t._v(" "),s("h3",{attrs:{id:"_7-replace-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-replace-方法"}},[t._v("#")]),t._v(" 7.replace() 方法")]),t._v(" "),s("p",[t._v("replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.replace("l", "o");\nconsole.log(s); //Heolo\n')])])]),s("p",[t._v("语法：string.replace(searchvalue,newvalue)\nsearchvalue 必须。规定子字符串或要替换的模式的 RegExp 对象。\n请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。\nnewvalue 必需。一个字符串值。规定了替换文本或生成替换文本的函数。")]),t._v(" "),s("p",[t._v("语法：string.replace(searchvalue,newvalue)\nsearchvalue 必须。规定子字符串或要替换的模式的 RegExp 对象。\n请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。\nnewvalue 必需。一个字符串值。规定了替换文本或生成替换文本的函数。")]),t._v(" "),s("h3",{attrs:{id:"_8-replaceall-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-replaceall-方法"}},[t._v("#")]),t._v(" 8.replaceAll()方法")]),t._v(" "),s("p",[t._v("replaceAll() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串，该函数会替换所有匹配到的子字符串。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.replaceAll("l", "o");\nconsole.log(s); //Heooo\n')])])]),s("p",[t._v("语法同replace方法相同")]),t._v(" "),s("h3",{attrs:{id:"_9-search-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-search-方法"}},[t._v("#")]),t._v(" 9.search() 方法")]),t._v(" "),s("p",[t._v("search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。"),s("strong",[t._v("返回")]),t._v("与指定查找的字符串或者正则表达式相匹配的 String 对象"),s("strong",[t._v("起始位置")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.search("lo");\nconsole.log(s); //3\n')])])]),s("p",[t._v("语法：string.search(searchvalue)\nsearchvalue 必须。查找的字符串或者正则表达式。")]),t._v(" "),s("h3",{attrs:{id:"_10-slice-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-slice-方法"}},[t._v("#")]),t._v(" 10.slice() 方法")]),t._v(" "),s("p",[t._v("slice(start, end) 方法可"),s("strong",[t._v("提取字符串的某个部分")]),t._v("，并以新的字符串"),s("strong",[t._v("返回被提取的部分")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.slice(1, 2);\nconsole.log(s); //e\n')])])]),s("p",[t._v("语法:string.slice(start,end)\nstart 必须。 要抽取的片断的起始下标，第一个字符位置为 0。如果为负数，则从尾部开始截取。\nend 可选。 紧接着要截取的片段结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。")]),t._v(" "),s("h3",{attrs:{id:"_11-split-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-split-方法"}},[t._v("#")]),t._v(" 11.split() 方法")]),t._v(" "),s("p",[t._v("split() 方法用于把一个"),s("strong",[t._v("字符串分割成")]),t._v("字符串"),s("strong",[t._v("数组")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let str = \"Hello\";\nlet s = str.split(\"e\");\nconsole.log(str); //Hello\nconsole.log(s); //[ 'H', 'llo' ]\n")])])]),s("p",[t._v("语法：string.split(separator,limit)\nseparator 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。\nlimit 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。")]),t._v(" "),s("h3",{attrs:{id:"_12-substring-方法和substr-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-substring-方法和substr-方法"}},[t._v("#")]),t._v(" 12.substring() 方法和"),s("code",[t._v("substr()")]),t._v("方法")]),t._v(" "),s("p",[t._v("substring() 方法用于提取字符串中介于两个指定下标之间的字符。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.substring(1, 3);\nconsole.log(str); //Hello\nconsole.log(s); //el\n')])])]),s("p",[t._v("语法：string.substring(from, to)\nfrom 必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。\nto 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。\n如果省略该参数，那么返回的子串会一直到字符串的结尾。")]),t._v(" "),s("p",[s("strong",[t._v("区分："),s("code",[t._v("substr()")])])]),t._v(" "),s("p",[s("code",[t._v("substr()")]),t._v(" 方法提取字符串的一部分。")]),t._v(" "),s("p",[s("code",[t._v("substr()")]),t._v(" 方法从指定位置开始，并返回指定数量的字符。")]),t._v(" "),s("p",[s("code",[t._v("substr()")]),t._v(" 方法不会更改原始字符串。")]),t._v(" "),s("p",[t._v("如需从字符串末尾提取字符，请使用负数的起始位置。")]),t._v(" "),s("p",[s("strong",[t._v("提示：")]),s("code",[t._v("substr()")]),t._v(" 方法"),s("strong",[t._v("指定的是子串的开始位置和长度")]),t._v("，它是 "),s("code",[t._v("substring()")]),t._v(" 方法和 "),s("code",[t._v("slice()")]),t._v(" 方法的一种有用的替代方法，后两者指定的都是起始字符的位置。")]),t._v(" "),s("p",[t._v("语法：string.substring(from, to)\nfrom 必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。\nto 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。\n如果省略该参数，那么返回的子串会一直到字符串的结尾。")]),t._v(" "),s("h3",{attrs:{id:"_13-tolowercase-和touppercase-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-tolowercase-和touppercase-方法"}},[t._v("#")]),t._v(" 13.toLowerCase()和toUpperCase()方法")]),t._v(" "),s("p",[t._v("toLowerCase() 方法用于把字符串转换为小写。\ntoUpperCase() 方法用于把字符串转换为大写。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "Hello";\nlet s = str.toLowerCase();\nlet s2 = str.toUpperCase();\nconsole.log(str); //Hello\nconsole.log(s); //hello\nconsole.log(s2);//HELLO\n')])])]),s("h3",{attrs:{id:"_14-trim-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-trim-方法"}},[t._v("#")]),t._v(" 14.trim() 方法")]),t._v(" "),s("p",[t._v("trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let str = "    Hello   ";\nlet s = str.trim();\nconsole.log(str); //    Hello\nconsole.log(s); //Hello\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);