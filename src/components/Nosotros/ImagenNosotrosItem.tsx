interface ImagenNosotrosItemProps {
  source: string;
  title: string;
  name: string;
}

const ImagenNosotrosItem = ({
  source,
  title,
  name,
}: ImagenNosotrosItemProps) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full min-h-30 max-h-60 object-cover object-[50%_30%]"
        alt={title}
        src={source}
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{title}</p>
      </div>
      <img src="" alt="" />
    </div>
  );
};
export default ImagenNosotrosItem;
