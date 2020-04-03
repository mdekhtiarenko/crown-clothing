import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectoryItems} from "../../redux/directory/directory.selector";

const Directory = ({directoryItems}) => {

    return (
        <div className='directory-menu'>
            {directoryItems.map(({id, ...otherProps}) => (
                <MenuItem key={id} {...otherProps}/>
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    directoryItems: selectDirectoryItems
});

export default connect(mapStateToProps)(Directory);