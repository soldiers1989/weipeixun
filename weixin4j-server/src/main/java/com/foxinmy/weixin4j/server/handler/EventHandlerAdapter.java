package com.foxinmy.weixin4j.server.handler;

import com.foxinmy.weixin4j.exception.WeixinException;
import com.foxinmy.weixin4j.server.message.event.EventMessage;
import com.foxinmy.weixin4j.server.request.WeixinMessage;
import com.foxinmy.weixin4j.server.request.WeixinRequest;
import com.foxinmy.weixin4j.server.response.WeixinResponse;
import com.foxinmy.weixin4j.server.util.ClassUtil;

import java.util.Set;

/**
 * 事件消息适配器
 *
 * @className MessageHandlerAdapter
 * @author jy
 * @date 2015年5月17日
 * @since JDK 1.7
 * @see
 */
@SuppressWarnings("unchecked")
public abstract class EventHandlerAdapter<M extends EventMessage> implements
        WeixinMessageHandler {

    public boolean canHandle(WeixinRequest request, WeixinMessage message,
                             Set<String> nodeNames) throws WeixinException {
        return message != null
                && message.getClass() == ClassUtil.getGenericType(this.getClass())
                && canHandle0(request, (M) message);
    }

    /**
     * 能否处理请求
     *
     * @param request
     *            微信请求
     * @param message
     *            微信消息
     * @return true则执行doHandler
     * @throws WeixinException
     */
    public boolean canHandle0(WeixinRequest request, M message)
            throws WeixinException {
        return true;
    }

    public WeixinResponse doHandle(WeixinRequest request, WeixinMessage message,
                                   Set<String> nodeNames) throws WeixinException {
        return doHandle0(request, (M) message);
    }

    /**
     * 处理请求
     *
     * @param request
     *            微信请求
     * @param message
     *            微信消息
     * @return
     */
    public abstract WeixinResponse doHandle0(WeixinRequest request, M message)
            throws WeixinException;

}
