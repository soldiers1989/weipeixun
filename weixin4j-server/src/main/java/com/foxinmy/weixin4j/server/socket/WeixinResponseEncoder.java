package com.foxinmy.weixin4j.server.socket;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToMessageEncoder;
import io.netty.util.internal.logging.InternalLogger;
import io.netty.util.internal.logging.InternalLoggerFactory;

import java.util.List;

import com.foxinmy.weixin4j.exception.WeixinException;
import com.foxinmy.weixin4j.server.response.WeixinResponse;
import com.foxinmy.weixin4j.server.type.EncryptType;
import com.foxinmy.weixin4j.server.util.AesToken;
import com.foxinmy.weixin4j.server.util.HttpUtil;
import com.foxinmy.weixin4j.server.util.MessageUtil;
import com.foxinmy.weixin4j.server.util.ServerToolkits;

/**
 * 微信回复编码类
 * 
 * @className WeixinResponseEncoder
 * @author jy
 * @date 2014年11月13日
 * @since JDK 1.6
 * @see <a
 *      href="http://mp.weixin.qq.com/wiki/0/61c3a8b9d50ac74f18bdf2e54ddfc4e0.html">加密接入指引</a>
 * @see com.foxinmy.weixin4j.server.response.WeixinResponse
 */
public class WeixinResponseEncoder extends
		MessageToMessageEncoder<WeixinResponse> {

	private final InternalLogger logger = InternalLoggerFactory
			.getInstance(getClass());

	@Override
	protected void encode(ChannelHandlerContext ctx, WeixinResponse response,
			List<Object> out) throws WeixinException {
		WeixinMessageTransfer messageTransfer = ctx.channel()
				.attr(ServerToolkits.MESSAGE_TRANSFER_KEY).get();
		EncryptType encryptType = messageTransfer.getEncryptType();
		StringBuilder content = new StringBuilder();
		content.append("<xml>");
		content.append(String.format("<ToUserName><![CDATA[%s]]></ToUserName>",
				messageTransfer.getFromUserName()));
		content.append(String.format(
				"<FromUserName><![CDATA[%s]]></FromUserName>",
				messageTransfer.getToUserName()));
		content.append(String.format("<CreateTime>%d</CreateTime>",
				System.currentTimeMillis() / 1000l));
		content.append(String.format("<MsgType><![CDATA[%s]]></MsgType>",
				response.getMsgType()));
		content.append(response.toContent());
		content.append("</xml>");
		logger.info("响应未编码内容:\n{}", content);
		if (encryptType == EncryptType.AES&&messageTransfer.getToUserName()!=null) {
			AesToken aesToken = messageTransfer.getAesToken();
			String nonce = ServerToolkits.generateRandomString(32);
			String timestamp = Long
					.toString(System.currentTimeMillis() / 1000l);
			String encrtypt = MessageUtil.aesEncrypt(aesToken.getWeixinId(),
					aesToken.getAesKey(), content.toString());
			String msgSignature = MessageUtil.signature(aesToken.getToken(),
					nonce, timestamp, encrtypt);
			content.delete(0, content.length());
			content.append("<xml>");
			content.append(String
					.format("<Nonce><![CDATA[%s]]></Nonce>", nonce));
			content.append(String.format(
					"<TimeStamp>%s</TimeStamp>", timestamp));
			content.append(String
					.format("<MsgSignature><![CDATA[%s]]></MsgSignature>",
							msgSignature));
			content.append(String.format("<Encrypt><![CDATA[%s]]></Encrypt>",
					encrtypt));
			content.append("</xml>");
			logger.debug("响应 {} 编码 内容:\n{}", encryptType, content);
		}
		ctx.writeAndFlush(HttpUtil.createHttpResponse(content.toString(),
				ServerToolkits.CONTENTTYPE$APPLICATION_XML));
	}
}