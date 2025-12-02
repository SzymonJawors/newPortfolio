const Logo = () => {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 50"
      width="120"
      height="45"
      fill="none"
    >
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="38"
        fill="url(#logo-gradient)"
        style={{
          filter:
            "drop-shadow(0px 0px 5px rgba(168, 85, 247, 0.4))",
        }}
      >
        {"<Sj />"}
      </text>
    </svg>
  );
};

export default Logo;
