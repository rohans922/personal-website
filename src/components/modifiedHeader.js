import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HeaderRow, HeaderTabs } from 'react-mdl';

const ModifiedHeader = props => {
    const { className, rowClassName, scroll, seamed, title, transparent,
            waterfall, hideTop, hideSpacer, children, ...otherProps } = props;

    const classes = classNames('mdl-layout__header', {
        'mdl-layout__header--scroll': scroll,
        'mdl-layout__header--seamed': seamed,
        'mdl-layout__header--transparent': transparent,
        'mdl-layout__header--waterfall': waterfall,
        'mdl-layout__header--waterfall-hide-top': waterfall && hideTop
    }, className);

    let isRowOrTab = false;
    React.Children.forEach(children, child => {
        if (child && (child.type === HeaderRow || child.type === HeaderTabs)) {
            isRowOrTab = true;
        }
    });

    return (
        <header className={classes} {...otherProps}>
            {isRowOrTab ? children : (
                <HeaderRow className={rowClassName} title={title} hideSpacer={hideSpacer}>{children}</HeaderRow>
            )}
        </header>
    );
};

ModifiedHeader.propTypes = {
    className: PropTypes.string,
    rowClassName: PropTypes.string,
    scroll: PropTypes.bool,
    seamed: PropTypes.bool,
    title: PropTypes.node,
    transparent: PropTypes.bool,
    waterfall: PropTypes.bool,
    hideTop: PropTypes.bool,
    hideSpacer: PropTypes.bool
};

export default ModifiedHeader;
