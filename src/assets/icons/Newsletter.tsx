const Newsletter = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className ? className : ""}
      width="34"
      height="33"
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="email_black_24dp">
        <path
          id="Path 83"
          d="M30.7926 8.6353C30.7926 7.14634 29.5294 5.9281 27.9855 5.9281H5.5279C3.98394 5.9281 2.7207 7.14634 2.7207 8.6353V24.8785C2.7207 26.3675 3.98394 27.5857 5.5279 27.5857H27.9855C29.5294 27.5857 30.7926 26.3675 30.7926 24.8785V8.6353ZM27.9855 8.6353L16.7567 15.4033L5.5279 8.6353H27.9855ZM27.9855 24.8785H5.5279V11.3425L16.7567 18.1105L27.9855 11.3425V24.8785Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default Newsletter;
