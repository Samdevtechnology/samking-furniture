const Review = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className ? className : ""}
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="rate_review_black_24dp">
        <path
          id="Path 102"
          d="M29.7999 3.24384H6.60016C5.00518 3.24384 3.7147 4.50382 3.7147 6.0438L3.7002 31.2435L9.50013 25.6436H29.7999C31.3949 25.6436 32.6999 24.3836 32.6999 22.8436V6.0438C32.6999 4.50382 31.3949 3.24384 29.7999 3.24384ZM29.7999 22.8436H8.29664L7.44115 23.6696L6.60016 24.4816V6.0438H29.7999V22.8436ZM16.0251 20.0436H26.8999V17.2437H18.925L16.0251 20.0436ZM21.622 11.8257C21.912 11.5457 21.912 11.1117 21.622 10.8317L19.0555 8.35378C18.7655 8.07378 18.316 8.07378 18.026 8.35378L9.50013 16.5857V20.0436H13.0816L21.622 11.8257Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default Review;