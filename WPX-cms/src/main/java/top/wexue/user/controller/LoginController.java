package top.wexue.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import top.wexue.common.model.Result;
import top.wexue.common.service.WeixinAPI;
import top.wexue.utils.BaseMethod;
import top.wexue.utils.Constants;
import top.wexue.user.utils.IpUtil;
import top.wexue.utils.MD5Util;
import top.wexue.dao.AuthCorpInfoDao;
import top.wexue.dao.LoginUserDao;
import top.wexue.model.SessionInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;


/**
 * @author lihb
 * @version V1.3.1
 * @Description 个人信息控制器（登陆）
 * @date 2014-1-8 下午3:36:28
 */

@Controller
public class LoginController {
    @Autowired
    private LoginUserDao loginUserDao;
    @Autowired
    private AuthCorpInfoDao authCorpInfoDao;
    @Autowired
    private WeixinAPI weixinAPI;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String welcomeJsp() {
        return "platform";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginJSP(HttpServletRequest request, String handlerUrl) {
        request.setAttribute("handlerUrl", handlerUrl);
        return "login";
    }

    /**
     * 用户登录
     *
     * @param session
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public Result login(String username, String password, HttpSession session, HttpServletRequest request) {
        Result result = new Result();
        try {
            Map<String, Object> user = loginUserDao.getUserByName(username);
            Map<String, Object> corp = authCorpInfoDao.getCorpById(user.get("corpid").toString());
            if (user != null) {
                if ((MD5Util.md5(password)).equals(user.get("password"))) {
                    SessionInfo sessionInfo = new SessionInfo();
                    sessionInfo.setIp(IpUtil.getIpAddr(request));
                    sessionInfo.setUsername(username);
                    sessionInfo.setId(user.get("id").toString());
                    sessionInfo.setCorpid(user.get("corpid").toString());
                    sessionInfo.setQyname(corp.get("corp_name").toString());
                    sessionInfo.setQyheader(corp.get("corp_square_logo_url").toString());
                    session.setAttribute(Constants.Config.SESSION_USER_NAME, sessionInfo);
                    //初始化
                    weixinAPI.initWeixinAPI(user.get("corpid").toString());
                    result.setObj(sessionInfo);
                    result.setSuccess(true);
                    result.setMsg(Constants.Message.LOGIN_SUCCESS);
                } else {
                    result.setSuccess(false);
                    result.setMsg(Constants.Message.LOGIN_PWD_ERROR);
                }
            } else {
                result.setSuccess(false);
                result.setMsg(Constants.Message.LOGIN_NO_USERNAME);
            }
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMsg(Constants.Message.LOGIN_FAILURE + e.getLocalizedMessage());
        }
        return result;
    }


    @RequestMapping(value = "/registJsp", method = RequestMethod.GET)
    public String registJsp(HttpServletRequest request, @RequestParam(value="userheader",required=true)String userheader,  @RequestParam(value="corpid",required=true)String corpid) {
        try {

            request.setAttribute("userheader", URLDecoder.decode(userheader, "utf-8"));

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        request.setAttribute("corpid", corpid);
        return "regist";
    }

    /**
     * 用户注册
     *
     * @return
     */
    @RequestMapping(value = "/user/reg", method = RequestMethod.POST)
    @ResponseBody
    public Result reg(HttpServletResponse response, String rusername, String rpassword, String rpasswordr, String tel, String corpid) {
        Result result = new Result();
        Map<String, Object> user = loginUserDao.getUserByName(rusername);
        String id = BaseMethod.createUUID(Constants.EntityType.LOGIN_USER);
        if (user == null) {
            int i = loginUserDao.save(id, rusername, MD5Util.md5(rpassword), tel, corpid);
            if (i == 1) {
                result.setSuccess(true);
                result.setMsg(Constants.Message.REG_SUCCESS);
            } else {
                result.setSuccess(false);
                result.setMsg(Constants.Message.REG_FAILURE);
            }
        } else {
            result.setSuccess(false);
            result.setMsg(Constants.Message.REG_EXIST_USERNAME);
        }
        return result;
    }
}
