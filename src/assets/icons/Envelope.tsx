const Envelope = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className ? className : ""}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 26">
        <g id="Group 20">
          <g id="Group 19">
            <path
              id="Path 44"
              d="M15.7702 13.3171H1.75225C0.78451 13.3171 0 12.5326 0 11.5649V1.75225C0 0.78451 0.78451 0 1.75225 0H15.7702C16.738 0 17.5225 0.78451 17.5225 1.75225V11.5649C17.5225 12.5326 16.738 13.3171 15.7702 13.3171ZM1.75225 0.700901C1.1716 0.700901 0.700901 1.17161 0.700901 1.75225V11.5649C0.700901 12.1455 1.1716 12.6162 1.75225 12.6162H15.7702C16.3509 12.6162 16.8216 12.1455 16.8216 11.5649V1.75225C16.8216 1.17161 16.3509 0.700901 15.7702 0.700901H1.75225Z"
              fill="white"
            />
            <path
              id="Path 45"
              d="M8.76131 8.31257C8.36931 8.31198 7.99267 8.16007 7.70996 7.88852L0.809602 1.30355C0.686921 1.16713 0.690215 0.959185 0.817155 0.826725C0.944097 0.694264 1.15171 0.682129 1.29322 0.798897L8.19358 7.38387C8.51086 7.68827 9.01176 7.68827 9.32904 7.38387L16.2294 0.798897C16.3709 0.682129 16.5785 0.694266 16.7055 0.826725C16.8324 0.959185 16.8357 1.16713 16.713 1.30355L9.81266 7.88852C9.52995 8.16007 9.15331 8.31198 8.76131 8.31257Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Envelope;
