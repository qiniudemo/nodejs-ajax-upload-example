// 生成用于URL安全传输的base64编码字符
function urlsafe_base64_encode(content)
{
    // base64_encode() 方法在 public/assets/js/base64_encode.js 中有定义
    return base64_encode(content).replace(/\+/g, '-').replace(/\//g, '_');
}

// 生成格式为 /rs-put/<EncodedEntryURI>/mimeType/<EncodedMimeType> 这样的字符串
function generate_rs_put_path(tbName, fileKey, mimeType)
{
    var mimeType = mimeType || 'application/octet-stream';
    var entryURI = tbName + ':' + fileKey;
    return '/rs-put/' + urlsafe_base64_encode(entryURI) + '/mimeType/' + urlsafe_base64_encode(mimeType);
}

// 生成一个随机字符串
function generate_random_string(length) {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyz';
    var sRnd = '';
    for (var i=0; i<length; i++){
        var randomPoz = Math.floor(Math.random() * chars.length);
        sRnd += chars.substring(randomPoz,randomPoz+1);
    }
    return sRnd;
}
