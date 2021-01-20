import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: "1",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: "2",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: "3",
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: "4",
          size: "large",
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: "5",
          size: "large",
          linkUrl: "men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;