import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import { selectCollection } from "../../Redux/shop/shopSelector";

import "./Collection.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            className="collection-item"
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
