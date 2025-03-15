import React from "react";
import PropTypes from "prop-types";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.warn(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div className={`certificate-card ${isDark ? "dark-mode" : ""}`}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image || "/default-image.jpg"}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={`card-title ${isDark ? "dark-mode" : ""}`}>
          {cardInfo.title}
        </h5>
        <p className={`card-subtitle ${isDark ? "dark-mode" : ""}`}>
          {cardInfo.description}
        </p>
      </div>
      {Array.isArray(cardInfo.footer) && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => (
            <span
              key={i}
              className={`certificate-tag ${isDark ? "dark-mode" : ""}`}
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

AchievementCard.propTypes = {
  cardInfo: PropTypes.shape({
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footer: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  isDark: PropTypes.bool
};

AchievementCard.defaultProps = {
  isDark: false
};
