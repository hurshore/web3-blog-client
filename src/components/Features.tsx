const features = [
  'Immutable Content',
  'Zero Censorship',
  'Earn Ethereum',
  'Transparent Donations',
];

export default () => (
  <div>
    {features.map((feature, index) => (
      <div key={index} className="">
        <p>{feature}</p>
        {index !== features.length - 1 && (
          <div className="h-px bg-purple-300 my-3" />
        )}
      </div>
    ))}
  </div>
);
