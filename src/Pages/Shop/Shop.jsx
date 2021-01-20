import React, { Component } from "react";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import ShopData from "./ShopData";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
