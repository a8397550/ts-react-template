# vision-canvas-l是什么
vision-canvas-l致力打造一个简单的，可复用的，可视化搭建平台，可以通过vision-canvas-l快速的搭建一个可视化的构建环境
<br>
1.不对画布中的组件做任何限制，你可以完全自定义你想要的组件，通过react制作组件，之后只需要在控制中心注册即可，注册方法非常简单
```javascript
import { VisionCanvasLBus } from '@/core/component-dispatch-center-bus/index'; // 导入控制中心
VisionCanvasLBus.registerComponent(DemoA, 'DemoA');
VisionCanvasLBus.registerComponent(DemoB, 'DemoB');
```
2.实现你的自定义组件<br>
2.1自定义你的属性栏显示，在你的项目中实现一个prototype.tsx文件
```javascript
import * as React from 'react'
import AttributeBundle from '@/core/attribute-panes/attribute-class'
import { InputSetter } from '@/core/components/attribute/input-setter'

export default AttributeBundle.createPrototype({
  /**组件显示的title*/
  title: 'DemoA',
  /**组件名称与你注册组件的名称相同*/
  componentName: 'DemoA',
  /**你的属性栏配置*/
  configure: [
    {
      /**属性的名称，非常重要，会按你声明的名称写入到组件的props中*/
      name: 'title',
      /**属性对应的展示标题*/
      title: 'titile',
      /**
        * 提供了多种类型，可以参考项目中的@/test/attribute-block-test.tsx文件
        * 'inline', 'block', 'none', 'entry'
      */
      display: 'none',
      /**默认的初始值*/
      initiaValue: '666',
      /**块及标题*/
      blockTitle: '内容',
      /**可能需要的options参数*/
      options: [
        { label: 'a', value: 'a' }
      ],
      /**是否支持绑定变量*/
      dataBinding: {
        dataBindingType: 'value',
        editorValue: '',
        value: ''
      },
      /**
        对应的属性栏展示组件
        @/core/components/attribute中实现了很多属性栏对应的组件
        例如 
        event-function-popover
        event-json-popover
        switch
        number-setter 等
      */
      setter: <InputSetter />
    }
  ]
})
```
2.2 将属性栏加入到配置中
import DemoAPrototype from '@/components/demo-a/prototype'
import DemoBPrototype from '@/components/demo-b/prototype'

3.将组件加入到组件栏中<br>
可以参考layout-container里面this.state.arr的配置

4.预览<br>
可以参考layout-container/view.tsx

# 依赖
组件是基于react开发的所以依赖react<br>
还使用了ant design，antd的组件<br>

# vision-canvas-l的开发历程
> 控制中心
>> 注册组件<br>
>> 数据驱动能力，关联组件通信，驱动组件变化<br>

> 画布
>>使用画布实现的容器<br>
>>画布骨架<br>

> 左侧面板
>>页面Schema面板<br>
>>组件树<br>
>>组件栏<br>
>>>拖拽模块<br>
>>
>>数据源<br>
>>>api数据源<br>
>>>变量数据源<br>

> 属性栏

