const User = require('../libs/user');
const returns = require('../libs/return');

module.exports = async (ctx, next) => {
    if (ctx.customeNeedToken) {
        if (ctx.request.headers.hasOwnProperty('TOKEN')) {
            ctx.customUser = new User(ctx.request.headers['TOKEN']);
            if ((await ctx.customUser.getUser()) === null) {
                ctx.returns(returns.code.INVALID_TOKEN, null, 'the TOKEN is time out');
            }
        } else {
            ctx.returns(returns.code.MISSING_TOKEN, null, 'the request need token');
        }
    }
    await next();
    ctx.customUser = null;
};
