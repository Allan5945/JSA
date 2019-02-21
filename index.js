/*!
 * Jsa.js v0.0.1
 * (c) 2019-2019 Allan
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.Jsa = factory());
}(this, function () {
    'use strict';

    var Events = [
        "a-click",
        "a-text",
        "a-html",
        // "id",
        // "type",
        // "class",
        // "name"
    ];


    
    /**
    * @Description: 解析节点
    * @Param: d 节点
    * @Param: dt 节点对应数据
    * @Param: obj 组件对应全部数据
    * @return:
    * @Author: allan
    * @Date: 2019/2/21
    */    
    function parseDom(d, dt, obj) {
        console.log(d, dt, obj)
        var ats = d.attributes,
            evs = [],
            methods = obj.methods,
            data = obj.data
        ;
        for (var i = 0; i < ats.length; i ++) {
            var k = ats[i].name;
            var v = ats[i].value;
            if (Events.indexOf(k) !== -1) {
                switch (k) {
                    case "a-click" :
                        if (methods[v]) {
                            evs.push({
                                t: "a-click",
                                methods: [methods[v]]
                            })
                        }
                        break;
                    case "a-text" :
                        break;
                    case "a-html" :
                        break;
                }

            }
        }
        dt.data = {
            nodeType: d.nodeName,
            attributes: d.attributes,
            methods: []
        };
        dt.children = [];
    };


    /**
    * @Description:  解析dom树
    * @Param: d 节点
    * @Param: dt 节点对应数据
    * @Param: obj 组件对应全部数据
    * @return:
    * @Author: allan
    * @Date: 2019/2/21
    */
    function initDom(d, dt, obj) {
        parseDom(d, dt, obj);
        if (d.hasChildNodes()) {
            var c = d.children;
            for (var i = 0; i < c.length; i ++) {
                var ci = c[i];
                var ldt = new Object({
                    data: {
                        nodeType: ci.nodeName,
                    },
                    children: []
                });
                dt.children.push(ldt);
                initDom(ci, ldt, obj);
            }
        }
    }


    /**
    * @Description: 解析指令
    * @Param:
    * @return:
    * @Author: allan
    * @Date: 2019/2/21
    */
    function parseDomS() {
        for (var i = 0; i < v.attributes.length; i++) {
            console.log(v.attributes[i].name)
        }
        // console.log(v.attributes[0])
        // console.log(v.attributes[0].name)
        // console.log(v.attributes)
        // console.log(v.attributes.id)
    }


    /**
    * @Description: 绑定组件，数据，方法
    * @Param:
    * @return:
    * @Author: allan
    * @Date: 2019/2/21
    */
    function cos(d) {


    }
    

    /**
    * @Description: 创建组件
    * @Param:
    * @return:
    * @Author: allan
    * @Date: 2019/2/21
    */
    function Component(obj) {
        var dva = document.createElement("div"), dts = {};
        dva.innerHTML = obj.node;
        initDom(dva.children[0], dts, obj);
    }
    Component.prototype.createNode = function () {

    };


    Component({
        node: `<div a-text="name" a-click="open"></div>`,
        data: {
            name: "allan"
        },
        methods: {
            open : function () {
                alert(666);
            }
        }
    })


    // var dts = {
    //
    // };
    // initDom(document.getElementById("app"), dts);
    // console.log(dts)
}));










