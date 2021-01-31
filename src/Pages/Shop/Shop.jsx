import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionContainer from "../Collection/CollectionContainer";
import CollectionOverviewContainer from "../../Components/CollectionOverview/CollectionOverviewContainer";

import { fetchCollectionStartAsync } from "../../Redux/shop/shopActions";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}/`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
