import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Route, HashRouter, Routes } from 'react-router-dom';
import './index.less'
import BaseLayout from '@/layouts/index'
import Login from '@/pages/login/index'
import NotFound from '@/pages/home/404'

window.React = React;

function render(props) {
  const container = document.getElementById('container');
  const root = createRoot(container);

  root.render(<HashRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path='/system' element={<BaseLayout />}>
        <Route path="users" />
        <Route path="roles" />
        <Route path="rules" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>);

  return root
}

// @ts-ignore
if (process.env.BASE_NODE === 'local' || !window.__POWERED_BY_QIANKUN__) {
  render({})
}


/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  const __props = props;

  render({ ...__props })
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  const container = document.getElementById('container')
  if (container) {
    ReactDOM.unmountComponentAtNode(
      container
    );
  }
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}