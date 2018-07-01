const stream = weex.requireModule('stream')

export default {
    GET: function(api, callback) {
        return stream.fetch({
            method: 'GET',
            type: 'json',
            url: `http://cdn.zwwill.com/yanxuan/${api}`
        }, callback)
    }
}