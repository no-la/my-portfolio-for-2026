import Tag from '../tag/tag';

const TagList = ({ tags }) => {
  return (
    <div>
      {tags.map((t, i) => (
        <Tag tagName={t} key={`tag-${t}`} />
      ))}
    </div>
  );
};

export default TagList;
