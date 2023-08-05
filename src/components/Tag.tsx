interface Props {
  tag: string;
}

export default ({ tag }: Props) => (
  <div className="p-2 px-4 rounded-full border border-beige mr-2">
    <p className="text-xs text-beige">#{tag}</p>
  </div>
);
