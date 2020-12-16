'use strict';

exports.Button = function create() {
    let clickAction;
    const onClick = (action) => clickAction = action;
    const click = () => clickAction();
    return {
        onClick,
        click
    };
};