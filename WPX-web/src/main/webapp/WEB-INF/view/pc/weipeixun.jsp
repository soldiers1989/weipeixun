<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="">
    <meta name="description" content="新闻公告提供公司动态、通知公告（比如人力消息、财务通知等）、员工生日祝福等信息的发布和展现">
    <meta name="keywords" content="微信企业号功能,免费微信企业号应用,企业号应用,微信企业级应用,微信企业号第三方应用,微信企业号应用中心">
    <title>应用中心-天天微学</title>
    <link href="<%=basePath%>/css/pc/index.css" rel="stylesheet" media="screen" type="text/css">
    <script charset="utf-8" src="<%=basePath%>/js/pc/v.js"></script>
    <script language="javascript" type="text/javascript" src="<%=basePath%>/js/lib/jQuery-2.1.4.min.js"></script>
    <script language="javascript" type="text/javascript" src="<%=basePath%>/js/pc/common.js"></script>
    <script src="<%=basePath%>/js/pc/h.js" type="text/javascript"></script>
    <style>
        .en-markup-crop-options div div:first-of-type {
            margin-left: 0px !important;
        }
    </style>
</head>
<body class="applyBody">
<link rel="icon" href="<%=basePath%>/image/pc/favicon.ico">
<div id="header">
    <div style="height: 5px;background-color: #FF9B0C"></div>
    <div class="navbar w960">
        <a title="微信企业培训应用，首选微培训云平台" href="/"
           class="logo"><img src="<%=basePath%>/image/pc/logo.png" style="height: 64px" alt="微培训logo"></a>
        <a href="https://qy.weixin.qq.com/cgi-bin/3rd_info?action=getinfo&t=3rd_isp_cert&uin=566001800" target="_blank"
           style="position: absolute;left: 180px;top: 13px;"><img src="<%=basePath%>/image/pc/qiyehaolink.png"
                                                                  alt="企业号登录"></a>
        <ul id="nav">
            <li class="active"><a href="/">首页</a></li>
            <li><a href="<%=basePath%>/app/weipeixun">应用中心</a></li>
            <%--<li><a href="http://www.wexue.top:8080/WPX-cms/registJsp" class="kt">免费开通</a></li>--%>
            <li class="login" style="margin-left:10px"><a href="http://www.wexue.top:8080/WPX-cms/" target="_blank"
                                                          rel="nofollow">管理平台</a>
            </li>
        </ul>
    </div>
