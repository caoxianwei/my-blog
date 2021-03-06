/*
 * @Author: houzhitao 
 * @Date: 2018-08-29 14:20:01 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-10-10 15:33:38
 * @file: 全局注入store，用作状态保留页面 （经测试react生命周期仅在首次进入调用）
 */

import App, {Container} from 'next/app'
import React from 'react'
import withStore from '../stores/withStore'
import { Provider } from 'mobx-react'
import NextSeo from 'next-seo';
import SEO from '../seo/base-seo.js';
import Loading from '../components/loading'

require('../comUtils/intercept');
class MyApp extends App {
    render () {
        const {Component, pageProps, mobxStore} = this.props;
        return (
            <Container>
                <NextSeo config={SEO}></NextSeo>
                <Provider {...mobxStore}>
                    <Component {...pageProps} />
                </Provider>
                <Loading/>
            </Container>
        )
    }
}

export default withStore(MyApp)
