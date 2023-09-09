type Props = {
  tag: string;
  onClick?: () => void;
};

const Tag = ({ tag, onClick }: Props) => (
  <div
    className="p-2 px-4 rounded-full border border-beige mr-2"
    onClick={onClick}
  >
    <p className="text-xs text-beige">#{tag}</p>
  </div>
);

export default Tag;
