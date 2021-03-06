<%--
  Created by IntelliJ IDEA.
  User: lihb
  Date: 10/1/15
  Time: 2:17 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>后台-微培训</title>
    <meta charset="UTF-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0,initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="<%=basePath%>/lib/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="<%=basePath%>/css/animate.css"/>
    <link rel="stylesheet" href="<%=basePath%>/css/platform.css"/>
    <link href="<%=basePath%>/img/dep_icon.jpg" rel="shortcut icon">
    <script src="<%=basePath%>/js/jQuery-2.1.4.min.js"></script>
    <script src="<%=basePath%>/js/jquery.form.js"></script>
    <script src="<%=basePath%>/lib/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

</head>
<body>
<div id="tip" class="tip alert alert-danger animated bounceInRight hidden">
    提示：
</div>
<div class="header">
    <nav class="navbar navbar-default navbar-fixed-top">
        <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
        <div class="container-fluid">
            <div class="navbar-header">
                <c:if test="${not empty userinfo.qyheader}">
                    <img style="border:solid white 2px;height: 40px;margin: 5px 20px 5px 40px;"
                         src="${userinfo.qyheader}">
                </c:if>
                <c:if test="${empty userinfo.qyheader}">
                    <img style="border:solid white 2px;height: 40px;margin: 5px 20px 5px 40px;"
                         src="<%=basePath%>/img/logo.png">
                </c:if>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                <ul class="nav navbar-nav" id="menu">
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/portal"><i class="glyphicon glyphicon-home"></i>
                            <span>学院门户</span></a>
                    </li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/project"><i class="glyphicon glyphicon-tasks"></i>
                            <span>项目</span></a></li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/course"><i class="glyphicon glyphicon-hdd"></i> <span>课程</span></a>
                    </li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/group"><i class="glyphicon glyphicon-user"></i>
                            <span>学习小组</span></a></li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/research"><i class="glyphicon glyphicon-book"></i>
                            <span>调研测试</span></a>
                    </li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/speaker"><i class="glyphicon glyphicon-share"></i>
                            <span>资源管理</span></a>
                    </li>
                    <li role="presentation"><a href="<%=basePath%>/platform/material">
                        <i class="glyphicon glyphicon-folder-close"></i>
                        <span>培训资料</span></a></li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/notify"><i class="glyphicon glyphicon-envelope"></i>
                            <span>发消息</span></a>
                    </li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform/message">
                            <i class="glyphicon glyphicon glyphicon-bell"></i> <span>通知中心</span>
                        </a>

                    </li>
                    <li role="presentation">
                        <a href="<%=basePath%>/platform">
                            <c:if test="${!empty userinfo.useravator}">
                                <img src="${userinfo.useravator}" style="height: 30px">
                            </c:if>
                            <c:if test="${empty userinfo.useravator}">
                                <img src="<%=basePath%>/img/dep_icon.jpg" style="height: 30px;margin-top: -10px">
                            </c:if>
                            <c:if test="${!empty userinfo.useravator}">
                                <span class="div-user">${userinfo.username}</span>
                            </c:if>
                            <c:if test="${empty userinfo.useravator}">
                                <span class="div-user">匿名</span>
                            </c:if>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="<%=basePath%>/user/logout">
                            <i class="glyphicon glyphicon-off div-user"></i> <span class="div-user">退出</span>
                        </a>
                    </li>


                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>
</div>