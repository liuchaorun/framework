exports.code = {
    SUCCESS: 0,
    PARAM_ERROR: 1,
    INVALID_TOKEN: 2,
    MISSING_TOKEN: 3,
};

exports.msgWrapper = (code, data, err) => {
    return {
        code,
        data,
        err
    }
};
