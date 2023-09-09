type Props = {
  fromColor: string;
  toColor: string;
};

const Asterisk = ({ fromColor, toColor }: Props) => (
  <div
    className={`w-full h-full bg-gradient-to-br from-${fromColor} to-${toColor}`}
    style={{ clipPath: 'url(#curve-XXKLHy6lD-88sn5i)' }}
  >
    <svg width="100%" height="100%">
      <clipPath
        id="curve-XXKLHy6lD-88sn5i"
        clipPathUnits="objectBoundingBox"
        transform="scale(0.005)"
      >
        <path d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"></path>
      </clipPath>
    </svg>
  </div>
);

export default Asterisk;
