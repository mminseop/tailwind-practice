export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img className="w-[300px] rounded-[10px] mb-[3px]" src={content.img} alt={content.title} />
      <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] p-[4px_5px] rounded-[3px]">모집중</span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-[rgb(160,160,160)]">{content.subtitle}</p>
    </div>
  );
}