</div>
<div class="applyWrapBg">
    <div class="title">3套件/16应用 均可安装使用</div>
    <div class="container">
        <div class="more-news hidden">
            ﻿
            <div class="apply_l">
                <dl>
                    <dt style="margin-top:-4px;"><a href="<%=basePath%>/app/weipeixun">微培训套件</a></dt>
                    <dd><a href="<%=basePath%>/app/pxkc"><img
                            src="<%=basePath%>/image/pc/icon_11.png">培训课程<span>New</span></a>
                    </dd>
                    <dd><a href="<%=basePath%>/app/wdkc"><img
                            src="<%=basePath%>/image/pc/icon_3.png">我的课程<span>New</span></a>
                    </dd>

                </dl>
                <dl>
                    <dt><a href="#">消息服务套件</a></dt>
                    <dd><a href="<%=basePath%>/app/qlxz"><img
                            src="<%=basePath%>/image/pc/icon_4.png">群聊小组<span>New</span></a>
                    </dd>
                </dl>
                <dl>
                    <dt><a href="#">销售管理套件</a></dt>
                    <dd><a href="#"><img src="<%=basePath%>/image/pc/icon_13.png">移动外勤<span>未开通</span></a>
                    </dd>
                    <dd><a href="#"><img src="<%=basePath%>/image/pc/icon_12.png">移动CRM<span>未开通</span></a></dd>
                    <dd><a href="#"><img src="<%=basePath%>/image/pc/icon_2.png">知识百科<span>未开通</span></a>
                    </dd>
                </dl>
                <dl>
                    <dt><a href="#">人力管理套件</a></dt>
                    <!-- <dd><a href="/apply/redpack/"><img src="/templets/default/webapp_icon/icon_24.png">企业红包<span>New</span></a></dd> -->
                    <dd><a href="#"><img src="<%=basePath%>/image/pc/icon_11.png">培训课程<span>未开通</span></a>
                    </dd>
                    <dd><a href="#"><img src="<%=basePath%>/image/pc/icon_5.png">企业活动<span>未开通</span></a>
                    </dd>
                    <dd><a href="#"><img
                            src="<%=basePath%>/image/pc/icon_7.png">问卷调查<span>未开通</span></a>
                    </dd>
                    <dd><a href="javascript:alert('还未开通，敬请期待！')"><img src="<%=basePath%>/image/pc/icon_9.png">同事社区<span>未开通</span></a>
                    </dd>
                </dl>
            </div>

            <script type="text/javascript">
                $(document).ready(function () {
                    $('.click-out').click(function (e) {
                        e.preventDefault();
                        $('.mask-box').show();
                        $('.closed-container-box').show();
                        $('body').css('overflow', 'hidden');
                    })
                    $('.close-btn').click(function () {
                        $('.mask-box').hide();
                        $('.closed-container-box').hide();
                        $('body').css('overflow', 'auto');
                    })


                    var pingmuh = document.documentElement.clientHeight;
                    $('.closed-container-box').css('height', pingmuh * 0.85 + 20);
                    $('.closed-container-box').css('top', '50%');
                    $('.closed-container-box').css('margin-top', -pingmuh * 0.85 / 2);
                    $('.add-azheight').css('height', pingmuh * 0.85 - 22);

                });
            </script>


            <div class="apply_r apply_bgBox">
                <div class="apply_item p0">
                    <div class="apply_bg">
                        <div class="bg_text" style="color:#2d9a93">
                            <img src="<%=basePath%>/image/pc/suite1.png">

                            <p>应用场景：企业培训、课程学习</p>
                            <a class="btn" target="_blank" href="<%=basePath%>/auth/suite">免费安装</a>
                            <!-- <a  class="click-out" href="/suiteps/question/st_help.html"  target="_blank">套件安装指引</a>-->
                        </div>
                    </div>
                    <p class="c333 hidden mt40 mb5"><span class="fz18">包含应用</span> <span
                            class="to-enroll">安装套件需要微信企业号（<a class="to-enroll-con" href="https://qy.weixin.qq.com"
                                                             rel="nofollow"
                                                             target="_blank">注册</a>），建议使用 chrome 浏览器</span></p>
                </div>
                <div class="apply_item pb0">

                    <a class="applyImg" href="<%=basePath%>/app/pxkc"><img src="<%=basePath%>/image/pc/icon_11.png"
                                                                           alt="培训课程">培训课程</a>
                    <a class="applyImg" href="<%=basePath%>/app/wdkc"><img src="<%=basePath%>/image/pc/icon_3.png"
                                                                           alt="我的课程">我的课程</a>

                    <p class="c333 hidden mt30 mb5"><span class="fz18">套件介绍</span></p>
                </div>
                <div class="apply_item hidden borderNone">
                    <div>微培训套件深度融合微信企业号。</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="clearfix"></div>
﻿
<div id="footer">
    <div class="footer w960">
        <div class="footerwrap">
            <dl class="first">
                <dt>产品</dt>
                <dd><a href="<%=basePath%>/pc/weipeixun">应用中心</a></dd>
            </dl>
            <dl>
                <dt>开通</dt>
                <dd><a href="#">免费安装</a></dd>
                <dd><a href="#">体验通道</a></dd>
            </dl>
            <dl>
                <dt>行业</dt>
                <dd><a href="/">案例赏析</a></dd>
            </dl>
            <dl>
                <dt>关于</dt>
                <dd><a href="/">关于我们</a></dd>
            </dl>
            <dl>
                <dt><a style="color: #cbcbcb;font-size: 14px;line-height: inherit;"
                       href="http://wbg.do1.com.cn/Flink/"
                       target="_blank">友链</a></dt>
                <dd><a href="www.baidu.com" target="_blank" rel="nofollow">百度</a></dd>
                <dd><a href="www.qy.weixin.qq.com" target="_blank" rel="nofollow">微信企业号</a></dd>
            </dl>
        </div>
        <div class="footerwrap">
            <div class="footer_text">
                <p class="ml0">咨询热线：400-111-2626&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;公司总部：北京<a
                        href="http://www.weibo.com/u/5247508297?topnav=1&wvr=6&topsug=1" class="weibo"
                        target="_blank"
                        rel="nofollow">关注微博</a><br>Copyright
                    © 2014-2015 DO1.com.cn All Rights Reserved 粤B2-20062018号&nbsp;&nbsp;|&nbsp;&nbsp;北京先睿思能科技发展有限公司&nbsp;&nbsp;技术支持
                </p>

            </div>
        </div>

    </div>
</div>

<div id="leftToolBar" class="leftToolBar">
    <div id="gongzhonghao_wrap">
        <div id="gongzhonghao" class="tooldiv">
            <img title="天天微学云平台微信公众号" alt="微信号" src="<%=basePath%>/image/pc/left_icon01.png" class="k_png">

            <p>微信号</p>

            <div style="display: none;" class="qr_tooldiv"><img alt="天天微学云平台公众号"
                                                                src="<%=basePath%>/image/pc/admin_qrcode.png">

                <p>微信扫码，获取产品帮助</p>
            </div>
        </div>
    </div>
</div>


</body>
</html>