import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="detailContainer">
          <div className="detail">
            <div className="detail__pic">
              <img
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
                className="detail_img"
              ></img>
            </div>
            <div className="detail__data movie__data">
              <div className="detail__basic movie__basic">
                <h3 className="detail__title movie__title">
                  {location.state.title}
                </h3>
                <h5 className="detail__year movie__year">
                  {location.state.year}
                </h5>
              </div>
              <ul className="detail__genres genres">
                {location.state.genres.map((genre, index) => {
                  return (
                    <li key={index} className="genres__genre detail__genre">
                      {genre}
                    </li>
                  );
                })}
              </ul>
              <p className="detail__summary movie__summary">
                {location.state.summary}
              </p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
