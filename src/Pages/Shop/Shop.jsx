import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../../Redux/shop/shopActions";
import Spinner from "../../Components/Spinner/Spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../../Components/CollectionOverview/CollectionOverviewContainer")
);
const CollectionContainer = lazy(() =>
  import("../Collection/CollectionContainer")
);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}/`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
